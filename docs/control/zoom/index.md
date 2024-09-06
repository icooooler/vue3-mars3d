# 导航球

下面是一个简单的示例，使用导航球。

## 示例

<ClientOnly>
    <Demo />
</ClientOnly>

<script setup>
import { defineAsyncComponent } from 'vue'

const Demo = defineAsyncComponent(() => import('./demo.vue'))

</script>

::: details 查看代码

```vue

<template>
  <vm-viewer :center="center">
    <vm-tdt-layer layer="img_d"/>
    <vm-location-bar/>
    <vm-zoom/>
  </vm-viewer>
</template>

<script setup lang="ts">
import { VmTdtLayer, VmViewer, VmLocationBar, VmZoom } from 'vue3-mars3d'
import { reactive } from 'vue'

const center = reactive({ lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 })

</script>

<style scoped>

</style>


```

:::

## 静态属性

| 属性名 | 类型               |     默认值      | 是否必填 | 描述      |
|:----|:-----------------|:------------:|:----:|:--------|
| id  | string \| number | createGuid() |  否   | 对象的id标识 |            |

## 响应式属性

| 属性名             | 类型          | 默认值  | 是否必填 | 描述                                  |
|:----------------|:------------|:----:|:----:|:------------------------------------|
| show            | boolean     | true |  否   | 是否显示                                |            |
| relativeAmount  | number      |  2   |  否   | 放大缩小的相对量（调整步长）                      |            |
| zoomOutIcon     | string      |      |  否   | 缩小按钮 图片url路径 或 字体图标class名           |            |
| zoomInIcon      | string      |      |  否   | 放大按钮 图片url路径 或 字体图标class名           |            |
| enabled         | boolean     | true |  否   | 对象的启用状态                             |            |
| parentContainer | HTMLElement |      |  否   | 控件加入的父容器，默认为map所在的DOM map.container |            |
| insertIndex     | number      |      |  否   | 可以自定义插入到父容器中的index顺序，默认是插入到最后面      |            |
| insertBefore    | HTMLElement |      |  否   | 可以自定义插入到指定兄弟容器的前面，与insertIndex二选一   |            |

## 事件

:::tip
参照 [快速开始](/viewer/quick-start/#事件) 中的事件说明
:::

| 事件名   | 参数  | 类型           | 描述             |
|:------|:----|:-------------|:---------------|
| ready | map | control.Zoom | 控件加载完成后返回的控件实例 |

