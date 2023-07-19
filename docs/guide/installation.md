# 安装

## 准备工作

* [Node.js](https://nodejs.org/) >= 16.0.0
* [Vue.js](https://vuejs.org/guide/introduction.html) >= 3.0.0
* 推荐使用 [pnpm](https://pnpm.io/) 作为包管理工具

::: danger
本组件使用 [Vite](https://cn.vitejs.dev/) 作为编译工具，vue-cli和webpack未经测试
:::

## 安装核心包

::: code-group

```pnpm [pnpm]
pnpm add vue3-mars3d mars3d-cesium
pnpm add vite-plugin-mars3d -D

```

```npm [npm]

npm install vue3-mars3d mars3d-cesium
npm install vite-plugin-mars3d -D

```

```yarn [yarn]
yarn add vue3-mars3d mars3d-cesium
yarn add vite-plugin-mars3d -D

```

:::


## 配置vite插件

```ts{9}
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMars3d } from 'vite-plugin-mars3d'

export default defineConfig({
    plugins: [
        vue(),
        viteMars3d() // 添加mars3d插件
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
import { VmViewer } from 'vue3-mars3d'

</script>

```

## 完整导入

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VmMars3d from 'vue3-mars3d'

const app = createApp(App)
app.use(VmMars3d)
app.mount('#app')

```
