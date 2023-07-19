import VmViewer from './index.vue'
import type { App } from 'vue'

VmViewer.install = (app: App) => {
    app.component(VmViewer.name, VmViewer)
}

export default VmViewer
