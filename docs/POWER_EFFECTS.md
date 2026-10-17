# Race Your Flag: power effect art (7 launch heroes)

Art for what you see when a hero uses their power. One picture sheet per hero, made in an image tool (Gemini or similar), then cut into separate transparent pictures with `art/cut.py`. The code-side chat puts them in the game as glowing effects.

## How to make every sheet
1. Paste the **Shared rules** and then the hero's **sheet prompt** into the image tool. Ask for ONE image, landscape, 3 columns by 2 rows (6 pieces), each piece in its own cell, in the reading order listed (left to right, top row first).
2. Background: the **solid screen color** named for that sheet (pure #FF00FF magenta or pure #00FF00 green), flat, no gradient, no shadows on the floor.
3. Save the sheet as `art/sheets/fx_<hero>.png`.
4. Cut it: `python3 art/cut.py art/sheets/fx_<hero>.png <green|magenta> img/fx <id1> <id2> <id3> <id4> <id5> <id6> --size 512 --hi 0.2 --lo 0` (use the ids listed under each sheet, in the same order). This writes `img/fx/<id>.webp`.
5. Send the finished `img/fx/*.webp` files (exact names) to the code-side chat, or upload them to https://github.com/mrsevereh101-prog/race-your-flag/upload/main/img/fx

If a glow gets cut off or a fringe of the screen color remains, lower `--hi` (for example 0.12) or ask the image tool to remake that sheet with less glow outside the shapes.

## Shared rules (paste with every sheet prompt)
Stylized cartoon mobile-game visual effect art, bright and punchy, bold clean shapes, soft glow, a white-hot core fading to saturated color at the edges, slightly 3D painted look, polished like a premium mobile game. Effects only: NO characters, NO people, NO faces, NO hands, NO text, NO letters, NO logos, NO borders, NO frames. Each piece is a separate object, centered in its own cell with generous empty space around it, nothing overlapping or touching the cell edges. Flat solid background color only, no floor, no shadow, no gradient. Square cells, same style across all six pieces.

## 1. Kapwa Lamò: Lightning  (screen: magenta)
Ids in order: `fx_bolt_a  fx_bolt_b  fx_bolt_c  fx_strike_flash  fx_spark  fx_cloud`

Sheet prompt: Six lightning effect pieces in electric blue and white. (1) a tall thick vertical forked lightning bolt, jagged, branching twice. (2) a different tall vertical lightning bolt with one side branch. (3) a third tall lightning bolt, thinner, with a bright forked tip. (4) a round ground-strike flash: a flat starburst of white-blue light with a ring of small zigzag sparks, seen from slightly above. (5) a single bright electric spark star with four long thin points. (6) a dark stormy cartoon thundercloud with glowing blue edges and flashes inside, seen from the front.

## 2. Blake Carter: Drone Swarm  (screen: magenta)
Ids in order: `fx_drone_front  fx_drone_side  fx_drone_top  fx_zap_arc  fx_scan_ring  fx_zap_hit`

Sheet prompt: Six futuristic gadget effect pieces in cyan blue, white and dark grey. (1) a small round hovering helper drone seen from the front, glossy dark grey shell with two glowing cyan eyes and a tiny propeller ring. (2) the same drone seen from the side, with small glowing thrusters. (3) the same drone seen from above, four tiny rotors blurred. (4) a curved branching electric arc in cyan and white, horizontal, like a zap jumping between two points. (5) a flat glowing cyan holographic scanner ring with small tick marks and tiny data squares around it, seen from slightly above. (6) a cyan electric impact burst: a star of white-cyan light with small circuit-line sparks flying out.

## 3. Aria Windsong: Wind  (screen: magenta)
Ids in order: `fx_gust_a  fx_gust_b  fx_wind_swirl  fx_leaf  fx_feather  fx_wind_ring`

Sheet prompt: Six wind effect pieces in soft white, mint green and pale blue. (1) a long curved wind gust streak with a swirl curl at one end, made of layered translucent ribbons. (2) a different wide wind gust with two parallel curved streaks. (3) a tight spiral wind vortex, like a small tornado seen from the side, layered ribbons. (4) a single green leaf caught in the wind, slightly curled, with a thin motion trail. (5) a single white-and-pale-blue feather, curved, with a thin motion trail. (6) a flat expanding ring of wind made of curved dashes, seen from slightly above.

## 4. Hayato Kurogane: Slash  (screen: green)
Ids in order: `fx_slash_a  fx_slash_b  fx_slash_x  fx_slash_line  fx_petal  fx_slash_hit`

Sheet prompt: Six sword-slash effect pieces in white, hot red and crimson. (1) a big curved crescent slash arc, thick in the middle and tapering to sharp points, white core with red glow, sweeping diagonally. (2) a mirrored crescent slash arc sweeping the other way. (3) an X shape made of two crossed crescent slashes, white core with red glow. (4) one long, very thin straight diagonal slash line with a bright white core and red glow. (5) a single pink cherry-blossom petal with a small swirl trail. (6) a slash impact burst: a starburst of white and red light with thin sharp rays.

## 5. Malkia Nyota: Stampede  (screen: magenta)
Ids in order: `fx_lion  fx_elephant  fx_rhino  fx_buffalo  fx_dust  fx_paw`

Sheet prompt: Six savanna stampede effect pieces, golden and warm orange with glowing edges. (1) a running lion in side view, mid-leap, made of golden light and energy, spirit-animal style with flowing glowing mane. (2) a charging elephant in side view, golden spirit-animal glow, trunk raised. (3) a charging rhino in side view, golden spirit-animal glow. (4) a charging buffalo in side view, golden spirit-animal glow. (5) a billowing cartoon dust cloud, warm sand colored with golden highlights. (6) a big glowing golden paw print. (The animals are glowing spirit silhouettes, not realistic, no fur detail needed.)

## 6. Kid Echo: Bass Drop  (screen: green)
Ids in order: `fx_sound_ring  fx_speaker  fx_note_a  fx_note_b  fx_eq_bars  fx_bass_burst`

Sheet prompt: Six music and bass effect pieces in neon purple, magenta-pink and white. (1) a set of concentric sound-wave rings, thick and glowing, viewed from slightly above like a shockwave. (2) a big chunky speaker cabinet with a large woofer cone, glowing purple rim, seen from the front. (3) a glowing eighth music note with a small trail. (4) a glowing pair of beamed music notes. (5) a row of glowing equalizer bars of different heights, neon purple and pink. (6) a radial bass-drop burst: a round starburst with thick wobbling wave lines radiating outward.

## 7. Ha-Neul: Hurricane Kick (after-image)  (screen: green)
Ids in order: `fx_ghost_kick_a  fx_ghost_kick_b  fx_ghost_foot  fx_kick_swoosh  fx_foot_hit  fx_star`

Her kick leaves an after-image: ghostly copies of the kick trailing behind in a fan, like a fast anime kick. The code side also makes real after-image ghosts from her own 3D model during the move; these pictures add the glow around them.

Sheet prompt: Six taekwondo after-image kick effect pieces in hot pink, white and coral. (1) an after-image kick trail: four translucent pink-white ghost copies of a single kicking LEG and FOOT (no body, no person) fanned out along a sweeping arc, each copy fainter than the last, the strongest copy at the front with a bright white edge, speed lines behind. (2) a different after-image: three translucent ghost copies of a high-kicking leg and foot rising in an upward arc, fading to nothing at the back, speed lines. (3) one single glowing foot-and-ankle silhouette in a taekwondo kick pose, solid white-pink light, like a flat glowing stamp (no body, no person). (4) a fast curved kick swoosh streak, white core with pink glow. (5) a foot-impact burst: a starburst of white-pink light with a small round shockwave ring and short sharp rays. (6) a bright four-point sparkle star in pink and white.

## Notes for the code side (not for the image tool)
- The game draws each picture as a glowing flat sprite (additive blend) that faces the camera, scaled and faded by code, so each hero's power keeps its own timing and sound.
- Missing pictures just fall back to the current built-in effects, so heroes can be done one at a time.
