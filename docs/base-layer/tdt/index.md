# 天地图

下面是一个简单的示例，使用天地图作为底图。

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
  <vm-viewer>
    <vm-tdt-layer ref="tdtRef" :layer="imgDConfig.layer"/>
    <vm-tdt-layer :layer="vecZConfig.layer"/>
  </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmTdtLayer } from 'vue3-mars3d'
import { reactive, ref } from 'vue'

const imgDConfig = reactive({
  layer: 'img_d'
})

const vecZConfig = reactive({
  layer: 'vec'
})

const tdtRef = ref<InstanceType<typeof VmTdtLayer> | null>(null)

// 重载
const reloadLayer = () => {
  tdtRef.value?.reload()
}

</script>

<style scoped>

</style>


```

:::

## 静态属性

| 属性名                   | 类型                                                                                                                                 |        默认值        | 是否必填 | 描述                                                                                                                                           |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------------:|:----:|:---------------------------------------------------------------------------------------------------------------------------------------------|
| id                    | string \| number                                                                                                                   |   createGuid()    |  否   | 图层id标识                                                                                                                                       |            |
| pid                   | string \| number                                                                                                                   |        -1         |  否   | 图层父级的id，一般图层管理中使用                                                                                                                            |            |


## 响应式属性

| 属性名                   | 类型                                                                                                                                 |        默认值        | 是否必填 | 描述                                                                                                                                           |
|:----------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------------:|:----:|:---------------------------------------------------------------------------------------------------------------------------------------------|
| name                  | string                                                                                                                             |                   |  否   | 图层名称                                                                                                                                         |            |
| show                  | boolean                                                                                                                            |       true        |  否   | 是否显示                                                                                                                                         |            |
| layer                 | vec_d：电子图层<br/>vec_z：电子注记<br/>vec_e：电子注记英文<br/> img_d: 卫星影像<br/>img_z: 影像注记<br/> img_e: 影像注记英文<br/>ter_d: 地形渲染图<br/>ter_z: 地形渲染图注记 |                   |  是   | 图层类型                                                                                                                                         |
| key                   | Array\<string\>                                                                                                                    |                   |  否   | 天地图服务Token                                                                                                                                   | 
| url                   | string                                                                                                                             |                   |  否   | 服务URL地址，同xyz服务                                                                                                                               | 
| minimumLevel          | number                                                                                                                             |         0         |  否   | 瓦片所支持的最低层级，如果数据没有第0层，该参数必须配置,当小于该层级时平台不去请求数据                                                                                                 | 
| maximumLevel          | number                                                                                                                             |                   |  否   | 瓦片所支持的最大层级,大于该层级时会显示上一层拉伸后的瓦片，当地图大于该级别时，平台不去请求服务数据                                                                                           | 
| minimumTerrainLevel   | number                                                                                                                             |                   |  否   | 展示影像图层的最小地形细节级别，小于该级别时，平台不显示影像数据                                                                                                             | 
| maximumTerrainLevel   | number                                                                                                                             |                   |  否   | 展示影像图层的最大地形细节级别，大于该级别时，平台不显示影像数据                                                                                                             |
| rectangle             | {<br/>xmin：number<br/>xmax：number<br/>ymin：number<br/>ymax：number<br/>}                                                            |                   |  否   | 瓦片数据的矩形区域范围                                                                                                                                  |
| bbox                  | Array\<number\>                                                                                                                    |                   |  否   | 可选bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可                                                                                                         |
| zIndex                | number                                                                                                                             |                   |  否   | 控制图层的叠加层次，默认按加载的顺序进行叠加，但也可以自定义叠加顺序，数字大的在上面(只对同类型图层间有效)                                                                                       |
| crs                   | [CRS](http://mars3d.cn/api/global.html#CRS)                                                                                        |   CRS.EPSG:3857   |  否   | 瓦片数据的坐标系信息，默认为墨卡托投影,也支持传入EPSG4490坐标系                                                                                                         |
| chinaCRS              | [chinaCRS](http://mars3d.cn/api/global.html#ChinaCRS)                                                                              |                   |  否   | 标识瓦片的国内坐标系（用于自动纠偏或加偏），自动将瓦片转为map对应的chinaCRS类型坐标系                                                                                             |
| proxy                 | string                                                                                                                             |                   |  否   | 加载资源时要使用的代理服务url                                                                                                                             |
| templateValues        | object                                                                                                                             |                   |  否   | 一个对象，用于替换Url中的模板值的键/值对                                                                                                                       |
| queryParameters       | object                                                                                                                             |                   |  否   | 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: \{'access_token': '123-435-456-000'\}                                                            |
| headers               | object                                                                                                                             |                   |  否   | 一个对象，将发送的其他HTTP标头。比如：headers: \{ 'X-My-Header': 'valueOfHeader' \}                                                                           |
| subdomains            | object \| Array\<string\>                                                                                                          |    '01234567'     |  否   | URL模板中用于 {s} 占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是一个子域。如果是 一个数组，数组中的每个元素都是一个子域                                                                    |
| opacity               | number                                                                                                                             |        1.0        |  否   | 透明度，取值范围：0.0-1.0。                                                                                                                            |
| alpha                 | number \| function                                                                                                                 |        1.0        |  否   | 同opacity。                                                                                                                                    |
| nightAlpha            | number \| function                                                                                                                 |        1.0        |  否   | 当 enableLighting 为 true 时 ，在地球的夜晚区域的透明度，取值范围：0.0-1.0。                                                                                        |
| dayAlpha              | number \| function                                                                                                                 |        1.0        |  否   | 当 enableLighting 为 true 时，在地球的白天区域的透明度，取值范围：0.0-1.0。                                                                                         |
| brightness            | number \| function                                                                                                                 |        1.0        |  否   | 亮度                                                                                                                                           |
| contrast              | number \| function                                                                                                                 |        1.0        |  否   | 对比度。 1.0使用未修改的图像颜色，小于1.0会降低对比度，而大于1.0则会提高对比度。                                                                                                |
| hue                   | number \| function                                                                                                                 |        0.0        |  否   | 色调。 0.0 时未修改的图像颜色。                                                                                                                           |
| saturation            | number \| function                                                                                                                 |        1.0        |  否   | 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度。                                                                                                |
| gamma                 | number \| function                                                                                                                 |        1.0        |  否   | 伽马校正值。 1.0使用未修改的图像颜色。                                                                                                                        |
| invertColor           | boolean                                                                                                                            |                   |  否   | 是否反向颜色，内部计算规则: color.r = 1.0 - color.r                                                                                                       |
| filterColor           | string \| Cesium.Color                                                                                                             |                   |  否   | 滤镜颜色，内部计算规则: color.r = color.r * filterColor.r                                                                                               |
| maximumAnisotropy     | number                                                                                                                             | maximum supported |  否   | 使用的最大各向异性水平 用于纹理过滤。如果未指定此参数，则支持最大各向异性 将使用WebGL堆栈。较大的值可使影像在水平方向上看起来更好 视图                                                                      |
| cutoutRectangle       | Cesium.Rectangle                                                                                                                   |                   |  否   | 制图矩形，用于裁剪此ImageryLayer的一部分。                                                                                                                  |
| colorToAlpha          | Cesium.Color                                                                                                                       |                   |  否   | 用作Alpha的颜色。                                                                                                                                  |
| colorToAlphaThreshold | number                                                                                                                             |       0.004       |  否   | 颜色到Alpha的阈值。                                                                                                                                 |
| hasAlphaChannel       | boolean                                                                                                                            |       true        |  否   | 如果此图像提供者提供的图像为真 包括一个Alpha通道；否则为假。如果此属性为false，则为Alpha通道，如果 目前，将被忽略。如果此属性为true，则任何没有Alpha通道的图像都将 它们的alpha随处可见。当此属性为false时，内存使用情况 和纹理上传时间可能会减少。 |
| tileWidth             | number                                                                                                                             |        256        |  否   | 图像图块的像素宽度。                                                                                                                                   |
| tileHeight            | number                                                                                                                             |        256        |  否   | 图像图块的像素高度。                                                                                                                                   |
| customTags            | object                                                                                                                             |                   |  否   | 允许替换网址模板中的自定义关键字。该对象必须具有字符串作为键，并且必须具有值。                                                                                                      |
| eventParent           | boolean                                                                                                                            |       true        |  否   | 指定的事件冒泡对象，默认为map对象，false时不冒泡。                                                                                                                |
| flyTo                 | boolean                                                                                                                            |                   |  否   | 加载完成数据后是否自动飞行定位到数据所在的区域。                                                                                                                     |
| flyToOptions          | object                                                                                                                             |                   |  否   | 加载完成数据后是否自动飞行定位到数据所在的区域的对应 [BaseLayer#flyTo](http://mars3d.cn/api/BaseLayer.html#flyTo)方法参数。                                                 |

## 事件

:::tip
参照 [快速开始](/viewer/quick-start/#事件) 中的事件说明
:::

## 方法

| 方法名      | 参数 | 描述                |
|:---------|:---|:------------------|
| toBottom |    | 将当前图层在map中层级进行 置底 |
| toTop    |    | 将当前图层在map中层级进行 置顶 |
| reload   |    | 重载当前图层            |
