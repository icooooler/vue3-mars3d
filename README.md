<p align="center">Vue3 Mars3d - A Vue 3.x based component library of Mars3d for developers.</p>

- 💪 Vue 3.0 Composition API
- 🔥 Written in TypeScript
- 🎉 [Mars3d](http://mars3d.cn/) 3D GIS library

## Getting Started | [简体中文](./README.zh.md)

You can find for more details, API, and other docs on [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)

## Install

With command

```pnpm
pnpm add vue3-mars3d mars3d-cesium
pnpm add vite-plugin-mars3d -D
```

## Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMars3d } from 'vite-plugin-mars3d'

export default defineConfig({
    plugins: [
        vue(),
        viteMars3d() // add vite-plugin-mars3d
    ]
})
```

## Import Style

```ts
// main.ts
import 'vue3-mars3d/dist/style.css'

```

## On-demand Import (Recommended)

```vue

<template>
  <section class="viewer">
    <vm-viewer/>
  </section>
</template>

<script setup lang="ts">
import { VmViewer } from 'vue3-mars3d

</script>

```

## Full Import

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VmMars3d from 'vue3-mars3d'

const app = createApp(App)
app.use(VmMars3d)
app.mount('#app')

```
