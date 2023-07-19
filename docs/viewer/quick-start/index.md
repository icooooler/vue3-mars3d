# 快速创建一个三维地球场景

* 下面是一个简单的示例，创建一个三维地球场景。
* **其他所有组件必须包裹在此组件内部，否则无法正常工作。**

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
  <section class="box">
    <vm-viewer @ready="onReady" :scene="scene" :control="control" :terrain="terrain" :basemaps="basemaps"/>
  </section>
</template>

<script setup lang="ts">
import { VmViewer } from 'vue3-mars3d'
import { reactive } from 'vue'
import type { Map } from 'mars3d'

const scene = reactive({
  //默认视角参数
  center: { lat: 30.054604, lng: 108.885436, alt: 17036414, heading: 0, pitch: -90 },
  shadows: false, //是否启用日照阴影
  removeDblClick: true, //是否移除Cesium默认的双击事件

  //以下是Cesium.Viewer所支持的options【控件相关的写在另外的control属性中】
  sceneMode: 3, //3等价于Cesium.SceneMode.SCENE3D,

  //以下是Cesium.Scene对象相关参数
  showSun: true, //是否显示太阳
  showMoon: true, //是否显示月亮
  showSkyBox: true, //是否显示天空盒
  showSkyAtmosphere: true, //是否显示地球大气层外光圈
  fog: true, //是否启用雾化效果
  fxaa: true, //是否启用抗锯齿

  //以下是Cesium.Globe对象相关参数
  globe: {
    depthTestAgainstTerrain: false, //是否启用深度监测
    baseColor: '#546a53', //地球默认背景色
    showGroundAtmosphere: true, //是否在地球上绘制的地面大气
    enableLighting: false //是否显示昼夜区域
  },
  //以下是Cesium.ScreenSpaceCameraController对象相关参数
  cameraController: {
    zoomFactor: 3.0, //鼠标滚轮放大的步长参数
    minimumZoomDistance: 1, //地球放大的最小值（以米为单位）
    maximumZoomDistance: 50000000, //地球缩小的最大值（以米为单位）
    enableRotate: true, //2D和3D视图下，是否允许用户旋转相机
    enableTranslate: true, //2D和哥伦布视图下，是否允许用户平移地图
    enableTilt: true, // 3D和哥伦布视图下，是否允许用户倾斜相机
    enableZoom: true, // 是否允许 用户放大和缩小视图
    enableCollisionDetection: true //是否允许 地形相机的碰撞检测
  }
})

const control = reactive({
  baseLayerPicker: true, //basemaps底图切换按钮
  homeButton: true, //视角复位按钮
  sceneModePicker: true, //二三维切换按钮
  navigationHelpButton: true, //帮助按钮
  fullscreenButton: true, //全屏按钮
})

const terrain = reactive({
  url: 'http://data.mars3d.cn/terrain',
  show: true
})

const basemaps = reactive([
  {
    name: '天地图影像',
    icon: 'http://mars3d.cn/img/basemaps/tdt_img.png',
    type: 'tdt',
    layer: 'img_d',
    show: true
  }
])

// 地图加载完成后的回调
const onReady = (viewer: Map) => {
  console.log('viewer', viewer)
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>


```

:::

## 静态属性（不建议使用）

:::warning

* 以下属性是对[Mars3d.Map](http://mars3d.cn/editor-vue.html?id=map/create/options)
  三维场景所支持参数的封装，具体请参考 [Mars3d](http://mars3d.cn/api/Map.html?classFilter=map)
* 因为我们更推荐使用组件化开发，因此对于有相应组件的属性未进行响应式处理，建议直接使用对应组件进行响应式渲染
  :::

| 属性名            | 类型                                                                         |      默认值       | 描述                                        | 可选值 |
|:---------------|:---------------------------------------------------------------------------|:--------------:|:------------------------------------------|:----|
| control        | [Map.controlOptions](http://mars3d.cn/api/Map.html#.controlOptions)        |                | 添加的控件                                     |     |
| terrain        | [Map.terrainOptions](http://mars3d.cn/api/Map.html#.terrainOptions)        |                | 地形参数                                      |     |
| basemaps       | Array<[Map.basemapOptions](http://mars3d.cn/api/Map.html#.basemapOptions)> |                | 底图参数                                      |     |
| effect         | [Map.effectOptions](http://mars3d.cn/api/Map.html#.effectOptions)          |                | 添加的特效                                     |     |
| mouse          | [Map.mouseOptions](http://mars3d.cn/api/Map.html#.mouseOptions)            |                | 鼠标操作相关配置参数                                |     |
| layers         | Array<[Map.layerOptions](http://mars3d.cn/api/Map.html#.layerOptions)>     |                | 可以叠加显示的图层配置                               |     |
| chinaCRS       | [ChinaCRS](http://mars3d.cn/api/global.html#ChinaCRS)                      | ChinaCRS.WGS84 | 标识当前三维场景的国内坐标系（用于部分图层内对比判断来自动纠偏或加偏）       |     |
| lang           | [LangType](http://mars3d.cn/api/global.html#LangType)                      |                | 使用的语言（如中文、英文等）。                           |     |
| templateValues | object                                                                     |                | 图层中统一的url模版，比如可以将服务url前缀统一使用模板，方便修改或动态配置。 |     |
| token          | [Map.tokenOptions](http://mars3d.cn/api/Map.html#.tokenOptions)            |                | 覆盖SDK内的Token所有第3方Token默认值                 |     |

## 响应式属性

| 属性名    | 类型                                                                                                                                                                 | 默认值 | 描述                   | 可选值 |
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---:|:---------------------|:----|
| center | {<br/> &nbsp; lng: number<br/> &nbsp; lat: number<br/> &nbsp; alt: number<br/> &nbsp; heading?: number<br/> &nbsp; pitch?: number<br/> &nbsp; roll?: number <br/>} |     | 与scene中相同作用，提取出来方便使用 |     |
| zoom   | number                                                                                                                                                             |     | zoom层级               |     |
| cursor | string                                                                                                                                                             |     | 鼠标样式                 |     |

## 事件

:::warning
建议在相应组件中进行监听
:::

| 事件名              | 参数    | 类型                                          | 描述                                              |
|:-----------------|:------|:--------------------------------------------|:------------------------------------------------|
| ready            | map   | [Mars3d.Map](http://mars3d.cn/api/map.html) | 场景加载完成后返回地图实例<br/>**(与官方map实例相同，可以进行官方api式开发)** |
| load             | event | Event                                       | 地图初始化完成事件(地形、所有图层完成初始化)                         |
| addLayer         | event | Event                                       | 添加图层                                            |
| removeLayer      | event | Event                                       | 移除图层                                            |
| terrainChange    | event | Event                                       | 地形变化                                            |
| tileLoadProgress | event | Event                                       | 地图中瓦片加载进度变化                                     |
| cameraMoveStart  | event | Event                                       | 相机开启移动前 场景事件                                    |
| cameraMoveEnd    | event | Event                                       | 相机移动完成后 场景事件                                    |
| cameraChanged    | event | Event                                       | 相机位置完成 场景事件                                     |
| preUpdate        | event | Event                                       | 场景更新前 场景事件                                      |
| postUpdate       | event | Event                                       | 场景更新后 场景事件                                      |
| preRender        | event | Event                                       | 场景渲染前 场景事件                                      |
| postRender       | event | Event                                       | 场景渲染后 场景事件                                      |
| morphStart       | event | Event                                       | 场景模式(2D/3D/哥伦布)变换前 场景事件                         |
| morphComplete    | event | Event                                       | 完成场景模式(2D/3D/哥伦布)变换 场景事件                        |
| clockTick        | event | Event                                       | 时钟跳动 场景事件                                       |
| renderError      | event | Event                                       | 场景渲染失败（需要刷新页面）                                  |
| click            | event | Event                                       | 左键单击 鼠标事件                                       |
| clickGraphic     | event | Event                                       | 左键单击到矢量或模型数据时 鼠标事件                              |
| clickTileGraphic | event | Event                                       | 左键单击到wms或arcgis瓦片服务的对应矢量数据时                     |
| clickMap         | event | Event                                       | 左键单击地图空白（未单击到矢量或模型数据）时 鼠标事件                     |
| dblClick         | event | Event                                       | 左键双击 鼠标事件                                       |
| leftDown         | event | Event                                       | 左键鼠标按下 鼠标事件                                     |
| leftUp           | event | Event                                       | 左键鼠标按下后释放 鼠标事件                                  |
| mouseMove        | event | Event                                       | 鼠标移动 鼠标事件                                       |
| mouseMoveTarget  | event | Event                                       | 鼠标移动（拾取目标，并延迟处理） 鼠标事件                           |
| wheel            | event | Event                                       | 鼠标滚轮滚动 鼠标事件                                     |
| rightClick       | event | Event                                       | 右键单击 鼠标事件                                       |
| rightDown        | event | Event                                       | 右键鼠标按下 鼠标事件                                     |
| rightUp          | event | Event                                       | 右键鼠标按下后释放 鼠标事件                                  |
| middleClick      | event | Event                                       | 中键单击 鼠标事件                                       |
| middleDown       | event | Event                                       | 中键鼠标按下 鼠标事件                                     |
| middleUp         | event | Event                                       | 中键鼠标按下后释放 鼠标事件                                  |
| pinchStart       | event | Event                                       | 在触摸屏上两指缩放开始 鼠标事件                                |
| pinchEnd         | event | Event                                       | 在触摸屏上两指缩放结束 鼠标事件                                |
| pinchMove        | event | Event                                       | 在触摸屏上两指移动 鼠标事件                                  |
| mouseDown        | event | Event                                       | 鼠标按下 [左中右3键都触发] 鼠标事件                            |
| mouseOver        | event | Event                                       | 鼠标移入 鼠标事件                                       |
| mouseOut         | event | Event                                       | 鼠标移出 鼠标事件                                       |
| keydown          | event | Event                                       | 按键按下 键盘事件                                       |
| keyup            | event | Event                                       | 按键按下后释放 键盘事件                                    |
| popupOpen        | event | Event                                       | popup弹窗打开后                                      |
| popupClose       | event | Event                                       | popup弹窗关闭                                       |
| tooltipOpen      | event | Event                                       | tooltip弹窗打开后                                    |
| tooltipClose     | event | Event                                       | tooltip弹窗关闭                                     |
| contextMenuOpen  | event | Event                                       | 右键菜单 打开后                                        |
| contextMenuClose | event | Event                                       | 右键菜单 关闭                                         |
| contextMenuClick | event | Event                                       | 右键菜单 单击某一项后                                     |

## 方法 (使用ref实例调用)

:::warning
由于本组件是基于官方的Mars3D进行封装，所以可以直接使用官方的api进行开发，但是建议使用组件方式进行3D场景各项功能的添加与控制（能够更好的使用响应式数据进行驱动渲染），因此方法 <u>
**没有全部列出**</u>，仅封装常用方法，其他方法请自行参照官方api进行开发，其他组件同理，不再赘述。
:::

| 方法名            | 参数                                         | 描述          |
|:---------------|:-------------------------------------------|:------------|
| flyHome        | (options) => void                          | 飞行到默认视角     |
| flyTo          | (target, options) => Promise\<boolean\>    | 飞行到指定视角     |
| flyToExtent    | (extent, options) => Promise\<boolean\>    | 相机飞行定位至矩形区域 |
| flyToGraphic   | (graphic, options) => Promise\<boolean\>   | 相机飞行定位至矢量对象 |
| flyToPoint     | (point, options) => Promise\<boolean\>     | 定位至目标点      |
| flyToPositions | (positions, options) => Promise\<boolean\> | 定位至坐标数组     |
| cancelFlyTo    |                                            | 停止视角定位等操作   |
| expImage       | (options) => Promise\<boolean\>            | 截图，导出地图场景图片 |

::: tip
参数类型请参照官方文档
:::
