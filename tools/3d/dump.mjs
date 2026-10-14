import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import fs from 'fs';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
for(const f of process.argv.slice(2)){const doc=await io.read(f);const p=doc.getRoot().listMeshes()[0].listPrimitives()[0];
 const P=p.getAttribute('POSITION'),n=P.getCount(),a=new Float32Array(n*3),v=[0,0,0];for(let i=0;i<n;i++){P.getElement(i,v);a.set(v,i*3);}
 const I=Uint32Array.from(p.getIndices().getArray());const nm=f.split('/').pop().replace('.glb','');
 fs.writeFileSync(`sil/${nm}.pos`,Buffer.from(a.buffer));fs.writeFileSync(`sil/${nm}.idx`,Buffer.from(I.buffer));}
