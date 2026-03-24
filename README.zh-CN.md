# My Figma 插件

基于 **Vue 3** 界面与 **Vite** 打包的 [Figma](https://www.figma.com/) 插件。主线程为 TypeScript（`src/code.ts`）；界面由 `src/ui/` 构建为单文件 HTML。

**语言：** [English](README.md) · 中文

---

## 环境要求

- **Node.js** 18+（推荐）
- **Figma** 桌面端或浏览器（用于加载插件）

## 安装

```bash
git clone <你的仓库地址>
cd my-project
npm install
```

## 开发

同时监听插件主代码与界面构建：

```bash
npm run dev
```

该命令会监听 `src/code.ts`（esbuild）与 Vue 界面（Vite），产物输出到 `dist/`：

- `dist/code.js` — 插件主线程
- `dist/index.html` — 插件 UI（经 `vite-plugin-singlefile` 内联资源）

在 **Figma** 中：**菜单 → 插件 → 开发 → 从清单导入…**，选择本项目的 `manifest.json`。修改代码后，通过 **插件 → 开发 → [你的插件]** 重新运行；必要时可再次导入。

## 生产构建

```bash
npm run build
```

等同于先执行 `build:ui`（Vite）再执行 `build:code`（esbuild）。发布时需连同 `manifest.json` 一起提供 `dist/` 目录（发布前请按需修改 `manifest.json` 中的 `id`、`name` 等字段）。

## 项目结构

| 路径 | 说明 |
|------|------|
| `manifest.json` | Figma 插件清单（`main` → `dist/code.js`，`ui` → `dist/index.html`） |
| `src/code.ts` | 插件沙箱：`figma.*` API、`figma.showUI`、消息处理 |
| `src/ui/` | Vue 3 应用（入口为 `index.html` / `main.ts`） |
| `dist/` | 构建输出（请勿手改） |

## 脚本说明

| 命令 | 说明 |
|------|------|
| `npm run dev` | 监听模式：文件变更时重新构建界面与主代码 |
| `npm run build` | 一次性生产构建 |
| `npm run build:ui` | 仅构建界面（Vite → `dist/index.html`） |
| `npm run build:code` | 仅打包主代码（esbuild → `dist/code.js`） |

## 许可证

如有需要，在此补充许可证说明。
