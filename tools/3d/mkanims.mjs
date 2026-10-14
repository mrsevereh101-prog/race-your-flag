import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import http from 'http'; import fs from 'fs';
const S=process.env.TOOLS_DIR||'.';const file=process.argv[2];
const html=`<html><body style="margin:0;background:#2a3070"><script src="/three.js"></script><script src="/gltf.js"></script><script>
const R=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});R.setSize(1080,1440);R.outputEncoding=THREE.sRGBEncoding;document.body.appendChild(R.domElement);
const sc=new THREE.Scene();sc.add(new THREE.HemisphereLight(0xffffff,0x445566,1.1));const d=new THREE.DirectionalLight(0xffffff,0.9);d.position.set(2,4,3);sc.add(d);
const LD=new THREE.GLTFLoader();LD.load('/a.glb',ga=>{LD.load('/m.glb',gb=>{
 const want=[['run','run.001',ga,1,0],['idle','idle.001',ga,0,0],['jump','jump.001',ga,0,0],['fall','fall.001',ga,0,0],['cheer','cheer.001',ga,0,0],
  ['dance','dance_01.001',ga,0,8],['spin','spin like a swirl / spin like a swirl.001',ga,0,0],['crouch','jump_down.001',ga,0,0],
  ['wave','In place, no walking. Raise the right hand above the head and w',gb,0,0],['flex','In place, no walking. Flex both biceps like a bodybuilder, fist',gb,0,0],['dizzy','In place, no walking. Dizzy after being hit: sway and wobble in',gb,0,0]];
 const out=[];
 for(const [nm,src,g,fingers,cut] of want){const c0=g.animations.find(x=>x.name===src);if(!c0){out.push({missing:nm});continue;}const c=c0.clone();c.name=nm;
  const dur=cut?Math.min(cut,c.duration):c.duration,fps=(nm==='run'||nm==='jump'||nm==='fall'||nm==='crouch')?24:12,N=Math.round(dur*fps)+1,q={};let p=null;
  c.tracks.forEach(t=>{const b=t.name.split('.')[0];if(/_End$/.test(b))return;if(!fingers&&/Hand(Index|Middle|Ring|Pinky|Thumb)/.test(b))return;
   const ip=t.createInterpolant(),st=t.getValueSize();
   if(t.name.endsWith('.quaternion')){const v=[];for(let i=0;i<N;i++){const r=ip.evaluate(Math.min(dur,i/fps));const L=Math.hypot(r[0],r[1],r[2],r[3])||1;for(let k=0;k<4;k++)v.push(Math.round(r[k]/L*1000));}q[b]=v;}
   else if(t.name==='mixamorigHips.position'){p=[];for(let i=0;i<N;i++){const r=ip.evaluate(Math.min(dur,i/fps));p.push(Math.round(r[1]*1000));}}});
  out.push({n:nm,fps,N,q,p});}
window.BOX={hips:+ga.scene.getObjectByName('mixamorigHips').position.y.toFixed(4),clips:out};window.DONE=1;});});
</script></body></html>`;
const srv=http.createServer((q,r)=>{const u=q.url;if(u==='/three.js')return r.end(fs.readFileSync(S+'/node_modules/three/build/three.min.js'));if(u==='/gltf.js')return r.end(fs.readFileSync(S+'/node_modules/three/examples/js/loaders/GLTFLoader.js'));if(u==='/a.glb')return r.end(fs.readFileSync(process.argv[4]));if(u==='/m.glb')return r.end(fs.readFileSync(file));r.setHeader('content-type','text/html');r.end(html);}).listen(8811);
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
const p=await b.newPage({viewport:{width:1080,height:1440}});p.on('pageerror',e=>console.log('err',e.message));await p.goto('http://localhost:8811/');await p.waitForFunction(()=>window.DONE,null,{timeout:120000});
fs.writeFileSync('anims.json',JSON.stringify(await p.evaluate(()=>window.BOX)));await p.screenshot({path:process.argv[3]});await b.close();srv.close();
