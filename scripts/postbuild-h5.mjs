import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve(process.cwd(), 'dist')
const indexHtmlPath = path.join(distDir, 'index.html')

if (!fs.existsSync(distDir)) {
  throw new Error(`dist directory not found at: ${distDir}`)
}

const cssPath = 'css/app.css'
const runtimeJsPath = 'js/352.js'
const appJsPath = 'js/app.js'

for (const p of [cssPath, runtimeJsPath, appJsPath]) {
  const abs = path.join(distDir, p)
  if (!fs.existsSync(abs)) {
    throw new Error(`Expected build output missing: ${p}`)
  }
}

const html = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="referrer" content="no-referrer-when-downgrade" />
    <title>SkillsEducation</title>
    <link rel="stylesheet" href="/${cssPath}" />
  </head>
  <body>
    <div id="app"></div>
    <script src="/${runtimeJsPath}"></script>
    <script src="/${appJsPath}"></script>
  </body>
</html>
`

fs.writeFileSync(indexHtmlPath, html, 'utf8')
console.log(`Generated ${path.relative(process.cwd(), indexHtmlPath)}`)

