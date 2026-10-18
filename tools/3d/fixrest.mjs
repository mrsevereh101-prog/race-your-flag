// Some Tripo exports come with every bone at 0,0,0 and the real pose stored only in the skin's inverse bind matrices.
// This rebuilds each bone's rest position from those matrices so the model can be used like the other heroes.
// usage: node fixrest.mjs in.glb out.glb
import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import * as THREE from 'three';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);const [src,dst]=process.argv.slice(2);const d=await io.read(src);
const sk=d.getRoot().listSkins()[0],J=sk.listJoints(),ibm=sk.getInverseBindMatrices().getArray();
const world=new Map();J.forEach((j,i)=>{const m=new THREE.Matrix4().fromArray(Array.from(ibm.slice(i*16,i*16+16)));world.set(j,m.invert());});
const q=new THREE.Quaternion(),t=new THREE.Vector3(),s=new THREE.Vector3();
J.forEach(j=>{const w=world.get(j),p=j.getParentNode();const pw=p&&world.get(p)?world.get(p):new THREE.Matrix4();
  const local=pw.clone().invert().multiply(w);local.decompose(t,q,s);j.setTranslation(t.toArray()).setRotation(q.toArray()).setScale(s.toArray());});
await io.write(dst,d);console.log('fixed',J.length,'bones');
