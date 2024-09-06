import VmGeoVisEarthLayer from './index.vue'
import type { App } from 'vue'

VmGeoVisEarthLayer.install = (app: App) => {
    app.component(VmGeoVisEarthLayer.name, VmGeoVisEarthLayer)
}

export default VmGeoVisEarthLayer
