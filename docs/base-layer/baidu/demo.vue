<template>
    <vm-viewer :center="center">
        <vm-baidu-layer :layer="vecZConfig.layer"/>
        <vm-baidu-layer layer="img_z"/>
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmBaiduLayer } from '../../../packages'
import { reactive } from 'vue'

const center = reactive({
    lat: 31.667339,
    lng: 117.301893,
    alt: 40357,
    heading: 2,
    pitch: -68
})

const vecZConfig = reactive({
    layer: 'vec'
})

</script>

<style scoped>

</style>
