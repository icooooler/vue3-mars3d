<template>
    <vm-viewer>
        <vm-tdt-layer :layer="imgDConfig.layer" :show="imgDConfig.show" />
        <vm-tdt-layer :layer="vecZConfig.layer" :show="imgDConfig.show" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmTdtLayer } from '../../../packages'
import { reactive } from 'vue'

const imgDConfig = reactive({
    layer: 'img_d',
    show: true
})

const vecZConfig = reactive({
    layer: 'img_d',
    show: true
})

</script>

<style scoped>

</style>
