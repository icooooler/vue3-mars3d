import VmTdtLayer from './index.vue'
import type { App } from 'vue'

VmTdtLayer.install = (app: App) => {
    app.component(VmTdtLayer.name, VmTdtLayer)
}

export default VmTdtLayer
