<template>
    <vm-viewer :center="center">
        <vm-arcgis-layer url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmArcgisLayer } from '../../../packages'
import { reactive } from 'vue'

const center = reactive({ lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 })

</script>

<style scoped>

</style>
