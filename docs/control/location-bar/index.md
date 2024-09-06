# 下侧状态栏

下面是一个简单的示例，使用下侧状态栏。

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
    <vm-tdt-layer layer="img_z"/>

    <vm-location-bar @ready="onReady"/>
  </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmTdtLayer, VmLocationBar } from 'vue3-mars3d'
import { reactive, ref } from 'vue'
import { control } from 'mars3d'

const center = reactive({
  lat: 31.667339,
  lng: 117.301893,
  alt: 40357,
  heading: 2,
  pitch: -68
})

const onReady = (locationBar: control.LocationBar) => {
  console.log(locationBar)
}

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

| 属性名        | 类型                       |           默认值            | 是否必填 | 描述                                                                                                                                                                               |
|:-----------|:-------------------------|:------------------------:|:----:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| show       | boolean                  |           true           |  否   | 是否显示                                                                                                                                                                             |            |
| fps        | boolean                  |          false           |  否   | 是否显示FPS                                                                                                                                                                          |            |
| template   | string                   |                          |  否   | 展示的内容格式化字符串, 为数组时按多语言顺序定义，如[中文、繁体、英文] 支持以下模版配置： 【鼠标所在位置】 经度:{lng}， 纬度:{lat}， 海拔：{alt}米， 横{crsx} 纵{crsy} 【相机的】 方向角度：{heading}， 俯仰角度：{pitch}， 视高：{cameraHeight}米， 【地图的】 层级：{level} |            |
| latDecimal | number                   | LngLatPoint.FormatLength |  否   | 保留的{lat}和{lng}的小数位                                                                                                                                                               |            |
| crs        | string \| CRS \| boolean |                          |  否   | 按指定坐标系显示坐标值,true时取值CRS.CGCS2000_GK_Zone_3，配置后template可以加模板：【鼠标所在位置对应的crs坐标系】 X或经度值：{crsx}， Y或纬度值：{crsy}                                                                          |            |
| crsDecimal | number                   |            1             |  否   | 保留的{crsx}和{crsy}的小数位                                                                                                                                                             |            |
| style      | object                   |                          |  否   | css样式                                                                                                                                                                            |            |
| cacheTime  | number                   |            50            |  否   | 鼠标移动的缓存时间(毫秒)                                                                                                                                                                    |            |

## 事件

:::tip
参照 [快速开始](/viewer/quick-start/#事件) 中的事件说明
:::

| 事件名   | 参数  | 类型                  | 描述             |
|:------|:----|:--------------------|:---------------|
| ready | map | control.LocationBar | 控件加载完成后返回的控件实例 |

