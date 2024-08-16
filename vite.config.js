import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        "name": "TCA Cycle",
        "short_name": "TCA Cycle",
        "start_url": "/",
        "display": "fullscreen",
        "background_color": "#ffffff",
        "theme_color": "#485EEE",
        "icons": [
          {
            "src": "./logo.png"
          }
        ]
      }, 
    })
  ],
})
