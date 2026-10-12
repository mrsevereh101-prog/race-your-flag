# Cut a 3D lettering sheet (green screen, glyphs in rows) into one picture per character.
# usage: python3 art/font_cut.py sheet.jpg outdir "ABCDEFG" "HIJKLM"   (one string per row)
import sys,os,numpy as np
from PIL import Image
src,out=sys.argv[1],sys.argv[2];rows=sys.argv[3:]
im=np.asarray(Image.open(src).convert('RGB')).astype(float);r,g,b=im[...,0],im[...,1],im[...,2]
d=g-np.maximum(r,b);a=np.clip((95-d)/55,0,1)
rgb=im.copy();m=g>np.maximum(r,b);rgb[...,1]=np.where(m,np.maximum(r,b),g)
mask=a>0.5;os.makedirs(out,exist_ok=True)
ys=np.where(mask.sum(1)>2)[0];bands=[];s=ys[0];p=ys[0]
for y in ys[1:]:
    if y-p>8:bands.append((s,p));s=y
    p=y
bands.append((s,p));assert len(bands)==len(rows),(len(bands),bands)
NAME={'%':'pct','/':'slash','+':'plus'}
for (y0,y1),chars in zip(bands,rows):
    xs=np.where(mask[y0:y1+1].sum(0)>1)[0];runs=[];s=xs[0];p=xs[0]
    for x in xs[1:]:
        if x-p>6:runs.append((s,p));s=x
        p=x
    runs.append((s,p))
    # merge pieces of one glyph (like the % sign) until the count matches
    while len(runs)>len(chars):
        gaps=[runs[i+1][0]-runs[i][1] for i in range(len(runs)-1)];i=gaps.index(min(gaps));runs[i:i+2]=[(runs[i][0],runs[i+1][1])]
    # letters that touch: split the widest piece at its thinnest column
    while len(runs)<len(chars):
        i=max(range(len(runs)),key=lambda k:runs[k][1]-runs[k][0]);x0,x1=runs[i];w=x1-x0
        col=mask[y0:y1+1,x0:x1+1].sum(0);lo,hi=int(w*0.3),int(w*0.7);cut=x0+lo+int(np.argmin(col[lo:hi]))
        runs[i:i+1]=[(x0,cut),(cut+1,x1)]
    assert len(runs)==len(chars),(chars,len(runs))
    for (x0,x1),ch in zip(runs,chars):
        sub=mask[y0:y1+1,x0:x1+1];yy=np.where(sub.any(1))[0]
        c=np.dstack([rgb[y0:y1+1,x0:x1+1],a[y0:y1+1,x0:x1+1]*255]).astype(np.uint8)
        g_=Image.fromarray(c,'RGBA');pad=4
        canvas=Image.new('RGBA',(g_.width+2*pad,g_.height+2*pad),(0,0,0,0));canvas.paste(g_,(pad,pad))
        h=200;canvas=canvas.resize((max(1,round(canvas.width*h/canvas.height)),h),Image.LANCZOS)
        canvas.save(f"{out}/{NAME.get(ch,ch)}.webp",quality=90)
    print(chars,'ok')
