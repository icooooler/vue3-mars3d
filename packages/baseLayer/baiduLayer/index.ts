import VmBaiduLayer from './index.vue'
import type { App } from 'vue'

VmBaiduLayer.install = (app: App) => {
    app.component(VmBaiduLayer.name, VmBaiduLayer)
}

export default VmBaiduLayer
