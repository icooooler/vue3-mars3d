<template>
    <vm-viewer :center="center">
        <vm-tdt-layer layer="img_d"/>
        <vm-compass/>
        <vm-zoom/>
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmTdtLayer, VmViewer, VmZoom, VmCompass } from '../packages'
import { reactive } from 'vue'

const center = reactive({ lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 })

const onChange = (e: any) => {
    console.log(e)
}

</script>

<style scoped>

</style>
