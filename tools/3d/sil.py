import numpy as np,json,sys
from PIL import Image,ImageDraw
R=400;D='sil/';names=sys.argv[1:];out={};tiles=[]
def runs(M,r):
    row=M[r];idx=np.flatnonzero(np.diff(np.concatenate([[0],row,[0]])));return [((a-200)/R,(b-1-200)/R) for a,b in zip(idx[::2],idx[1::2])]
for nm in names:
    P=np.fromfile(D+nm+'.pos',np.float32).reshape(-1,3);I=np.fromfile(D+nm+'.idx',np.uint32).reshape(-1,3)
    im=Image.new('L',(R,R),0);dr=ImageDraw.Draw(im);px=np.stack([P[:,0]*R+200,(1-P[:,1])*R],1)
    for t in I:dr.polygon([tuple(px[k]) for k in t],fill=255)
    M=(np.array(im)[::-1]>0).astype(np.int8)  # row 0 = y 0
    H=P[:,1].max();Xm=P[:,0].max()
    sel=P[P[:,0]>Xm-0.04];yH=float(sel[:,1].min())
    # track arm upward from the hand
    r=int((yH+0.02)*R);cen=[];yA=None
    while r<int(0.9*H*R):
        rs=runs(M,r)
        if not rs:break
        a=rs[-1]
        if a[0]<=0.01 or len(rs)<2:break
        cen.append(((a[0]+a[1])/2,r/R,a[1]-a[0]));yA=r/R;r+=1
    tw=0.1
    for k in range(3,15):
        rs=[q for q in runs(M,int((yA-k*0.01)*R)) if q[0]<0.005 and q[1]>-0.005]
        if rs:tw=max(-rs[0][0],rs[0][1]);break
    c=np.array(cen);sel2=c[c[:,1]<yA-0.03];fit=np.polyfit(sel2[:,1],sel2[:,0],1)
    shy=yA+0.06;shx=float(np.polyval(fit,shy))+0.015
    hy=yH+0.03;hx=float(np.polyval(fit,hy));aw=float(np.median(c[:,2]))
    # neck
    best=(9,0.8*H)
    for r in range(int((yA+0.08)*R),int((H-0.06)*R)):
        rs=[q for q in runs(M,r) if q[0]<0.02 and q[1]>-0.02]
        if rs:
            w=rs[0][1]-rs[0][0]
            if w<best[0]:best=(w,r/R)
    neck=best[1]
    # legs
    split=None
    for r in range(int(min(yH,0.45)*R),int(0.1*R),-1):
        if M[r,200-2:200+3].sum()==0:
            rs=[q for q in runs(M,r) if abs(q[0])<0.25 or abs(q[1])<0.25]
            if any(q[1]<0 for q in rs) and any(q[0]>0 for q in rs):split=r/R;break
    skirt=split is None or split<0.24
    if skirt:split=0.26
    rs=[q for q in runs(M,int((split-0.04)*R)) if q[0]>0 and q[0]<0.25]
    hipx=(rs[0][0]+rs[0][1])/2 if rs and not skirt else 0.065
    hipy=split+0.13;kn=hipy*0.53
    rd=lambda x:round(float(x),3)
    J=dict(pelvis=[0,rd(hipy+0.02)],torso=[0,rd(hipy+0.07)],head=[0,rd(neck)],sh=[rd(shx),rd(shy)],elb=[rd(shx+0.52*(hx-shx)+0.008),rd(shy+0.52*(hy-shy))],hand=[rd(hx),rd(hy)],hip=[rd(hipx),rd(hipy)],knee=[rd(hipx+0.005),rd(kn)],tw=rd(tw),aw=rd(aw),split=rd(split),skirt=skirt)
    out[nm]=J
    t=Image.fromarray((M[::-1]*90).astype(np.uint8)).convert('RGB');d=ImageDraw.Draw(t)
    pt=lambda x,y:(x*R+200,(1-y)*R)
    for s in(1,-1):
        for a,b in(('sh','elb'),('elb','hand'),('hip','knee')):d.line([pt(s*J[a][0],J[a][1]),pt(s*J[b][0],J[b][1])],fill=(255,80,80),width=2)
        for k in('sh','elb','hand','hip','knee'):x,y=pt(s*J[k][0],J[k][1]);d.ellipse([x-4,y-4,x+4,y+4],fill=(255,220,0))
    for k,col in(('head',(0,200,255)),('pelvis',(0,255,0)),('torso',(255,0,255))):x,y=pt(0,J[k][1]);d.line([x-60,y,x+60,y],fill=col,width=2)
    y=pt(0,J['split'])[1];d.line([150,y,250,y],fill=(255,255,255),width=1);d.text((5,5),nm,fill=(255,255,255))
    tiles.append(t)
sh=Image.new('RGB',(5*R,((len(tiles)+4)//5)*R))
for i,t in enumerate(tiles):sh.paste(t,((i%5)*R,(i//5)*R))
sh.save('../pv/joints.png');json.dump(out,open('joints.json','w'))
for k,v in out.items():print(k,v)
