import VmCesiumLayer from './index.vue'
import type { App } from 'vue'

VmCesiumLayer.install = (app: App) => {
    app.component(VmCesiumLayer.name, VmCesiumLayer)
}

export default VmCesiumLayer
