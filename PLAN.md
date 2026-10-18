# Race Your Flag: plan map

Your progress tracker. Tick a box (`[x]`) when something is done, or tell Claude and it will tick it.
Live game: https://mrsevereh101-prog.github.io/race-your-flag/

Who does what: **You** = you, **Cowork** = Claude Cowork (Tripo and ElevenLabs), **Code** = Claude Code (puts it in the game).

---

## 1. Launch rules (decided Oct 16)

- The game launches with **7 heroes**. The others show **"Coming soon"** (no dates or seasons shown).
- Every hero starts with **3 skins: 1 free + 2 to unlock**. More skins can come with seasons.
- The **developer account** (and testers) keep **every hero and skin unlocked**.

### Launch heroes (7)
| | Hero | Country | Age | Height | Power |
|---|---|---|---|---|---|
| [ ] | Kapwa Lamò | Haiti | 17 | 6'0" | Lightning |
| [ ] | Blake Carter | USA | 18 | 6'0" | Gadgets (power to pick) |
| [ ] | Aria Windsong | Ireland | 18 | 5'6" | Wind |
| [ ] | Hayato Kurogane | Japan | 17 | 5'8" | Slash |
| [ ] | Malkia Nyota | Kenya | 32 | 5'11" | Stampede |
| [ ] | Kid Echo | USA | 18 | 6'1" | Bass Drop |
| [ ] | Ha-Neul | Korea | 17 | 5'3" | Hurricane Kick |

### Coming soon (11)
The game only says **"Coming soon"** on these heroes, with no dates or season numbers, so the release
order can change at any time. The order below is just a working idea, not shown in the game.

Sir Aldric, Zuri Vapor, Xiao Long, Sigurd Stormbeard, Volt-X, Layla Al-Rimal, Anaya Rao, Luana Ipê,
Dmitri Volkov, Seo Min-jun, Selam Tesfaye

### Game code for the launch rules (Code)
- [x] Lock heroes that are not out yet ("Coming soon" on their card, no dates or seasons) (Oct 17)
- [ ] Skins: 1 free + 2 unlockable per hero (by level, coins or diamonds - to decide)
- [x] Developer and tester accounts see everything unlocked (Oct 17; Developer mode too)
- [x] A simple list in the game code of which heroes are out: `HERO_OUT` in index.html (Oct 17)
- [x] Add Blake to that list once he is in the game (Oct 17: Blake is in, with his base model and 3 skins)

How it works now: heroes not on the list are grey with "Coming soon" on the home row, the hero card
and the runner tiles, and can't be picked. The arrows skip them, computer racers only use launch
heroes, and their skins are hidden in the store. Someone who had picked a locked hero is moved to Kapwa.

---

## 2. Heroes: rebuild at new heights (Cowork in Tripo, then Code)

Prompts: `docs/HERO_PROMPTS.md`. Steps: image-to-3D, Retopology (Quad 10k), Rig (Mixamo), export GLB.

| Model made (Cowork) | In the game (Code) | Hero | Height |
|---|---|---|---|
| [ ] | [ ] | Sigurd Stormbeard | 6'6" |
| [ ] | [ ] | Dmitri Volkov (new) | 6'3" |
| [ ] | [ ] | Sir Aldric | 6'2" |
| [ ] | [ ] | Kid Echo | 6'1" |
| [ ] | [ ] | Kapwa Lamò | 6'0" |
| [x] | [ ] | Blake Carter (new) | 6'0" |
| [ ] | [ ] | Malkia Nyota | 5'11" |
| [ ] | [ ] | Layla Al-Rimal (new) | 5'11" |
| [ ] | [ ] | Anaya Rao (new) | 5'10" |
| [ ] | [ ] | Seo Min-jun (new) | 5'9" |
| [ ] | [ ] | Hayato Kurogane | 5'8" |
| [ ] | [ ] | Xiao Long | 5'7" |
| [ ] | [ ] | Selam Tesfaye (new) | 5'7" |
| [ ] | [ ] | Aria Windsong | 5'6" |
| [ ] | [ ] | Zuri Vapor | 5'5" |
| [ ] | [ ] | Luana Ipê (new) | 5'5" |
| [ ] | [ ] | Ha-Neul | 5'3" |
| [ ] | [ ] | Volt-X | 4'11" |

- [ ] Code: let each 3D hero keep its own height (today the game sizes them all the same)
- [ ] Code: add the 7 new heroes to the game (name, country, age, story, power, perk, card picture)
- [ ] Hero card pictures for the new heroes (transparent, like the current ones)

### Decisions still open
- [ ] Blake: power (Oct 17: Drone Swarm is in the game for now, tell Claude if you want EMP or Grapple Hook instead)
- [x] Renamed from Blaze to Blake (Oct 16); Blake added to launch; launch is now 7 heroes with Aria kept
- [ ] Anaya: earth power OK?
- [ ] Powers for Layla (Sandstorm?), Luana (Thorn Bind), Dmitri (Rocket Barrage?), Min-jun (Tidal Wave?), Selam (Sky Swarm?)

---

## 3. Skins (prompts by Code, models by Cowork)

3 skins per hero for launch (1 free, 2 unlock); 2 more per hero later = 5 prompts each.
Prompts are under each hero in `docs/HERO_PROMPTS.md`.

- [x] Code: 3 skin prompts per hero, under each hero in `docs/HERO_PROMPTS.md` (54 prompts)
- [ ] Cowork: make the launch skins in Tripo (7 heroes x 3)
- [ ] Code: put the skins in the game + store card pictures
- Already in the game: Kapwa's Continental Champion, Ha-Neul's Storm Tiger

---

## 4. Sound effects (prompts by Code, made by Cowork in ElevenLabs)

- [x] 48 general game sounds (`SOUND-EFFECTS.md`, in `sfx/`)
- [ ] Code: write a power sound prompt for each hero (`docs/POWER_SOUNDS.md`)
- [ ] Cowork: make the power sounds
- [ ] Code: put them in the game

## 5. Voices (lines by Code, recorded by Cowork in ElevenLabs)

- [x] Kapwa, Aria, Hayato (in `voice/`, `VOICE-LINES.md`)
- [ ] Code: write lines and a voice description for the other 15 heroes, matched to their age
- [ ] Cowork: record them (launch heroes first: Blake, Malkia, Kid Echo, Ha-Neul)
- [ ] Code: put them in the game

## 6. Power effects art (prompts by Code)

- [ ] Code: a 3D or 2D art prompt for each hero's power effect
- [ ] You or Cowork: make the effect pictures or models
- [ ] Code: use them in the races

---

## 7. Other game work

- [ ] Rig Aria with the new Mixamo skeleton (she still uses the old model)
- [ ] Heirloom / mythical weapons (on or off in Settings)
- [ ] Tester access: confirm Francesca and Vinicius can sign in
- [ ] Tripo API (needs a new API key saved as a secret, and api.tripo3d.ai allowed in the environment)
- [ ] Optional: winning podium shows each runner's equipped skin (needs skin pictures)

## 8. TV show (Race Your Flag: the series)

- [x] Season 1 plan (one episode per hero, all together in the finale)
- [x] Episode 1 script ("Read the Wind": Aria and Kapwa)
- [x] Episode 1 characters, villains and environments made
- [ ] Episode 1 shots (Shot 1 made; next: Shot 1b redo and Shot 2)
- [ ] Name the General

---

## Done recently
- [x] 3D heroes with shared motion animations; original jump, flip and slide poses brought back
- [x] Hero cards on Quick Race (picture, stats, country, age, story, Select button)
- [x] Quick Race page layout, scrolling on every page
- [x] Winner podium with heroes standing on gold, silver and bronze
- [x] Hero build prompts with heights for 18 heroes (`docs/HERO_PROMPTS.md`)
- [x] Cowork brief (`COWORK.md`)


## Oct 17 additions
- [x] Skins row on the selected hero's page; black bold text on cream pages
- [x] Kapwa Creole lines added in code (Wap kon Joj! / Ret nan wol ou!); audio not yet made
- [ ] Run `tools/audio/make-audio.mjs voices` and `sfx` (needs ElevenLabs key + api.elevenlabs.io allowed): voices for Blake, Malkia, Kid Echo, Ha-Neul, Kapwa Creole, and power sounds power_drone / power_stampede / power_bass / power_kick
- [x] Equal starting stats + "owned flags" currency to upgrade speed/agility/recharge per hero; flags won/lost by finishing place (Oct 17). Costs and rewards are first guesses: tune `STAT_BASE`, `upCost`, `PLACE_FLAGS`
- [x] White-background hero pictures; Skins row in the runner popup
- [ ] (Pinned Oct 17) Colour-adjust hero/skin 3D models: change brightness, contrast and saturation by editing the texture inside the .glb (tools/3d, gltf-transform + sharp), not in Tripo. Do a before/after picture first, one hero or skin at a time, then maybe all.
- [x] (Oct 18) 4 skins per hero: 1 free + 3 unlock, one of them a country-flag skin; Kapwa's 4th is Red and Black. Prompts in docs/LAUNCH_HERO_PROMPTS.md
