<template>
    <vm-viewer :center="center">
        <vm-google-layer layer="vec" />
        <vm-google-layer layer="img_z" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmGoogleLayer } from '../../../packages'
import { reactive, ref } from 'vue'

const center = reactive({ lat: 31.675177, lng: 117.323257, alt: 81193, heading: 0, pitch: -79 })

</script>

<style scoped>

</style>
