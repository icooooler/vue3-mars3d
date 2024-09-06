<template>
    <div style="display: none">
        <div ref="outSvgRef">
            <slot name="outSvg">

            </slot>
        </div>

        <div ref="innerSvgRef">
            <slot name="innerSvg">

            </slot>
        </div>

        <div ref="rotationArcSvgRef">
            <slot name="rotationArcSvg">

            </slot>
        </div>

    </div>

</template>

<script setup lang="ts">
import * as mars3d from 'mars3d'
import { useMap } from '../../composables/useMap'
import { getCurrentInstance, inject, onMounted, onUnmounted, ref, watch } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { filter } from '../../utils/propsUtil'
import { Map, Cesium, graphic } from 'mars3d'

const mapKey = inject<symbol>('mapKey')

const { getMapInstance, registerComponents } = useMap(mapKey as symbol)

interface OverviewProps {
    basemap: Map.basemapOptions | any
    layers?: Map.layerOptions[] | any[]
    scene?: Map.sceneOptions
    control?: Map.controlOptions
    rectangle?: graphic.RectangleEntity | any
    style?: {
        top?: string
        bottom?: string
        left?: string
        right?: string
    }
    flyToOptions?: {
        scale?: number
        duration?: number
        complete?: Cesium.Camera.FlightCompleteCallback
        cancel?: Cesium.Camera.FlightCancelledCallback
    }
    id?: string | number
    enabled?: boolean
    parentContainer?: HTMLElement
    insertIndex?: number
    insertBefore?: HTMLElement
}

const props = withDefaults(defineProps<OverviewProps>(), {
    show: true,
    enabled: true
})

const outSvgRef = ref<HTMLDivElement | null>(null)
const innerSvgRef = ref<HTMLDivElement | null>(null)
const rotationArcSvgRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    registerComponents(getCurrentInstance() as ComponentInternalInstance)
})

const emits = defineEmits<{
    (e: 'ready', control: mars3d.control.OverviewMap): void
}>()

let map: mars3d.Map
let control: mars3d.control.OverviewMap
const initComponent = () => {

    const config = filter(props)
    if (outSvgRef.value?.innerHTML) {
        config.outerSvg = outSvgRef.value?.innerHTML
    }

    if (innerSvgRef.value?.innerHTML) {
        config.innerSvg = innerSvgRef.value?.innerHTML
    }

    if (rotationArcSvgRef.value?.innerHTML) {
        config.rotationArcSvg = rotationArcSvgRef.value?.innerHTML
    }

    control = new mars3d.control.OverviewMap(config as OverviewProps)

    emits('ready', control)

    map = getMapInstance()
    map.addControl(control)
}

watch(() => props, (val) => {
    control.setOptions(filter(val))
}, { deep: true })

watch(() => props.show, (val) => {
    if (val) {
        map.addControl(control)
    } else {
        map.removeControl(control)
    }
})

onUnmounted(() => {
    control.destroy()
})

defineExpose({
    initComponent
})
</script>

<style scoped>

</style>
