import { build } from 'vite'
import * as esbuild from 'esbuild'
import { mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.resolve(rootDir, 'dist')

async function main() {
  mkdirSync(distDir, { recursive: true })

  const ctx = await esbuild.context({
    entryPoints: [path.resolve(rootDir, 'src/code.ts')],
    bundle: true,
    outfile: path.resolve(distDir, 'code.js'),
    target: 'es2020',
  })
  await ctx.watch()
  console.log('✓ 正在监听 src/code.ts 变更...')

  console.log('✓ 正在监听 UI 文件变更...\n')
  await build({
    configFile: path.resolve(rootDir, 'vite.config.ts'),
    build: {
      watch: {},
    },
  })
}

main().catch((err) => {
  console.error('启动失败:', err)
  process.exit(1)
})
