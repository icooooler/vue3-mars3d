import type { ComponentInternalInstance } from 'vue'
import type { Map as MapInstance } from 'mars3d'

interface MapComponents {
    [key: symbol]: ComponentInternalInstance[]
}

const mapInstance: Map<symbol, MapInstance> = new Map()
const mapComponents: MapComponents = {}

export const useMap = (mapKey: symbol) => {

    // 存储地图实例
    const setMapInstance = (map: MapInstance) => {
        mapInstance.set(mapKey, map)
    }

    // 获取地图实例
    const getMapInstance = () => {
        return mapInstance.get(mapKey) as MapInstance
    }

    // 销毁地图实例
    const destroyMapInstance = () => {
        mapInstance.delete(mapKey)
    }

    // 存储需要注册的组件
    const setComponent = (componentInstance: ComponentInternalInstance) => {
        const components = mapComponents[mapKey]
        mapComponents[mapKey] = Array.isArray(components) ? [...components, componentInstance] : [componentInstance]
    }

    // 注册所有组件
    const registerComponents = (componentInstance: ComponentInternalInstance) => {
        // 存储组件
        setComponent(componentInstance)

        // 判断地图是否已经实例化
        if (mapInstance.has(mapKey)) {
            register()
            return
        }
    }

    // 注册组件
    const register = () => {
        const componentInstances = mapComponents[mapKey]

        while (componentInstances.length) {
            const { proxy } = componentInstances.shift() as ComponentInternalInstance

            // 初始化渲染组件
            if (proxy?.$?.exposed?.initComponent) {
                proxy?.$.exposed?.initComponent()
            }
        }
    }

    return {
        getMapInstance,
        setMapInstance,
        destroyMapInstance,
        registerComponents,
        register,
    }
}
