<template>
    <vm-viewer :center="center">
        <vm-gaode-layer :layer="vecZConfig.layer"/>
        <vm-gaode-layer layer="img_z"/>
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmGaodeLayer } from '../../../packages'
import { reactive } from 'vue'

const center = reactive({
    lat: 31.675177,
    lng: 117.323257,
    alt: 81193,
    heading: 0,
    pitch: -79
})

const vecZConfig = reactive({
    layer: 'vec'
})

</script>

<style scoped>

</style>
