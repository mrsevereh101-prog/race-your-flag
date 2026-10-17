// Heroes taken out of the game on Oct 17 (only the 7 launch heroes stay). Paste these back to bring one back.
// Their 3D models are still in models/ (knight, shaolin, viking, robot, gas .glb). Power effect code for them is still in index.html.

/* CHARS entry: knight */
 {id:'knight',hn:'Sir Aldric',perk:{name:'Holy Shield',desc:'Starts every race with a shield that blocks the first hit.'},name:'Knight',power:'Holy Light',desc:'Pillars of blinding light strike every rival on the track.',speed:1.0,agility:0.95,charge:21,stun:1.6,kind:'knock',rgb:[1,0.95,0.6],
  look:{skin:0xe2b48e,b:1.14,ls:1.02,sc:1.03},
  svg:'<svg viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#2b3a6b"/><path d="M17 4l2.5 9.5L29 17l-9.5 2.5L17 29l-2.5-9.5L5 17l9.5-3.5z" fill="#fff2a8"/></svg>'},

/* CHARS entry: shaolin */
 {id:'shaolin',hn:'Xiao Long',perk:{name:'Iron Body',desc:'Hurdles, walls and barriers stun him only half as long.'},name:'Shaolin',power:'Fire Fist',desc:'A wave of fire rolls down the track and knocks every rival flat.',speed:1.03,agility:1.08,charge:20,stun:1.4,kind:'knock',rgb:[1,0.5,0.15],
  look:{skin:0xd9a47a,b:1.02,ls:1.04,sc:1.0},
  svg:'<svg viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#8a2a0a"/><path d="M17 4c4 6 9 8 7 16a7 7 0 01-14 0c0-4 3-6 3-10 2 2 3 4 3 6 2-3 2-7 1-12z" fill="#ffb03a"/></svg>'},

/* CHARS entry: viking */
 {id:'viking',hn:'Sigurd Stormbeard',perk:{name:'Frost Blood',desc:'Ice and oil can\'t make him slip, and freezes wear off twice as fast.'},name:'Viking',power:'Blizzard',desc:'A blizzard sweeps the track and freezes every rival in a block of ice.',speed:0.99,agility:0.92,charge:20,stun:1.7,kind:'rooted',rgb:[0.7,0.9,1],
  look:{skin:0xf0c4a2,b:1.24,ls:1.0,sc:1.05},
  svg:'<svg viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#2a4a6b"/><path d="M17 5v24M7 11l20 12M27 11L7 23" stroke="#dff4ff" stroke-width="2.6" stroke-linecap="round"/></svg>'},

/* CHARS entry: robot */
 {id:'robot',hn:'Volt-X',perk:{name:'Magnet Core',desc:'Pulls in coins from the lanes next to him.'},name:'Robot',power:'Laser Grid',desc:'Red lasers lock onto every rival on the track and zap them.',speed:1.0,agility:1.0,charge:19,stun:1.4,kind:'knock',rgb:[1,0.25,0.25],
  look:{skin:0x9fb0c4,b:1.12,ls:1.0,sc:1.02},
  svg:'<svg viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#3a4250"/><rect x="9" y="10" width="16" height="13" rx="3" fill="#c9d4e2"/><circle cx="14" cy="16" r="2" fill="#ff3a3a"/><circle cx="20" cy="16" r="2" fill="#ff3a3a"/><path d="M17 10V6" stroke="#c9d4e2" stroke-width="2"/><circle cx="17" cy="5" r="1.6" fill="#ff3a3a"/></svg>'},

/* CHARS entry: gas */
 {id:'gas',hn:'Zuri Vapor',as:'rapper',perk:{name:'Vapor Form',desc:'Hits on her wear off 40% faster.'},name:'Gas',power:'Gas Cloud',desc:'A purple gas cloud rolls over every rival on the track and leaves them dizzy.',speed:1.02,agility:1.06,charge:20,stun:1.6,kind:'slip',rgb:[0.7,0.4,1],
  look:{skin:0x5a3826,b:0.95,ls:1.05,sc:0.98},
  svg:'<svg viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#4b2a6e"/><circle cx="12" cy="19" r="6" fill="#c9a2ff"/><circle cx="20" cy="15" r="7" fill="#b07cff"/><circle cx="23" cy="22" r="5" fill="#d9c2ff"/><circle cx="16" cy="23" r="4" fill="#9a62f0"/></svg>'},

/* line: gas */
 gas:{url:'models/gas.glb',rig:true},

/* line: knight */
 knight:{url:'models/knight.glb',rig:true},

/* line: robot */
 robot:{url:'models/robot.glb',rig:true},

/* line: shaolin */
 shaolin:{url:'models/shaolin.glb',rig:true},

/* line: viking */
 viking:{url:'models/viking.glb',rig:true},

/* line: knight */
  knight:{cad:0.92,arm:0.7,elb:0.8,bob:0.6,lean:0.05,wide:0.15},

/* line: shaolin */
  shaolin:{lean:0.15,elb:1.15,knee:1.25},

/* line: viking */
  viking:{cad:0.9,stride:1.05,wide:0.3,roll:0.1,arm:1.1,bob:1.25},

/* line: robot */
  robot:{stiff:1,knee:0.7,bob:0.4,sway:0,elb:1.05},

/* line: gas */
  gas:{bob:0.5,arm:0.75,lean:0.1,sway:0.6,elb:0.7},

/* line: knight */
  knight:{hit:['For honor!','The light guides my blade!'],hurt:['A knight never falls!','Have at thee!'],power:['Behold the light!','Be blinded by justice!']},

/* line: shaolin */
  shaolin:{hit:['Strike like fire!','Inner flame!'],hurt:['Calm mind, iron body.','You will learn patience.'],power:['Burn bright!','The dragon breathes!']},

/* line: viking */
  viking:{hit:['For Valhalla!','Skål!'],hurt:['Ha! That tickled!','You call that a hit?'],power:['Winter is here!','Freeze, little ones!']},

/* line: robot */
  robot:{hit:['Target eliminated.','Calculating victory.'],hurt:['Damage detected.','Error. Error. Rebooting.'],power:['Lasers armed.','Initiating laser grid.']},

/* line: gas */
  gas:{hit:['Breathe that in!','Lost in the fog!'],hurt:['Rude!','You can\'t catch vapor!'],power:['Gas cloud, coming through!','Hope you can hold your breath!']},

/* line: knight */
  knight:{cc:'GBR',age:'35',story:'Sir Aldric has guarded the old roads for years. The scar on his cheek is a story he never tells, but his shield has never broken.'},

/* line: shaolin */
  shaolin:{cc:'CHN',age:'18',story:'Xiao Long left the mountain temple to test his training against the world. Patient as stone, quick as fire.'},

/* line: viking */
  viking:{cc:'NOR',age:'45',story:'Sigurd Stormbeard sailed the frozen seas before he ever raced. He laughs at the cold and runs like a storm coming ashore.'},

/* line: robot */
  robot:{cc:'DEU',age:'v3.0',story:'Volt-X was built to test running shoes and decided it liked winning instead. Always smiling, always charging.'},

/* line: gas */
  gas:{cc:'USA',age:'18',story:'Zuri Vapor moves like mist: soft, stylish and gone before you blink. Rivals who chase her end up lost in a purple cloud.'},
