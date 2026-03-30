import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Put entry stylesheets before the module script so CSS is discovered before JS (shorter critical path). */
function htmlCssBeforeModuleScript() {
  return {
    name: 'html-css-before-module-script',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const linkStyles = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/gi)].map((m) => m[0])
        if (!linkStyles.length) return html

        let next = html
        for (const l of linkStyles) {
          next = next.replace(l, '')
        }

        const scriptIdx = next.indexOf('<script type="module"')
        if (scriptIdx === -1) return html

        const injected = linkStyles.join('\n    ')
        return `${next.slice(0, scriptIdx)}${injected}\n    ${next.slice(scriptIdx)}`
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlCssBeforeModuleScript()],
  // Explicitly ensure env variables are loaded
  envPrefix: 'VITE_',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-dom') || id.includes('/react/') || id.includes('\\react\\')) {
            return 'react-vendor'
          }
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
