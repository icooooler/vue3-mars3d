import VmGoogleLayer from './index.vue'
import type { App } from 'vue'

VmGoogleLayer.install = (app: App) => {
    app.component(VmGoogleLayer.name, VmGoogleLayer)
}

export default VmGoogleLayer
