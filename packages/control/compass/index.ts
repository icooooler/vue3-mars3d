import VmCompass from './index.vue'
import type { App } from 'vue'

VmCompass.install = (app: App) => {
    app.component(VmCompass.name, VmCompass)
}

export default VmCompass
