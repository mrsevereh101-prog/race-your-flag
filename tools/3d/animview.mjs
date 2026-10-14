import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import http from 'http'; import fs from 'fs';
const S=process.env.TOOLS_DIR||'.';const file=process.argv[2];
const html=`<html><body style="margin:0;background:#2a3070"><script src="/three.js"></script><script src="/gltf.js"></script><script>
const R=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});R.setSize(1080,2880);R.outputEncoding=THREE.sRGBEncoding;document.body.appendChild(R.domElement);
const sc=new THREE.Scene();sc.add(new THREE.HemisphereLight(0xffffff,0x445566,1.1));const d=new THREE.DirectionalLight(0xffffff,0.9);d.position.set(2,4,3);sc.add(d);
new THREE.GLTFLoader().load('/m.glb',g=>{const m=g.scene;sc.add(m);m.traverse(o=>{if(o.isMesh)o.frustumCulled=false;});const mx=new THREE.AnimationMixer(m);const hips=m.getObjectByName('mixamorigHips');
 const cam=new THREE.PerspectiveCamera(30,180/240,0.01,50);R.setScissorTest(true);window.INFO=[];
 g.animations.forEach((cl,i)=>{mx.stopAllAction();const ac=mx.clipAction(cl);ac.play();const d=[];
  for(let f=0;f<6;f++){mx.setTime(cl.duration*f/6);hips.position.x=0;hips.position.z=0;m.updateMatrixWorld(true);const p=new THREE.Vector3();hips.getWorldPosition(p);d.push(p.toArray().map(v=>+v.toFixed(2)));
   const x=f*180,y=2880-(i+1)*240;R.setViewport(x,y,180,240);R.setScissor(x,y,180,240);cam.position.set(2.8,0.55,0.6);cam.lookAt(0,0.5,0);R.render(sc,cam);}
  window.INFO.push([cl.name,+cl.duration.toFixed(2),d[0],d[3]]);});
 window.BOX=window.INFO;window.DONE=1;});
</script></body></html>`;
const srv=http.createServer((q,r)=>{const u=q.url;if(u==='/three.js')return r.end(fs.readFileSync(S+'/node_modules/three/build/three.min.js'));if(u==='/gltf.js')return r.end(fs.readFileSync(S+'/node_modules/three/examples/js/loaders/GLTFLoader.js'));if(u==='/m.glb')return r.end(fs.readFileSync(file));r.setHeader('content-type','text/html');r.end(html);}).listen(8811);
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage({viewport:{width:1080,height:2880}});p.on('pageerror',e=>console.log('err',e.message));await p.goto('http://localhost:8811/');await p.waitForFunction(()=>window.DONE,null,{timeout:120000});
console.log(JSON.stringify(await p.evaluate(()=>window.BOX)));await p.screenshot({path:process.argv[3]});await b.close();srv.close();
