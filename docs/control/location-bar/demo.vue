<template>
    <vm-viewer :center="center">
        <vm-tdt-layer layer="img_d"/>
        <vm-tdt-layer layer="img_z"/>

        <vm-location-bar />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmTdtLayer, VmLocationBar } from '../../../packages'
import { reactive } from 'vue'

const center = reactive({
    lat: 31.667339,
    lng: 117.301893,
    alt: 40357,
    heading: 2,
    pitch: -68
})

</script>

<style scoped>

</style>
