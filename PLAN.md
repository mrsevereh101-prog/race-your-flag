# Race Your Flag: plan map

Your progress tracker. Tick a box (`[x]`) when something is done, or tell Claude and it will tick it.
Live game: https://mrsevereh101-prog.github.io/race-your-flag/

Who does what: **You** = you, **Cowork** = Claude Cowork (Tripo and ElevenLabs), **Code** = Claude Code (puts it in the game).

---

## 1. Launch rules (decided Oct 16)

- The game launches with **6 heroes**. The other heroes arrive **by season**.
- Every hero starts with **3 skins: 1 free + 2 to unlock**. More skins can come with seasons.
- The **developer account** (and testers) keep **every hero and skin unlocked**.

### Launch heroes (6) - proposed, change if you like
| | Hero | Country | Age | Height | Power |
|---|---|---|---|---|---|
| [ ] | Kapwa Lamò | Haiti | 17 | 6'0" | Lightning |
| [ ] | Blake Carter | USA | 18 | 6'0" | Gadgets (power to pick) |
| [ ] | Hayato Kurogane | Japan | 17 | 5'8" | Slash |
| [ ] | Malkia Nyota | Kenya | 32 | 5'11" | Stampede |
| [ ] | Kid Echo | USA | 18 | 6'1" | Bass Drop |
| [ ] | Ha-Neul | Korea | 17 | 5'3" | Hurricane Kick |

### Seasons - proposed (3 new heroes each)
| Season | Heroes |
|---|---|
| Season 1 | Sir Aldric (UK, Holy Light), Zuri Vapor (USA, Gas), Xiao Long (China, Fire Fist) |
| Season 2 | Sigurd Stormbeard (Norway, Blizzard), Volt-X (Germany, Laser Grid), Layla Al-Rimal (Jordan, Sand) |
| Season 3 | Anaya Rao (India, Earth), Aria Windsong (Ireland, Wind), Luana Ipê (Brazil, Thorns) |
| Season 4 | Dmitri Volkov (Russia, War machines), Seo Min-jun (Korea, Water), Selam Tesfaye (Ethiopia, Birds) |

### Game code for the launch rules (Code)
- [ ] Lock heroes that are not out yet ("Coming in Season X" on their card)
- [ ] Skins: 1 free + 2 unlockable per hero (by level, coins or diamonds - to decide)
- [ ] Developer and tester accounts see everything unlocked
- [ ] Season system: a simple list of which heroes and skins are out

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
| [ ] | [ ] | Blake Carter (new) | 6'0" |
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
- [ ] Blake: power (Drone Swarm, EMP or Grapple Hook)
- [x] Renamed from Blaze to Blake (Oct 16); Blake replaces Aria at launch, Aria moves to Season 3
- [ ] Anaya: earth power OK?
- [ ] Powers for Layla (Sandstorm?), Luana (Thorn Bind), Dmitri (Rocket Barrage?), Min-jun (Tidal Wave?), Selam (Sky Swarm?)

---

## 3. Skins (prompts by Code, models by Cowork)

3 skins per hero for launch (1 free, 2 unlock); 2 more per hero later = 5 prompts each.
Prompts go in `docs/SKIN_PROMPTS.md`.

- [ ] Code: write the skin prompts (start with the 6 launch heroes)
- [ ] Cowork: make the launch skins in Tripo (6 heroes x 3)
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
