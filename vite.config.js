import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { submitMailingList } from './server/sendmsgSignup.js'

function mailingListDevApi() {
  return {
    name: 'mailing-list-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/mailing-list', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Allow', 'POST')
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false }))
          return
        }

        const chunks = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', async () => {
          try {
            const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
            const result = await submitMailingList(body)
            res.statusCode = result.httpStatus
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: result.ok }))
          } catch {
            res.statusCode = 502
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), mailingListDevApi()],
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
}) 