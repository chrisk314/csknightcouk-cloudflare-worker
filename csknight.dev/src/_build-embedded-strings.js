const fs = require('fs')
const path = require('path')

const outFilePath = path.join(__dirname, '_embedded-strings.ts')
const pageScriptPath = path.join(__dirname, 'page-script.js')
const styleCssPath = path.join(__dirname, 'static/style.css')
const navHtmlPath = path.join(__dirname, 'static/nav.html')
const footerHtmlPath = path.join(__dirname, 'static/footer.html')

try {
  const pageScriptContent = fs.readFileSync(pageScriptPath, 'utf8')
  const navContent = fs.readFileSync(navHtmlPath, 'utf8').replace(/\r?\n|\r/g, '')
  const footerContent = fs.readFileSync(footerHtmlPath, 'utf8').replace(/\r?\n|\r/g, '')
  const escapedPageScriptContent = pageScriptContent
                                    .replace(/__NAV_BAR__/, navContent)
                                    .replace(/__FOOTER__/, footerContent)
                                    .replace(/\\/g, '\\')
  const styleCssContent = fs.readFileSync(styleCssPath, 'utf8')
  const finalContent = `export const PAGE_SCRIPT_JS_STRING = \`<script>\n${escapedPageScriptContent}</script>\`;\nexport const EXTRA_STYLE_CSS_STRING = \`${styleCssContent}\`;\n`

  fs.writeFileSync(outFilePath, finalContent)
  console.log('Page script was built successfully!')
} catch (error) {
  console.error('Failed to build page script:', error)
}
