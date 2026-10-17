# Handoff: Race Your Flag (start a new chat here)

**Paste this into the new chat:**
> I'm continuing work on my game Race Your Flag (repo mrsevereh101-prog/race-your-flag, live at
> https://mrsevereh101-prog.github.io/race-your-flag/). Read HANDOFF.md and NEXT-STEPS.md first.
> Workflow: push to main deploys via GitHub Pages. Explain things simply; I'm not a programmer.

## How I like to work
- Whenever a step involves Supabase, always include the direct link to the SQL Editor:
  https://supabase.com/dashboard/project/hzzqnwzsasuwjafmsgqh/sql/new
- Give SQL and messages in copy-paste code boxes.

## Where things stand (Oct 14)
- Single-file three.js r128 game: `index.html`. Supabase project hzzqnwzsasuwjafmsgqh (I run SQL myself).
- **11 heroes**, all real 3D models from Tripo, rigged with the **Mixamo** skeleton (`models/<hero>.glb`):
  Kapwa Lamò (warrior), Aria Windsong (archer, NOT rigged yet, still old home-made skeleton),
  Hayato (samurai), Malkia Nyota (queen), Sir Aldric (knight), Xiao Long (shaolin), Sigurd (viking),
  Volt-X (robot), Kid Echo (rapper), Ha-Neul (kicker), Zuri Vapor (gas). Elf and Dwarf were removed.
- All rigged heroes share one move set: `models/anims.json` (run, idle = ready stance, jump, slide,
  crouch, fall, cheer, dance, spin, wave, flex, dizzy). `driveRig()` in index.html picks the move.
- Skins as their own 3D models: add `model:'models/skins/<id>.glb'` to the skin in `SKINS_SHOP`.
  Done: Continental Champion (Kapwa), Storm Tiger (Ha-Neul, new skin, lvl 12).
- Weapons and capes hidden by default; Settings > Theme has "Flag cape" and "Weapons" switches.
  Flag floats above the player's head.

## Plan map

`PLAN.md` is the user's progress tracker (launch rules, seasons, every to-do). Keep it ticked and
up to date whenever something is done or decided. Launch rules (Oct 16): 7 launch heroes (Kapwa, Blake, Aria, Hayato, Malkia, Kid Echo, Ha-Neul), the rest show only "Coming soon"
(no dates or seasons in the game), 3 skins per hero (1 free + 2 unlock), dev/tester accounts see everything unlocked.
**Blake (Oct 17):** in the game as hero `blake` (Drone Swarm power, Overclock perk = 15% faster recharge, both placeholders to confirm). `models/blake.glb`; skins Garage Inventor (free), Neon Hacker (lvl 15), Mech Pilot (1500 coins) in `models/skins/`. Still to do: voice/sound effect, store icons.
**Audio (Oct 17):** ElevenLabs was blocked in the cloud session (no `api.elevenlabs.io` access, no key), so nothing was recorded yet. Run `ELEVENLABS_API_KEY=... node tools/audio/make-audio.mjs voices` then `... sfx` once the host is allowed (network settings) and the key is a secret. It uses Kapwa's "Hendsome" voice, designs Blake/Malkia/Kid Echo/Ha-Neul voices, makes Kapwa's Creole lines (`Wap kon Joj!` on hit, `Ret nan wol ou!` when hit; already in the game, they play once `warrior-ht-*.mp3` exist), and 4 new power sounds, then lists the files in index.html (`wire`). Aria and Hayato keep their existing recordings.
**Stats and flags (Oct 17):** every hero starts equal (`STAT_BASE` speed 1, agility 1, recharge 20). Players spend "owned flags" (`wallet.flags`, new wallets start with 50) on per-hero upgrade levels 0-10 (`wallet.up[hero]`, cost 10 x (level+1)); `heroStats()` gives the stats, runners carry `r.st`. Race finish gives flags by place (`PLACE_FLAGS` = 30/20/10 for top 3, then -5/-10/-15, never below 0, none in the tutorial). Upgrade box + Skins row are on the hero card and the runner-picker popup. Bots get random 0-3 levels. Hero pictures are live 3D portraits on a white background. Dev/tester accounts upgrade free.
**Hero page (Oct 17):** a Skins row (Original + each skin, equip / locked / price) shows on the hero card of the selected hero. Cream pages use black bold text.
**Done in code (Oct 17):** `HERO_OUT` list in index.html (next to `charById`) = heroes that are out; add an id
to release a hero. `heroOut(id)` is true for those, or for everyone when Developer mode / dev / tester account.

## Hero build prompts and heights

`docs/HERO_PROMPTS.md` holds the Tripo prompt and height for every hero (tallest: Sigurd 198 cm, shortest:
Volt-X 150 cm). **Whenever a hero is added or changed, update that file** (chart, prompt, lineup prompt).
The user is rebuilding the heroes at these heights. The game currently scales every rig to the same head
height (`attachRig`: `S=(m.headY||1.75)/H.headY`), so when the new models arrive, change that to keep each
model's own height.

## How to add a skin or hero from Tripo
1. In Tripo: Retopology (Quad, 10,000) > Rig (Humanoid, **Mixamo**, Auto Rig) > Export GLB (finished .glb, not .tmp).
2. `cd tools/3d && npm install && node prep.mjs <file.glb> ../../models/skins/<id>.glb`
3. Skin: add `model:` to its SKINS_SHOP entry (or a new entry with `hero:'<heroId>'`). Hero: `{url,rig:true}` in HERO3D.
4. Test in the browser, commit, push.

## Planned next
- One 3D skin per hero (prompts were written in chat: Kapwa, Hayato modern/young, Aria, Malkia, Sir Aldric,
  Xiao Long, Sigurd, Volt-X, Kid Echo modern, Ha-Neul, Zuri natural + Royal Kaftan).
- Store-card pictures per skin (user will send).
- Rig Aria (Wind Dancer). New base models planned: young modern Hayato, modern Kid Echo, natural Zuri.
- Optional: Tripo API (needs a NEW key saved only as a network secret for api.tripo3d.ai, plus that domain
  allowed under Network access). The old key was pasted in chat and must be revoked.
- Weapons as heirloom/mythical store items; voices matched to young/older heroes.
