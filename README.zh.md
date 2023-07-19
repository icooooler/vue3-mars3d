<p align="center">Vue3 Mars3d - A Vue 3.x based component library of Mars3d for developers.</p>

- 💪 Vue 3.0 组合式API
- 🔥 使用TypeScript编写
- 🎉 [Mars3d](http://mars3d.cn/) 3D GIS 库

## 快速开始 | [English](./README.md)

详细使用文档 [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)

## 安装

使用以下命令

```pnpm
pnpm add vue3-mars3d mars3d-cesium
pnpm add vite-plugin-mars3d -D
```

## Vite配置

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

## 引入样式

```ts
// main.ts
import 'vue3-mars3d/dist/style.css'

```

## 按需加载 (推荐)

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

## 完整加载

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VmMars3d from 'vue3-mars3d'

const app = createApp(App)
app.use(VmMars3d)
app.mount('#app')

```
