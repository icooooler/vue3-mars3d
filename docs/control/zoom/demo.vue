<template>
    <vm-viewer :center="center">
        <vm-tdt-layer layer="img_d"/>
        <vm-location-bar/>
        <vm-zoom/>
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmTdtLayer, VmViewer, VmLocationBar, VmZoom } from '../../../packages'
import { reactive } from 'vue'

const center = reactive({ lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 })

</script>

<style scoped>

</style>
