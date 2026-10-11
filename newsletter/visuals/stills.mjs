#!/usr/bin/env node
// Static-image variant of the launch-video preview harness: renders one kit graphic at an exact
// canvas size (default 1200x675) so headless Chrome can screenshot it as a newsletter image.
// Usage: node stills.mjs <workdir>   (reads <workdir>/build/*.tsx, writes <workdir>/stills.html)
// Then:  stills.html?g=<file stem>&w=1200&h=675&t=99
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
const strip = (s) => s.replace(/export default function Graphic/, 'function Graphic').replace(/^import .*$/gm, '');
const src = {};
for (const f of readdirSync(join(dir, 'build')).filter((f) => f.endsWith('.tsx'))) src[f.replace(/\.tsx$/, '')] = strip(readFileSync(join(dir, 'build', f), 'utf8'));
const assets = Object.fromEntries(readdirSync(join(dir, 'img')).map((f) => [f.replace(/\.\w+$/, ''), { url: 'img/' + f, kind: 'image' }]));

writeFileSync(join(dir, 'stills.html'), `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..800&display=swap" rel="stylesheet">
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<style>html,body{margin:0;padding:0;overflow:hidden;background:#f8f6f5}</style>
</head><body><div id="root"></div><script>
const SRC = ${JSON.stringify(src)};
const assets = ${JSON.stringify(assets)};
const q = new URLSearchParams(location.search);
const g = q.get('g'), W = Number(q.get('w') || 1200), H = Number(q.get('h') || 675), T = Number(q.get('t') || 99);
const code = Babel.transform(SRC[g], { presets: [['react', { runtime: 'classic' }]] }).code;
const Graphic = new Function('React', 'Fragment', code + ';return Graphic;')(React, React.Fragment);
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement('div', { style: { position: 'relative', width: W, height: H, overflow: 'hidden', background: '#f8f6f5' } },
    React.createElement(Graphic, { time: T, width: W, height: H, assets })));
</script></body></html>`);
console.log('wrote stills.html:', Object.keys(src).join(', '));
