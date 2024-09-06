<template>

</template>

<script setup lang="ts">
import * as mars3d from 'mars3d'
import { useMap } from '../../composables/useMap'
import { getCurrentInstance, inject, onMounted, onUnmounted, watch } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import { filter } from '../../utils/propsUtil'

const mapKey = inject<symbol>('mapKey')

const { getMapInstance, registerComponents } = useMap(mapKey as symbol)

interface DistanceLegendProps {
    show?: boolean
    top?: string
    bottom?: string
    left?: string
    right?: string
    id?: string | number
    enabled?: boolean
    parentContainer?: HTMLElement
    insertIndex?: number
    insertBefore?: HTMLElement
}

const props = withDefaults(defineProps<DistanceLegendProps>(), {
    show: true,
    enabled: true
})

onMounted(() => {
    registerComponents(getCurrentInstance() as ComponentInternalInstance)
})

const emits = defineEmits<{
    (e: 'change', event: Event): void
    (e: 'ready', control: mars3d.control.DistanceLegend): void
}>()

let map: mars3d.Map
let control: mars3d.control.DistanceLegend
const initComponent = () => {

    control = new mars3d.control.DistanceLegend(filter(props) as DistanceLegendProps)

    control.on(mars3d.EventType.change, (event) => {
        emits('change', event)
    })

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
