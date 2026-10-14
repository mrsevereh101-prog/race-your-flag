import {NodeIO} from '@gltf-transform/core';import {ALL_EXTENSIONS} from '@gltf-transform/extensions';import {prune,textureCompress,weld,simplify} from '@gltf-transform/functions';
import {MeshoptSimplifier} from 'meshoptimizer';import sharp from 'sharp';
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
const [src,dst]=process.argv.slice(2);const doc=await io.read(src);
for(const a of doc.getRoot().listAnimations()){a.listSamplers().forEach(x=>x.dispose());a.listChannels().forEach(x=>x.dispose());a.dispose();}
for(const a of doc.getRoot().listAccessors())if(a.listParents().every(p=>p.propertyType==='Root'))a.dispose();
for(const m of doc.getRoot().listMaterials()){m.setNormalTexture(null);m.setMetallicRoughnessTexture(null);m.setOcclusionTexture(null);}
let tris=0;for(const m of doc.getRoot().listMeshes())for(const p of m.listPrimitives())tris+=p.getIndices().getCount()/3;
await doc.transform(prune());
if(tris>24000){await MeshoptSimplifier.ready;await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:22000/tris,error:0.0005}));}
await doc.transform(textureCompress({encoder:sharp,targetFormat:'webp',resize:[1024,1024]}),prune());
let t2=0;for(const m of doc.getRoot().listMeshes())for(const p of m.listPrimitives())t2+=p.getIndices().getCount()/3;
await io.write(dst,doc);console.log(src.split('/').pop(),tris,'->',t2);
