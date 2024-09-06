<template>
    <vm-viewer :center="center">
        <vm-cesium-layer :asset-id="assetId" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmCesiumLayer } from '../../../packages'
import { reactive, ref } from 'vue'

const center = reactive({ lat: 25.229785, lng: 113.226084, alt: 3339440, heading: 0, pitch: -81 })

const assetId = ref(2)

</script>

<style scoped>

</style>
