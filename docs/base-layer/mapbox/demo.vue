<template>
    <vm-viewer :center="center">
        <vm-mapbox-layer style-id="cki09kw472a8j19mvog00aoe0"  />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmMapboxLayer } from '../../../packages'
import { reactive } from 'vue'

const center = reactive({ lat: 20.349464, lng: 108.816138, alt: 7733636, heading: 358, pitch: -82 })


</script>

<style scoped>

</style>
