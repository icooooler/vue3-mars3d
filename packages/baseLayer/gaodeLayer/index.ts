import VmGaodeLayer from './index.vue'
import type { App } from 'vue'

VmGaodeLayer.install = (app: App) => {
    app.component(VmGaodeLayer.name, VmGaodeLayer)
}

export default VmGaodeLayer
