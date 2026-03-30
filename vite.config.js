import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * - Early modulepreload for the entry script (parallel with CSS fetch).
 * - Stylesheets before the module tag so CSS is not chained after script parse order.
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
          next = next.replace(
            /<meta charset="UTF-8" \/>/,
            (m) => `${m}\n    ${preload}`,
          )
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

        return next
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlOptimizeHead()],
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
