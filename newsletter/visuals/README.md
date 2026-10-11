# Newsletter stills

Product images for the email, drawn as code with the `staffer-motion-kit` (the same kit the launch videos use) and rendered to PNG with headless Chrome. Every string and colour comes from the app's production code, not from memory.

```bash
newsletter/visuals/build.sh
python3 -m http.server 8781 --bind 127.0.0.1 --directory newsletter/visuals   # in the background
newsletter/visuals/shoot.sh hero newsletter/visuals/out/hero.png              # 1200x675 by default
newsletter/visuals/shoot.sh references newsletter/visuals/out/references.png 1200 820
```

- One scene per image in `scenes/`. A scene is a Cardboard `Graphic()` with `// @kit` and `// @icons` markers.
- Components are drawn at 2x the app's size on a 1200-wide canvas, so they read at 1x in a 600px email.
- One component per image, on warm white (`#F8F6F5`), cropped with a fade where it runs off the edge.
- Copy finished PNGs to `images/newsletter/<date>-<name>.png`.
- `icons-extra.jsx` adds Hugeicons the kit doesn't have (generated from `@hugeicons/core-free-icons` 4.3.5).
