// Makes the hero voice lines and power sound effects with ElevenLabs, then lists them in index.html.
//   ELEVENLABS_API_KEY=... node tools/audio/make-audio.mjs voices   (all missing hero voice lines)
//   ELEVENLABS_API_KEY=... node tools/audio/make-audio.mjs sfx      (all missing sound effects)
//   node tools/audio/make-audio.mjs wire                            (no key needed: re-list files in index.html)
// Add --force to redo files that already exist. Needs api.elevenlabs.io allowed in the network settings.
import fs from 'fs';import vm from 'vm';import path from 'path';
const ROOT=path.resolve(path.dirname(new URL(import.meta.url).pathname),'../..');
const KEY=process.env.ELEVENLABS_API_KEY,API='https://api.elevenlabs.io/v1',FORCE=process.argv.includes('--force');
const mode=process.argv[2]||'';
// hero -> voice name in the ElevenLabs library. If it is missing, a new voice is designed from `desc` and saved under that name.
const HEROES={
  warrior:{voice:'Hendsome',desc:null,win:['Thunder wins again!']},
  blake:{voice:'RYF Blake',desc:'Teenage American boy, 18, young-sounding youthful voice, light and energetic, quick confident delivery, a little cocky tech genius, friendly, not deep, heroic video game character.',win:['Called it! Genius wins!']},
  samurai:{voice:'RYF Hayato',desc:'Teenage Japanese boy, 17, young clear voice, calm and focused but youthful, crisp short phrases, quiet confidence, not deep, heroic video game character.',win:['One strike. One win.']},
  archer:{voice:'RYF Aria',desc:'Teenage Irish girl, 18, young bright voice with a light Irish lilt, quick, witty and playful, youthful, heroic video game character.',win:['Faster than the wind!']},
  queen:{voice:'RYF Malkia',desc:'Warm, confident Kenyan woman in her thirties, regal and powerful, rich deep voice, calm authority with a fierce roar, heroic video game character.',win:['The savanna crowns its queen!']},
  rapper:{voice:'RYF Kid Echo',desc:'Teenage Black American boy, 18, young-sounding voice, smooth and playful, swagger, rhythmic street-smart delivery, hype energy, heroic video game character.',win:['Drop the mic, that is a win!']},
  kicker:{voice:'RYF Ha-Neul',desc:'Teenage Korean girl, 17, young bright voice, sporty and fierce, quick energetic delivery, big smile in the voice, heroic video game character.',win:['Black belt, gold medal!']},
};
// Haitian Creole lines for Kapwa (Haiti flag): file = warrior-<id>.mp3
const CREOLE=[['ht-wap-kon-joj','Wap kon Joj!'],['ht-ret-nan-wol-ou','Ret nan wol ou!']];
// new power sounds (each is a short sound effect; see SOUND-EFFECTS.md)
const SFX={
  power_drone:['swarm of small robotic drones buzzing past then a rapid electric zap burst, sci-fi, cartoon game power move',2.0],
  power_stampede:['heavy stampede of wild animals thundering past with a lion roar and an elephant trumpet, cartoon game power move',2.2],
  power_bass:['huge deep bass drop with a wobble and a speaker thump shockwave, hip-hop, cartoon game power move',2.0],
  power_kick:['fast spinning hurricane kick whoosh with two sharp impact snaps, martial arts, cartoon game power move',1.5],
};
function sayText(){const h=fs.readFileSync(ROOT+'/index.html','utf8');const a=h.indexOf('const SAY={'),b=h.indexOf('// Haitian Creole lines');const c={};vm.runInNewContext(h.slice(a,b).replace(/const (SAY|CHAR_SAY)=/g,'c.$1='),{c});return c;}
function jobs(){const {SAY,CHAR_SAY}=sayText();const out=[];
  for(const [h,H] of Object.entries(HEROES)){const ch=CHAR_SAY[h]||{},d=`voice/${h}-`;
    if(h!=='warrior'){
      SAY.hit.slice(0,5).forEach((t,i)=>out.push([h,d+`hit-0${i+1}.mp3`,t]));SAY.hurt.slice(0,5).forEach((t,i)=>out.push([h,d+`hurt-0${i+1}.mp3`,t]));
      SAY.block.slice(0,2).forEach((t,i)=>out.push([h,d+`block-0${i+1}.mp3`,t]));SAY.banana.slice(0,2).forEach((t,i)=>out.push([h,d+`banana-0${i+1}.mp3`,t]));
      (ch.hit||[]).forEach((t,i)=>out.push([h,d+`own-hit-${i+1}.mp3`,t]));(ch.hurt||[]).forEach((t,i)=>out.push([h,d+`own-hurt-${i+1}.mp3`,t]));
      if(ch.power&&ch.hit&&ch.power.join()!==ch.hit.join())ch.power.forEach((t,i)=>out.push([h,d+`own-power-${i+1}.mp3`,t]));
      H.win.forEach((t,i)=>out.push([h,d+`win-${i+1}.mp3`,t]));}
    else CREOLE.forEach(([id,t])=>out.push([h,d+id+'.mp3',t]));}
  return out;}
async function api(p,opt){const r=await fetch(API+p,{...opt,headers:{'xi-api-key':KEY,'Content-Type':'application/json',...(opt&&opt.headers)}});if(!r.ok)throw new Error(p+' '+r.status+' '+(await r.text()).slice(0,300));return r;}
async function voiceId(h){const H=HEROES[h];if(H.id)return H.id;
  const list=(await (await api('/voices')).json()).voices;const f=list.find(v=>v.name.toLowerCase()===H.voice.toLowerCase());if(f)return H.id=f.voice_id;
  if(!H.desc)throw new Error(`No voice named "${H.voice}" in your ElevenLabs account`);
  console.log('designing voice',H.voice);
  const pv=await (await api('/text-to-voice/design',{method:'POST',body:JSON.stringify({voice_description:H.desc,text:'Take this! Got you! You will not catch me. I told you I would win this race, and I never back down from anyone.'})})).json();
  const v=await (await api('/text-to-voice',{method:'POST',body:JSON.stringify({voice_name:H.voice,voice_description:H.desc,generated_voice_id:pv.previews[0].generated_voice_id})})).json();return H.id=v.voice_id;}
async function tts(id,text,file){const r=await api(`/text-to-speech/${id}?output_format=mp3_44100_128`,{method:'POST',body:JSON.stringify({text,model_id:process.env.EL_MODEL||'eleven_v3'})});fs.writeFileSync(path.join(ROOT,file),Buffer.from(await r.arrayBuffer()));}
function wire(){const f=ROOT+'/index.html';let h=fs.readFileSync(f,'utf8');
  const v=fs.readdirSync(ROOT+'/voice').filter(x=>x.endsWith('.mp3')&&!x.startsWith('tut-')).map(x=>x.slice(0,-4)).sort();
  h=h.replace(/const VOICE_FILES=new Set\(\[.*?\]\);/,`const VOICE_FILES=new Set([${v.map(x=>`'${x}'`).join(',')}]);`);fs.writeFileSync(f,h);console.log('listed',v.length,'voice files in index.html');}
if(mode==='voices'){if(!KEY)throw new Error('Set ELEVENLABS_API_KEY');
  for(const [h,file,text] of jobs()){if(!FORCE&&fs.existsSync(path.join(ROOT,file)))continue;await tts(await voiceId(h),text,file);console.log('made',file,'-',text);}wire();}
else if(mode==='sfx'){if(!KEY)throw new Error('Set ELEVENLABS_API_KEY');
  for(const [n,[text,dur]] of Object.entries(SFX)){const file=`sfx/${n}.mp3`;if(!FORCE&&fs.existsSync(path.join(ROOT,file)))continue;
    const r=await api('/sound-generation?output_format=mp3_44100_128',{method:'POST',body:JSON.stringify({text,duration_seconds:dur,prompt_influence:0.5})});fs.writeFileSync(path.join(ROOT,file),Buffer.from(await r.arrayBuffer()));console.log('made',file);}}
else if(mode==='wire')wire();
else console.log('usage: make-audio.mjs voices|sfx|wire [--force]');
