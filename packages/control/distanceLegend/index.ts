import VmDistanceLegend from './index.vue'
import type { App } from 'vue'

VmDistanceLegend.install = (app: App) => {
    app.component(VmDistanceLegend.name, VmDistanceLegend)
}

export default VmDistanceLegend
