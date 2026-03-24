# My Figma Plugin

A [Figma](https://www.figma.com/) plugin with a **Vue 3** UI and **Vite** for bundling. The main thread runs TypeScript (`src/code.ts`); the UI is a single-file build from `src/ui/`.

**Language:** English · [中文](README.zh-CN.md)

---

## Requirements

- **Node.js** 18+ (recommended)
- **Figma** desktop app or browser (for loading the plugin)

## Install

```bash
git clone <your-repo-url>
cd my-project
npm install
```

## Development

Run the watch build for both the plugin code and the UI:

```bash
npm run dev
```

This watches `src/code.ts` (esbuild) and the Vue UI (Vite). Output goes to `dist/`:

- `dist/code.js` — plugin main thread
- `dist/index.html` — plugin UI (inlined assets via `vite-plugin-singlefile`)

In **Figma**: **Menu → Plugins → Development → Import plugin from manifest…** and select `manifest.json` in this project. After changes, use **Plugins → Development → [your plugin]** to reload, or re-import if needed.

## Production build

```bash
npm run build
```

Equivalent to `build:ui` (Vite) then `build:code` (esbuild). Ship the `dist/` folder together with `manifest.json` (adjust `manifest.json` fields such as `id` and `name` before publishing).

## Project layout

| Path | Role |
|------|------|
| `manifest.json` | Figma plugin manifest (`main` → `dist/code.js`, `ui` → `dist/index.html`) |
| `src/code.ts` | Plugin sandbox: `figma.*` API, `figma.showUI`, message handling |
| `src/ui/` | Vue 3 app (entry: `index.html` / `main.ts`) |
| `dist/` | Build output (do not edit by hand) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Watch mode: rebuild UI + code on file changes |
| `npm run build` | One-off production build |
| `npm run build:ui` | Build UI only (Vite → `dist/index.html`) |
| `npm run build:code` | Bundle plugin code only (esbuild → `dist/code.js`) |

## License

Add your license here if applicable.
