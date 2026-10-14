# Handoff: Race Your Flag (start a new chat here)

**Paste this into the new chat:**
> I'm continuing work on my game Race Your Flag (repo mrsevereh101-prog/race-your-flag, live at
> https://mrsevereh101-prog.github.io/race-your-flag/). Read HANDOFF.md and NEXT-STEPS.md first.
> Workflow: push to main deploys via GitHub Pages. Explain things simply; I'm not a programmer.

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
