<template>
    <vm-viewer :center="center">
        <vm-bing-layer :layer="layer" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmBingLayer } from '../../../packages'
import { reactive, ref } from 'vue'
import { Cesium } from 'mars3d'

const center = reactive({ lat: 20.349464, lng: 108.816138, alt: 7733636, heading: 358, pitch: -82 })

const layer = ref(Cesium.BingMapsStyle.AERIAL_WITH_LABELS)

</script>

<style scoped>

</style>
