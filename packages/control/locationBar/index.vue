<template>

</template>

<script setup lang="ts">
import * as mars3d from 'mars3d'
import { useMap } from '../../composables/useMap'
import { getCurrentInstance, inject, onMounted, onUnmounted, watch } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import type { CRS } from 'mars3d'
import { filter } from '../../utils/propsUtil'

const mapKey = inject<symbol>('mapKey')

const { getMapInstance, registerComponents } = useMap(mapKey as symbol)

interface LocationBarProps {
    show?: boolean
    template?: string | string[]
    latDecimal?: number
    crs?: string | CRS | boolean
    crsDecimal?: number
    style?: {
        top?: string
        bottom?: string
        left?: string
        right?: string
    }
    fps?: boolean
    cacheTime?: number
    id?: string | number
    enabled?: boolean
    parentContainer?: HTMLElement
    insertIndex?: number
    insertBefore?: HTMLElement
}

const props = withDefaults(defineProps<LocationBarProps>(), {
    show: true,
    enabled: true
})


onMounted(() => {
    registerComponents(getCurrentInstance() as ComponentInternalInstance)
})

let map: mars3d.Map
let locationBar: mars3d.control.LocationBar
const initComponent = () => {

    locationBar = new mars3d.control.LocationBar(filter(props))

    map = getMapInstance()
    map.addControl(locationBar)

    console.log(map.container)
}

watch(() => props, (val) => {
    locationBar.setOptions(filter(val))
}, {deep: true})

watch(() => props.show, (val) => {
    if (!val) {
        locationBar.destroy()
    }
})

onUnmounted(() => {
    locationBar.destroy()
})

defineExpose({
    initComponent
})
</script>

<style scoped>

</style>
