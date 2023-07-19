import 'mars3d-cesium/Build/Cesium/Widgets/widgets.css' //依赖的cesium库本身css
import 'mars3d/dist/mars3d.css'

import VmViewer from './viewer'
import VmTdtLayer from './baseLayer/tdtILayer'
import VmGaodeLayer from './baseLayer/gaodeLayer'
import VmBaiduLayer from './baseLayer/baiduLayer'
import VmGeoVisEarthLayer from './baseLayer/geovisearthLayer'
import VmLocationBar from './control/locationBar'

const components = [VmViewer, VmTdtLayer, VmGaodeLayer, VmBaiduLayer, VmGeoVisEarthLayer, VmLocationBar]

const VmMars3d = {
    install: (app: any) => {
        for (const appElement of components) {
            app.use(appElement)
        }
    }
}

export {
    VmViewer,
    VmTdtLayer,
    VmGaodeLayer,
    VmBaiduLayer,
    VmGeoVisEarthLayer,
    VmLocationBar,
}

export default VmMars3d

