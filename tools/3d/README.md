# 3D hero tools

Helpers used to bring Tripo models into the game. Run from this folder after `npm install`.
Headless rendering uses Playwright's Chromium (`/opt/pw-browsers/chromium-1194` in the cloud sessions).

- `prep.mjs <rigged.glb> <out.glb>`: drops baked animations, normal/metal pictures, shrinks to ~22k
  triangles and a 1024 webp texture. Use for every hero or skin before it goes into `models/`.
- `portrait.mjs <model.glb> <out.png>`: clean front picture (reference images for Gemini, store cards).
- `animview.mjs <model.glb> <out.png>`: strip of frames for every animation in a GLB (to judge them).
- `mkanims.mjs` / `mkready.mjs`: pull chosen clips out of a Tripo export into the compact format of
  `models/anims.json` (bone turns only, hips height, 12–24 fps). `mkready` builds one clip; merge it into
  `models/anims.json` by name (see git history of Oct 13–14 for examples).
- `strip.mjs`, `dump.mjs`, `sil.py`: older helpers (remove extra textures; outline-based joint finder).
