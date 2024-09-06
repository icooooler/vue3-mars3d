import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { vitePluginMars3d } from 'vite-plugin-mars3d'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
      host: '0.0.0.0'
    },
    plugins: [
        vue(),
        dts({ include: './packages' }),
        vitePluginMars3d()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'packages/index.ts'),
            name: 'vue3Mars3d',
            fileName: 'vue3-mars3d'
        },
        rollupOptions: {
            external: ['vue', 'mars3d'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    mars3d: 'mars3d'
                }
            },
        }
    }
})
