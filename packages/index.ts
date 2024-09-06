import 'mars3d-cesium/Build/Cesium/Widgets/widgets.css' //依赖的cesium库本身css
import 'mars3d/dist/mars3d.css'

import VmViewer from './viewer'
import VmTdtLayer from './baseLayer/tdtILayer'
import VmGaodeLayer from './baseLayer/gaodeLayer'
import VmBaiduLayer from './baseLayer/baiduLayer'
import VmGeoVisEarthLayer from './baseLayer/geovisearthLayer'
import VmBingLayer from './baseLayer/bingLayer'
import VmMapboxLayer from './baseLayer/mapbox'
import VmCesiumLayer from './baseLayer/cesium'
import VmArcgisLayer from './baseLayer/arcgis'
import VmGoogleLayer from './baseLayer/google'
import VmLocationBar from './control/locationBar'
import VmCompass from './control/compass'
import VmDistanceLegend from './control/distanceLegend'
import VmZoom from './control/zoom'
import VmOverview from './control/overview'

const components = [
    VmViewer,
    VmTdtLayer,
    VmGaodeLayer,
    VmBaiduLayer,
    VmGeoVisEarthLayer,
    VmLocationBar,
    VmBingLayer,
    VmMapboxLayer,
    VmCesiumLayer,
    VmArcgisLayer,
    VmGoogleLayer,
    VmCompass,
    VmDistanceLegend,
    VmZoom,
    VmOverview,
]

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
    VmBingLayer,
    VmMapboxLayer,
    VmCesiumLayer,
    VmArcgisLayer,
    VmGoogleLayer,
    VmCompass,
    VmDistanceLegend,
    VmZoom,
    VmOverview,
}

export default VmMars3d

