import VmLocationBar from './index.vue'
import type { App } from 'vue'

VmLocationBar.install = (app: App) => {
    app.component(VmLocationBar.name, VmLocationBar)
}

export default VmLocationBar
