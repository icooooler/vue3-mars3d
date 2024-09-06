import VmArcgisLayer from './index.vue'
import type { App } from 'vue'

VmArcgisLayer.install = (app: App) => {
    app.component(VmArcgisLayer.name, VmArcgisLayer)
}

export default VmArcgisLayer
