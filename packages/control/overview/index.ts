import VmOverview from './index.vue'
import type { App } from 'vue'

VmOverview.install = (app: App) => {
    app.component(VmOverview.name, VmOverview)
}

export default VmOverview
