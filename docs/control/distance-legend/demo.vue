<template>
    <vm-viewer :center="center">
        <vm-tdt-layer layer="img_d"/>
        <vm-distance-legend  @ready="onReady" @change="onChange" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmDistanceLegend, VmTdtLayer, VmViewer } from '../../../packages'
import type {control} from 'mars3d'
import { reactive } from 'vue'

const center = reactive({ lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 })

const onReady = (distanceLegend: control.DistanceLegend) => {
    console.log(distanceLegend)
}

const onChange = (e: Event) => {
    console.log(e)
}

</script>

<style scoped>

</style>
