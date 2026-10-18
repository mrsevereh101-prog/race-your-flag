// Puts a new skin's mesh and texture onto the base hero's skeleton, copying bone weights from the nearest base vertex.
// For Tripo exports whose own skeleton is empty (all bones at 0,0,0).
// usage: node xfer.mjs base.glb newskin.glb out.glb
import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);const [bp,np,out]=process.argv.slice(2);
const B=await io.read(bp),N=await io.read(np);
const bprim=B.getRoot().listMeshes()[0].listPrimitives()[0],nprim=N.getRoot().listMeshes()[0].listPrimitives()[0];
const bp3=bprim.getAttribute('POSITION').getArray(),bj=bprim.getAttribute('JOINTS_0').getArray(),bw=bprim.getAttribute('WEIGHTS_0').getArray();
const np3=nprim.getAttribute('POSITION').getArray(),nn=np3.length/3,bn=bp3.length/3;
// grid over base vertices
const cell=0.03,key=(x,y,z)=>((Math.floor(x/cell)+64)*256+(Math.floor(y/cell)+64))*256+(Math.floor(z/cell)+64);const grid=new Map();
for(let i=0;i<bn;i++){const k=key(bp3[i*3],bp3[i*3+1],bp3[i*3+2]);(grid.get(k)||grid.set(k,[]).get(k)).push(i);}
const J=new Uint16Array(nn*4),W=new Float32Array(nn*4);let far=0;
for(let i=0;i<nn;i++){const x=np3[i*3],y=np3[i*3+1],z=np3[i*3+2];let best=-1,bd=1e9;
  for(let r=1;r<=6&&best<0;r++){const cx=Math.floor(x/cell),cy=Math.floor(y/cell),cz=Math.floor(z/cell);
    for(let a=-r;a<=r;a++)for(let b=-r;b<=r;b++)for(let c=-r;c<=r;c++){const l=grid.get(((cx+a+64)*256+(cy+b+64))*256+(cz+c+64));if(!l)continue;for(const j of l){const dx=bp3[j*3]-x,dy=bp3[j*3+1]-y,dz=bp3[j*3+2]-z,d=dx*dx+dy*dy+dz*dz;if(d<bd){bd=d;best=j;}}}}
  if(best<0){far++;best=0;}
  for(let k=0;k<4;k++){J[i*4+k]=bj[best*4+k];W[i*4+k]=bw[best*4+k];}}
console.log('verts',nn,'no near base vertex',far);
const doc=B,root=B.getRoot(),buf=root.listBuffers()[0];
const mk=(type,arr)=>doc.createAccessor().setType(type).setArray(arr).setBuffer(buf);
bprim.setAttribute('POSITION',mk('VEC3',new Float32Array(np3)));
bprim.setAttribute('NORMAL',mk('VEC3',new Float32Array(nprim.getAttribute('NORMAL').getArray())));
bprim.setAttribute('TEXCOORD_0',mk('VEC2',new Float32Array(nprim.getAttribute('TEXCOORD_0').getArray())));
bprim.setAttribute('JOINTS_0',mk('VEC4',J));bprim.setAttribute('WEIGHTS_0',mk('VEC4',W));
bprim.setIndices(mk('SCALAR',new Uint32Array(nprim.getIndices().getArray())));
['COLOR_0','TEXCOORD_1','TANGENT'].forEach(a=>{if(bprim.getAttribute(a))bprim.setAttribute(a,null);});
const tex=N.getRoot().listMaterials()[0].getBaseColorTexture(),bt=root.listMaterials()[0].getBaseColorTexture();
bt.setImage(tex.getImage()).setMimeType(tex.getMimeType());
await io.write(out,doc);console.log('wrote',out);
