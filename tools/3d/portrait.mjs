import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import http from 'http'; import fs from 'fs';
const S=process.env.TOOLS_DIR||'.';const file=process.argv[2];
const html=`<html><body style="margin:0;background:#d9d9d9"><script src="/three.js"></script><script src="/gltf.js"></script><script>
const R=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});R.setSize(800,1200);R.outputEncoding=THREE.sRGBEncoding;document.body.appendChild(R.domElement);
const sc=new THREE.Scene();sc.add(new THREE.HemisphereLight(0xffffff,0x445566,1.1));const d=new THREE.DirectionalLight(0xffffff,0.9);d.position.set(2,4,3);sc.add(d);
R.setClearColor(0xd9d9d9);new THREE.GLTFLoader().load('/m.glb',g=>{const m=g.scene;sc.add(m);m.traverse(o=>{if(o.isMesh){o.frustumCulled=false;if(o.material.map)o.material=new THREE.MeshLambertMaterial({map:o.material.map,skinning:o.isSkinnedMesh});}});
 const cam=new THREE.PerspectiveCamera(22,800/1200,0.01,50);cam.position.set(0,0.52,3.3);cam.lookAt(0,0.5,0);R.render(sc,cam);window.BOX=1;window.DONE=1;});
</script></body></html>`;
const srv=http.createServer((q,r)=>{const u=q.url;if(u==='/three.js')return r.end(fs.readFileSync(S+'/node_modules/three/build/three.min.js'));if(u==='/gltf.js')return r.end(fs.readFileSync(S+'/node_modules/three/examples/js/loaders/GLTFLoader.js'));if(u==='/m.glb')return r.end(fs.readFileSync(file));r.setHeader('content-type','text/html');r.end(html);}).listen(8811);
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage({viewport:{width:800,height:1200}});p.on('pageerror',e=>console.log('err',e.message));await p.goto('http://localhost:8811/');await p.waitForFunction(()=>window.DONE,null,{timeout:120000});
console.log(JSON.stringify(await p.evaluate(()=>window.BOX)));await p.screenshot({path:process.argv[3]});await b.close();srv.close();
