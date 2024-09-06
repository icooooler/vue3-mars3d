import VmBingLayer from './index.vue'
import type { App } from 'vue'

VmBingLayer.install = (app: App) => {
    app.component(VmBingLayer.name, VmBingLayer)
}

export default VmBingLayer
