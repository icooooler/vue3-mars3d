import VmZoom from './index.vue'
import type { App } from 'vue'

VmZoom.install = (app: App) => {
    app.component(VmZoom.name, VmZoom)
}

export default VmZoom
