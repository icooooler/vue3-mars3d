import VmMapboxLayer from './index.vue'
import type { App } from 'vue'

VmMapboxLayer.install = (app: App) => {
    app.component(VmMapboxLayer.name, VmMapboxLayer)
}

export default VmMapboxLayer
