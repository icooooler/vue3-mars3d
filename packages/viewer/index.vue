<template>
    <div class="viewer" id="mars3dContainer">
        <slot>

        </slot>
    </div>
</template>


<script setup lang="ts">
import * as mars3d from 'mars3d'
import { getCurrentInstance, onMounted, provide, watch, onUnmounted } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import type { Map } from 'mars3d'
import { useMap } from '../composables/useMap'
import { graphic, Cesium, Util, LngLatPoint } from 'mars3d'

// 接收初始化参数
const props = withDefaults(defineProps<{
    zoom?: number
    cursor?: string
    center?: Map.sceneOptions['center']
    openAnimation?: {   // 场景初始化动画
        duration1: number
        easingFunction1: Cesium.EasingFunction.Callback
        duration2: number
        easingFunction2: Cesium.EasingFunction.Callback
        duration3: number
        easingFunction3: Cesium.EasingFunction.Callback
    }
    scene?: Map.sceneOptions
    control?: Map.controlOptions
    terrain?: Map.terrainOptions
    basemaps?: Array<{
        type: string
        [key: string]: any
    }>
}>(), {
    zoom: 0
})

const emits = defineEmits<{
    (e: 'ready', event: Map): void
    (e: 'load', event: Event): void
    (e: 'addLayer', event: Event): void
    (e: 'removeLayer', event: Event): void
    (e: 'terrainChange', event: Event): void
    (e: 'tileLoadProgress', event: Event): void
    (e: 'terrainLoadSuccess', event: Event): void
    (e: 'cameraMoveStart', event: Event): void
    (e: 'cameraMoveEnd', event: Event): void
    (e: 'cameraChanged', event: Event): void
    (e: 'preUpdate', event: Event): void
    (e: 'postUpdate', event: Event): void
    (e: 'preRender', event: Event): void
    (e: 'postRender', event: Event): void
    (e: 'morphStart', event: Event): void
    (e: 'morphComplete', event: Event): void
    (e: 'clockTick', event: Event): void
    (e: 'renderError', event: Event): void
    (e: 'click', event: Event): void
    (e: 'clickGraphic', event: Event): void
    (e: 'clickTileGraphic', event: Event): void
    (e: 'clickMap', event: Event): void
    (e: 'dblClick', event: Event): void
    (e: 'leftDown', event: Event): void
    (e: 'leftUp', event: Event): void
    (e: 'mouseMove', event: Event): void
    (e: 'mouseMoveTarget', event: Event): void
    (e: 'wheel', event: Event): void
    (e: 'rightClick', event: Event): void
    (e: 'rightDown', event: Event): void
    (e: 'rightUp', event: Event): void
    (e: 'middleClick', event: Event): void
    (e: 'middleDown', event: Event): void
    (e: 'middleUp', event: Event): void
    (e: 'pinchStart', event: Event): void
    (e: 'pinchEnd', event: Event): void
    (e: 'pinchMove', event: Event): void
    (e: 'mouseDown', event: Event): void
    (e: 'mouseUp', event: Event): void
    (e: 'mouseOver', event: Event): void
    (e: 'mouseOut', event: Event): void
    (e: 'keydown', event: Event): void
    (e: 'keyup', event: Event): void
    (e: 'popupOpen', event: Event): void
    (e: 'popupClose', event: Event): void
    (e: 'tooltipOpen', event: Event): void
    (e: 'tooltipClose', event: Event): void
    (e: 'contextMenuOpen', event: Event): void
    (e: 'contextMenuClose', event: Event): void
    (e: 'contextMenuClick', event: Event): void
    (e: 'updateControl', event: Event): void
    (e: 'zoom', event: Event): void
    (e: 'removeControl', event: Event): void
}>()

let map: Map

// 生成当前地图的唯一标识
const mapKey = Symbol('mapKey')
provide('mapKey', mapKey)
const { registerComponents, setMapInstance, destroyMapInstance } = useMap(mapKey)

onMounted(() => {

    const configs = Util.clone(props)

    map = new mars3d.Map('mars3dContainer', configs)

    // 设置了开场动画
    if (props.openAnimation) {
        if (props.center) {
            map.openFlyAnimation({ ...props.openAnimation, center: props.center })
        } else {
            map.openFlyAnimation(props.openAnimation)
        }
    } else {
        if (props.center) {
            map.setCameraView(props.center)
        }
    }

    setMapInstance(map)

    const instance = getCurrentInstance() as ComponentInternalInstance
    registerComponents(instance)

    // 事件绑定
    for (let eventTypeKey in mars3d.EventType) {

        // @ts-ignore
        map.on(mars3d.EventType[eventTypeKey], (event: Event) => {
            // @ts-ignore
            emits(eventTypeKey, event)
        })
    }

    // 暴露地图对象给外部
    emits('ready', map)
})

// 注销组件
onUnmounted(() => {
    map.destroy()
    destroyMapInstance()
})

// zoom变化
watch(() => props.zoom, (value, oldValue) => {
    if (value > oldValue) {
        map.zoomIn(value - oldValue, true)
    } else {
        map.zoomOut(oldValue - value, true)
    }
})

// 鼠标样式
watch(() => props.cursor, () => {
    if (props.cursor) {
        map.setCursor(props.cursor)
    }
})

// 监听中心点变化
watch(() => props.center, () => {
    if (props.center) {
        map.setCameraView(props.center)
    }
}, { deep: true })

// 监听场景变化
watch(() => props.scene, (scene) => {
    if (scene !== undefined) {
        map.setSceneOptions(scene)
    }
}, { deep: true })

// 停止视角定位等操作
const cancelFlyTo = () => {
    return map.cancelFlyTo()
}

// 截图，导出地图场景图片
const expImage = (options?: {
    download?: boolean;
    filename?: string;
    width?: number;
    height?: number;
    type?: string;
    encoderOptions?: number;
}): Promise<any> => {
    return map.expImage(options)
}

// 飞行到默认视角
const flyHome = (options?: {
    duration?: number;
}): void => {
    map.flyHome(options)
}

// 飞行至Cesium相关矢量对象处，是Cesium本身的flyTo方法
const flyTo = (target: any, options?: {
    duration?: number;
    maximumHeight?: number;
    offset?: Cesium.HeadingPitchRange;
}): Promise<boolean> => {
    return map.flyTo(target, options)
}

// 相机飞行定位至矩形区域
const flyToExtent = (extent: {
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    height?: number;
}, options?: {
    scale?: number;
    minHeight?: number;
    maxHeight?: number;
    heading?: number;
    pitch?: number;
    roll?: number;
    duration?: number;
    complete?: Cesium.Camera.FlightCompleteCallback;
    cancel?: Cesium.Camera.FlightCancelledCallback;
    endTransform?: Cesium.Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    convert?: boolean;
    easingFunction?: Cesium.EasingFunction.Callback;
}): Promise<boolean> => {
    return map.flyToExtent(extent, options)
}

// 相机飞行定位至矢量对象
const flyToGraphic = (graphic: graphic.BaseGraphic | graphic.BaseGraphic[], options?: {
    radius?: number;
    scale?: number;
    minHeight?: number;
    maxHeight?: number;
    heading?: number;
    pitch?: number;
    roll?: number;
    duration?: number;
    complete?: Cesium.Camera.FlightCompleteCallback;
    cancel?: Cesium.Camera.FlightCancelledCallback;
    endTransform?: Cesium.Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    convert?: boolean;
    easingFunction?: Cesium.EasingFunction.Callback;
}): Promise<boolean> => {
  return map.flyToGraphic(graphic, options)
}

// 定位至目标点
const flyToPoint = (point: LngLatPoint | Cesium.Cartesian3 | number[], options?: {
    radius?: number;
    heading?: number;
    pitch?: number;
    roll?: number;
    duration?: number;
    clampToGround?: boolean;
    complete?: Cesium.Camera.FlightCompleteCallback;
    cancel?: Cesium.Camera.FlightCancelledCallback;
    endTransform?: Cesium.Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    easingFunction?: Cesium.EasingFunction.Callback;
}): Promise<boolean> => {
  return map.flyToPoint(point, options)
}

// 定位至坐标数组
const flyToPositions = (positions: Cesium.Cartesian3[], options?: {
    radius?: number;
    scale?: number;
    minHeight?: number;
    maxHeight?: number;
    heading?: number;
    pitch?: number;
    roll?: number;
    duration?: number;
    complete?: Cesium.Camera.FlightCompleteCallback;
    cancel?: Cesium.Camera.FlightCancelledCallback;
    endTransform?: Cesium.Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    convert?: boolean;
    easingFunction?: Cesium.EasingFunction.Callback;
}): Promise<boolean> => {
  return map.flyToPositions(positions, options)
}

defineExpose({
    cancelFlyTo,
    expImage,
    flyHome,
    flyTo,
    flyToExtent,
    flyToGraphic,
    flyToPoint,
    flyToPositions,
})

</script>

<style scoped>
.viewer {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
