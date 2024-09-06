<template>

</template>

<script setup lang="ts">
import * as mars3d from 'mars3d'
import { inject, getCurrentInstance, watch, onUnmounted, onMounted } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { useMap } from '../../composables/useMap'
import type { BaseClass, Cesium, ChinaCRS, layer, Map } from 'mars3d'
import { filter } from '../../utils/propsUtil'


const mapKey = inject<symbol>('mapKey') as symbol
const { registerComponents, getMapInstance } = useMap(mapKey)

interface BaiduLayerProps {
    layer?: string
    url?: string
    subdomains?: string | string[]
    bigfont?: boolean
    style?: string
    minimumLevel?: number
    maximumLevel?: number
    minimumTerrainLevel?: number
    maximumTerrainLevel?: number
    rectangle?: {
        xmin: number
        xmax: number
        ymin: number
        ymax: number
    }
    bbox?: number[]
    zIndex?: number
    chinaCRS?: ChinaCRS
    proxy?: string
    templateValues?: any
    queryParameters?: any
    headers?: any
    opacity?: number
    alpha?: number | ((...params: any[]) => any)
    nightAlpha?: number | ((...params: any[]) => any)
    dayAlpha?: number | ((...params: any[]) => any)
    brightness?: number | ((...params: any[]) => any)
    contrast?: number | ((...params: any[]) => any)
    hue?: number | ((...params: any[]) => any)
    saturation?: number | ((...params: any[]) => any)
    gamma?: number | ((...params: any[]) => any)
    invertColor?: boolean
    filterColor?: string | Cesium.Color
    maximumAnisotropy?: number
    cutoutRectangle?: Cesium.Rectangle
    colorToAlpha?: Cesium.Color
    colorToAlphaThreshold?: number
    hasAlphaChannel?: boolean
    tileWidth?: number
    tileHeight?: number
    customTags?: any
    id?: string | number
    pid?: string | number
    name?: string
    show?: boolean
    eventParent?: BaseClass | boolean
    center?: {
        lng: number
        lat: number
        alt?: number
        heading?: number
        pitch?: number
        roll?: number
    }
    flyTo?: boolean
    flyToOptions?: any
}

const props = withDefaults(defineProps<BaiduLayerProps>(), {
    show: true,
    enablePickFeatures: true,
    hasAlphaChannel: true
})


let map: Map
let layer: layer.BaiduLayer
onMounted(() => {
    // 注册组件
    registerComponents(getCurrentInstance() as ComponentInternalInstance)
})

// 初始化组件
const initComponent = () => {
    // 接收地图实例
    map = getMapInstance()

    layer = new mars3d.layer.BaiduLayer(filter(props) as object)

    map.addLayer(layer)
}

watch(() => props, () => {
    layer.setOptions(filter(props))
}, { deep: true })

// 删除当前组件
onUnmounted(() => {
    layer.destroy()
})

// 将当前图层在map中层级进行 置底
const toBottom = () => {
    layer.toBottom()
}

// 将当前图层在map中层级进行 置顶
const toTop = () => {
    layer.toTop()
}

// 将重新加载当前图层
const reload = () => {
    layer.reload()
}

defineExpose({
    initComponent,
    toBottom,
    reload
})
</script>
