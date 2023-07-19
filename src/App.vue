<template>
    <vm-viewer :center="center">
        <vm-geo-vis-earth-layer :url="urlImg"/>
        <vm-geo-vis-earth-layer :url="urlCia"/>

        <vm-location-bar :template="template" />
    </vm-viewer>
</template>

<script setup lang="ts">
import { VmViewer, VmGeoVisEarthLayer, VmLocationBar } from '../packages'
import { reactive, ref } from 'vue'

const center = reactive({
    lat: 31.675177,
    lng: 117.323257,
    alt: 81193,
    heading: 0,
    pitch: -79
})

const urlImg = ref('https://tiles{s}.geovisearth.com/base/v1/img/{z}/{x}/{y}?token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f')
const urlCia = ref('https://tiles{s}.geovisearth.com/base/v1/cia/{z}/{x}/{y}?token=82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f')

const template = ref(`<div>{lng}</div><div>{lat}</div>`)


</script>

<style scoped>

</style>
