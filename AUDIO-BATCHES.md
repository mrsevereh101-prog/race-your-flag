# Race Your Flag: audio batches (voices and sound effects)

Everything still to be made for the 7 launch heroes. Make each file in ElevenLabs, download as **MP3**, and name it **exactly** as the File column says. Send them back in the batches below (one batch at a time).

**Status:** Kapwa, Aria and Hayato already have their English voice lines in `voice/`. Nothing else is needed for them except Kapwa's 2 Creole lines (Batch V1). Blake, Malkia, Kid Echo and Ha-Neul have no voices yet. There are 4 new power sounds (Batch S1).

**Where files go (code-side chat):** voice files into `voice/`, sound effects into `sfx/`, then run `node tools/audio/make-audio.mjs wire` (lists them in index.html), commit and push to main.

## Rules
- **One saved voice per hero.** Make every line of a hero with that hero's voice. Kapwa uses the voice the user created, named **Hendsome**.
- For the other 4 heroes, design the voice once in ElevenLabs (Voice Design, use the description below), save it with the given name, then make all their lines with it.
- Short game lines: say each line once, natural and punchy, no extra words, no sound effects, no background music.
- Sound effects: ElevenLabs Sound Effects, cartoon / arcade style, no music, no voices. Shortest length ElevenLabs allows is 0.5 s.

## Batch V1: Kapwa, Haitian Creole (voice: Hendsome)

| File | Line | Delivery |
|---|---|---|
| warrior-ht-wap-kon-joj.mp3 | Wap kon Joj! | Cocky, triumphant (when he hits a rival) |
| warrior-ht-ret-nan-wol-ou.mp3 | Ret nan wol ou! | Annoyed, angry (when he gets hit). Haitian Creole; if the pronunciation is off, say it phonetically: "Wap kon Zhozh" / "Ret nan wol oo" |

## Batch S1: New power sounds

| File | Sound | Prompt | Length |
|---|---|---|---|
| power_drone.mp3 | Blake: Drone Swarm | swarm of small robotic drones buzzing past then a rapid electric zap burst, sci-fi, cartoon game power move | 2.0 s |
| power_stampede.mp3 | Malkia: Stampede | heavy stampede of wild animals thundering past with a lion roar and an elephant trumpet, cartoon game power move | 2.2 s |
| power_bass.mp3 | Kid Echo: Bass Drop | huge deep bass drop with a wobble and a speaker thump shockwave, hip-hop, cartoon game power move | 2.0 s |
| power_kick.mp3 | Ha-Neul: Hurricane Kick | fast spinning hurricane kick whoosh with two sharp impact snaps, martial arts, cartoon game power move | 1.5 s |

## Blake Carter: voice "RYF Blake" (21 files)

Voice Design description: Young American man, 18, energetic and clever, quick confident delivery, a little cocky tech genius, friendly, heroic video game character.

### Batch V2: Blake Carter, part 1

| File | Line | Delivery |
|---|---|---|
| blake-hit-01.mp3 | Take this! | Cocky, triumphant |
| blake-hit-02.mp3 | Got you! | Cocky, triumphant |
| blake-hit-03.mp3 | Too slow! | Cocky, triumphant |
| blake-hit-04.mp3 | Coming through! | Cocky, triumphant |
| blake-hit-05.mp3 | Out of my way! | Cocky, triumphant |

### Batch V3: Blake Carter, part 2

| File | Line | Delivery |
|---|---|---|
| blake-hurt-01.mp3 | I'll get you for that! | Annoyed, angry |
| blake-hurt-02.mp3 | Hey! Not fair! | Annoyed, angry |
| blake-hurt-03.mp3 | You'll pay for that! | Annoyed, angry |
| blake-hurt-04.mp3 | Ouch! | Annoyed, angry |
| blake-hurt-05.mp3 | That's it, now I'm mad! | Annoyed, angry |

### Batch V4: Blake Carter, part 3

| File | Line | Delivery |
|---|---|---|
| blake-block-01.mp3 | Nice try! | Smug, unbothered |
| blake-block-02.mp3 | Blocked! | Smug, unbothered |
| blake-banana-01.mp3 | Whoa-whoa-whoa! | Panicked, slipping |
| blake-banana-02.mp3 | Who left that there?! | Panicked, slipping |
| blake-own-hit-1.mp3 | Nice try, slowpoke! | Their power move, fierce |

### Batch V5: Blake Carter, part 4

| File | Line | Delivery |
|---|---|---|
| blake-own-hit-2.mp3 | Calculated. | Their power move, fierce |
| blake-own-hurt-1.mp3 | Hey! That was my prototype! | Angry, proud |
| blake-own-hurt-2.mp3 | Rerouting power! | Angry, proud |
| blake-own-power-1.mp3 | Drones, deploy! | Power move, shouted with energy |
| blake-own-power-2.mp3 | Swarm protocol, go! | Power move, shouted with energy |

### Batch V6: Blake Carter, part 5

| File | Line | Delivery |
|---|---|---|
| blake-win-1.mp3 | Called it! Genius wins! | Triumphant, winning the race |

## Malkia Nyota: voice "RYF Malkia" (21 files)

Voice Design description: Warm, confident Kenyan woman in her thirties, regal and powerful, rich deep voice, calm authority with a fierce roar, heroic video game character.

### Batch V7: Malkia Nyota, part 1

| File | Line | Delivery |
|---|---|---|
| queen-hit-01.mp3 | Take this! | Cocky, triumphant |
| queen-hit-02.mp3 | Got you! | Cocky, triumphant |
| queen-hit-03.mp3 | Too slow! | Cocky, triumphant |
| queen-hit-04.mp3 | Coming through! | Cocky, triumphant |
| queen-hit-05.mp3 | Out of my way! | Cocky, triumphant |

### Batch V8: Malkia Nyota, part 2

| File | Line | Delivery |
|---|---|---|
| queen-hurt-01.mp3 | I'll get you for that! | Annoyed, angry |
| queen-hurt-02.mp3 | Hey! Not fair! | Annoyed, angry |
| queen-hurt-03.mp3 | You'll pay for that! | Annoyed, angry |
| queen-hurt-04.mp3 | Ouch! | Annoyed, angry |
| queen-hurt-05.mp3 | That's it, now I'm mad! | Annoyed, angry |

### Batch V9: Malkia Nyota, part 3

| File | Line | Delivery |
|---|---|---|
| queen-block-01.mp3 | Nice try! | Smug, unbothered |
| queen-block-02.mp3 | Blocked! | Smug, unbothered |
| queen-banana-01.mp3 | Whoa-whoa-whoa! | Panicked, slipping |
| queen-banana-02.mp3 | Who left that there?! | Panicked, slipping |
| queen-own-hit-1.mp3 | The wild answers me! | Their power move, fierce |

### Batch V10: Malkia Nyota, part 4

| File | Line | Delivery |
|---|---|---|
| queen-own-hit-2.mp3 | Bow to the queen! | Their power move, fierce |
| queen-own-hurt-1.mp3 | My lions saw that! | Angry, proud |
| queen-own-hurt-2.mp3 | You woke the jungle! | Angry, proud |
| queen-own-power-1.mp3 | Run, my beasts! | Power move, shouted with energy |
| queen-own-power-2.mp3 | The whole savanna rides with me! | Power move, shouted with energy |

### Batch V11: Malkia Nyota, part 5

| File | Line | Delivery |
|---|---|---|
| queen-win-1.mp3 | The savanna crowns its queen! | Triumphant, winning the race |

## Kid Echo: voice "RYF Kid Echo" (21 files)

Voice Design description: Young Black American man, 18, smooth and playful, swagger, rhythmic street-smart delivery, hype energy, heroic video game character.

### Batch V12: Kid Echo, part 1

| File | Line | Delivery |
|---|---|---|
| rapper-hit-01.mp3 | Take this! | Cocky, triumphant |
| rapper-hit-02.mp3 | Got you! | Cocky, triumphant |
| rapper-hit-03.mp3 | Too slow! | Cocky, triumphant |
| rapper-hit-04.mp3 | Coming through! | Cocky, triumphant |
| rapper-hit-05.mp3 | Out of my way! | Cocky, triumphant |

### Batch V13: Kid Echo, part 2

| File | Line | Delivery |
|---|---|---|
| rapper-hurt-01.mp3 | I'll get you for that! | Annoyed, angry |
| rapper-hurt-02.mp3 | Hey! Not fair! | Annoyed, angry |
| rapper-hurt-03.mp3 | You'll pay for that! | Annoyed, angry |
| rapper-hurt-04.mp3 | Ouch! | Annoyed, angry |
| rapper-hurt-05.mp3 | That's it, now I'm mad! | Annoyed, angry |

### Batch V14: Kid Echo, part 3

| File | Line | Delivery |
|---|---|---|
| rapper-block-01.mp3 | Nice try! | Smug, unbothered |
| rapper-block-02.mp3 | Blocked! | Smug, unbothered |
| rapper-banana-01.mp3 | Whoa-whoa-whoa! | Panicked, slipping |
| rapper-banana-02.mp3 | Who left that there?! | Panicked, slipping |
| rapper-own-hit-1.mp3 | Drop the beat! | Their power move, fierce |

### Batch V15: Kid Echo, part 4

| File | Line | Delivery |
|---|---|---|
| rapper-own-hit-2.mp3 | You just got remixed! | Their power move, fierce |
| rapper-own-hurt-1.mp3 | Yo, not cool! | Angry, proud |
| rapper-own-hurt-2.mp3 | That ain't on beat! | Angry, proud |
| rapper-own-power-1.mp3 | Feel the bass! | Power move, shouted with energy |
| rapper-own-power-2.mp3 | Turn it up! | Power move, shouted with energy |

### Batch V16: Kid Echo, part 5

| File | Line | Delivery |
|---|---|---|
| rapper-win-1.mp3 | Drop the mic, that is a win! | Triumphant, winning the race |

## Ha-Neul: voice "RYF Ha-Neul" (21 files)

Voice Design description: Young Korean woman, 17, bright, sporty and fierce, quick energetic delivery, big smile in the voice, heroic video game character.

### Batch V17: Ha-Neul, part 1

| File | Line | Delivery |
|---|---|---|
| kicker-hit-01.mp3 | Take this! | Cocky, triumphant |
| kicker-hit-02.mp3 | Got you! | Cocky, triumphant |
| kicker-hit-03.mp3 | Too slow! | Cocky, triumphant |
| kicker-hit-04.mp3 | Coming through! | Cocky, triumphant |
| kicker-hit-05.mp3 | Out of my way! | Cocky, triumphant |

### Batch V18: Ha-Neul, part 2

| File | Line | Delivery |
|---|---|---|
| kicker-hurt-01.mp3 | I'll get you for that! | Annoyed, angry |
| kicker-hurt-02.mp3 | Hey! Not fair! | Annoyed, angry |
| kicker-hurt-03.mp3 | You'll pay for that! | Annoyed, angry |
| kicker-hurt-04.mp3 | Ouch! | Annoyed, angry |
| kicker-hurt-05.mp3 | That's it, now I'm mad! | Annoyed, angry |

### Batch V19: Ha-Neul, part 3

| File | Line | Delivery |
|---|---|---|
| kicker-block-01.mp3 | Nice try! | Smug, unbothered |
| kicker-block-02.mp3 | Blocked! | Smug, unbothered |
| kicker-banana-01.mp3 | Whoa-whoa-whoa! | Panicked, slipping |
| kicker-banana-02.mp3 | Who left that there?! | Panicked, slipping |
| kicker-own-hit-1.mp3 | Hi-yah! | Their power move, fierce |

### Batch V20: Ha-Neul, part 4

| File | Line | Delivery |
|---|---|---|
| kicker-own-hit-2.mp3 | Too slow! | Their power move, fierce |
| kicker-own-hurt-1.mp3 | Hey! Watch it! | Angry, proud |
| kicker-own-hurt-2.mp3 | You will regret that! | Angry, proud |
| kicker-own-power-1.mp3 | Hurricane kick! | Power move, shouted with energy |
| kicker-own-power-2.mp3 | Feel the storm of my feet! | Power move, shouted with energy |

### Batch V21: Ha-Neul, part 5

| File | Line | Delivery |
|---|---|---|
| kicker-win-1.mp3 | Black belt, gold medal! | Triumphant, winning the race |

## Totals
- Voices: 2 (Kapwa Creole) + 4x21 = 86 files
- Sound effects: 4 files
