# Race Your Flag: tasks for Claude Cowork (Tripo and ElevenLabs)

Cowork makes the 3D models (Tripo) and the audio (ElevenLabs). The code-side Claude puts the files into
the game. Hand finished files back to the user, who forwards them to the code-side chat.

## Tripo (3D)

**Heroes at their new heights:** use `docs/HERO_PROMPTS.md` (one prompt per hero, 18 heroes, tallest to
shortest). Steps for every hero:
1. Image-to-3D (or text-to-3D) with the hero's prompt. Optional: make the lineup picture at the bottom of
   that file first and use it as a reference, so the heights stay consistent.
2. Retopology: Quad, 10k.
3. Rig: Humanoid, Mixamo preset.
4. Export GLB. Name it after the hero (for example `kapwa.glb`, `selam.glb`).

Rules: one character, A-pose, empty hands, no props floating around them (keep birds, drones and weapons
out of the model; the game adds them).

**Skins:** 5 per hero, prompts coming in `docs/SKIN_PROMPTS.md`. Same steps, file name `<hero>-<skin>.glb`.

## ElevenLabs (audio)

**Sound effects:** `SOUND-EFFECTS.md` has the 48 that are done. Power sounds for every hero are coming
in `docs/POWER_SOUNDS.md`. Use ElevenLabs Sound Effects, MP3, name each file exactly as listed.

**Voices:** `VOICE-LINES.md` (format and finished heroes: Kapwa, Aria, Hayato). Lines for the other heroes
are coming. One saved voice per hero, matched to their age; name each MP3 exactly as listed.

## Delivery

Send files in small batches (3 to 5 at a time) with their exact names. Do not rename or zip them.
