<template>
    <div style="display: none;">
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

const mapKey = inject<symbol>('mapKey')

const { getMapInstance, registerComponents } = useMap(mapKey as symbol)

interface CompassProps {
    show?: boolean;
    rotation?: boolean;
    className?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    outerSvg?: string;
    innerSvg?: string;
    rotationArcSvg?: string;
    id?: string | number;
    enabled?: boolean;
    parentContainer?: HTMLElement;
    insertIndex?: number;
    insertBefore?: HTMLElement;
}

const props = withDefaults(defineProps<CompassProps>(), {
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
    (e: 'ready', control: mars3d.control.Compass): void
}>()

let map: mars3d.Map
let compass: mars3d.control.Compass
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

    compass = new mars3d.control.Compass(config as CompassProps)

    emits('ready', compass)

    map = getMapInstance()
    map.addControl(compass)
}

watch(() => props, (val) => {
    compass.setOptions(filter(val))
}, { deep: true })

watch(() => props.show, (val) => {
    if (val) {
        map.addControl(compass)
    } else {
        map.removeControl(compass)
    }
})

onUnmounted(() => {
    compass.destroy()
})

defineExpose({
    initComponent
})
</script>

<style scoped>

</style>
