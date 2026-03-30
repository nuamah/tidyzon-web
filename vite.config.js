import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * - Early modulepreload for the entry script (parallel with CSS fetch).
 * - Stylesheets before the module tag so CSS is not chained after script parse order.
 * - Stylesheets loaded non-blocking (preload as style + onload) to satisfy render-blocking audit.
 */
function htmlOptimizeHead() {
  return {
    name: 'html-optimize-head',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        let next = html

        const entryMatch = next.match(/<script[^>]+type="module"[^>]+src="([^"]+)"[^>]*>/)
        const entrySrc = entryMatch?.[1]
        if (entrySrc && !next.includes(`href="${entrySrc}"`)) {
          const preload = `<link rel="modulepreload" crossorigin href="${entrySrc}" />`
          const imagePreload = next.match(/<link[^>]+rel="preload"[^>]+as="image"[^>]*\/?>/i)
          if (imagePreload) {
            next = next.replace(imagePreload[0], `${imagePreload[0]}\n    ${preload}`)
          } else {
            next = next.replace(
              /<meta charset="UTF-8" \/>/,
              (m) => `${m}\n    ${preload}`,
            )
          }
        }

        const linkStyles = [...next.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/gi)].map((m) => m[0])
        if (linkStyles.length) {
          for (const l of linkStyles) {
            next = next.replace(l, '')
          }
          const scriptIdx = next.indexOf('<script type="module"')
          if (scriptIdx !== -1) {
            const injected = linkStyles.join('\n    ')
            next = `${next.slice(0, scriptIdx)}${injected}\n    ${next.slice(scriptIdx)}`
          }
        }

        // Non-blocking CSS (FCP/LCP lab): preload then apply on load
        next = next.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)"\s*\/?>/g,
          (_, href) =>
            `<link rel="preload" crossorigin href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'" />\n    <noscript><link rel="stylesheet" crossorigin href="${href}" /></noscript>`,
        )

        return next
      },
    },
  }
}

/** Post-build: preload local woff2 files referenced by the main CSS (reduces font chain latency). */
function injectFontPreloads() {
  return {
    name: 'inject-font-preloads',
    writeBundle(options) {
      const dir = options.dir
      if (!dir) return
      const indexPath = join(dir, 'index.html')
      if (!existsSync(indexPath)) return
      let html = readFileSync(indexPath, 'utf8')
      if (html.includes('data-font-preloads')) return
      const cssMatch = html.match(/href="(\/assets\/index-[^"]+\.css)"/)
      if (!cssMatch) return
      const cssPath = join(dir, cssMatch[1].replace(/^\//, ''))
      if (!existsSync(cssPath)) return
      const css = readFileSync(cssPath, 'utf8')
      const urls = new Set()
      for (const m of css.matchAll(/url\((\/assets\/[^)]+\.woff2)\)/g)) {
        urls.add(m[1])
      }
      if (urls.size === 0) return
      const preloads = [...urls]
        .map(
          (u) =>
            `    <link rel="preload" href="${u}" as="font" type="font/woff2" crossorigin />`,
        )
        .join('\n')
      html = html.replace(
        '<meta charset="UTF-8" />',
        `<meta charset="UTF-8" />\n<!-- data-font-preloads -->\n${preloads}`,
      )
      writeFileSync(indexPath, html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlOptimizeHead(), injectFontPreloads()],
  // Explicitly ensure env variables are loaded
  envPrefix: 'VITE_',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Keep scheduler & react-tied deps with React to avoid TDZ / "Cannot access before initialization" in vendor chunk.
          if (id.includes('scheduler')) return 'react-vendor'
          if (id.includes('use-sync-external-store')) return 'react-vendor'
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('\\react\\')) {
            return 'react-vendor'
          }
          if (id.includes('react-helmet')) return 'react-vendor'
          if (id.includes('react-router')) return 'router'
          if (id.includes('posthog')) return 'posthog'
          if (id.includes('lucide-react')) return 'icons'
          return 'vendor'
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
