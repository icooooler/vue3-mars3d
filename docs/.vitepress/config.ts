import { defineConfig } from 'vitepress'
import { vitePluginMars3d } from 'vite-plugin-mars3d'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Vue3-Mars3d',
    description: 'A Vue 3.x based component library of Mars3d.',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Mars3D官方文档',
                items: [
                    { text: '功能示例', link: 'http://mars3d.cn/example.html' },
                    { text: '参数文档', link: 'http://mars3d.cn/api/Map.html' },
                ]
            }
        ],

        sidebar:
            [
                {
                    text: '开发指南',
                    items: [
                        { text: '简介', link: '/guide/introduction' },
                        { text: '更新日志', link: '/guide/changelog' },
                        { text: '安装', link: '/guide/installation' },
                    ]
                },
                {
                    text: '创建三维视图',
                    items: [
                        { text: '快速开始', link: '/viewer/quick-start/' }
                    ]
                },
                {
                    text: '地图图层',
                    items: [
                        { text: '天地图', link: '/base-layer/tdt/' },
                        { text: '高德', link: '/base-layer/gaode/' },
                        { text: '百度', link: '/base-layer/baidu/' },
                        { text: '星图地球', link: '/base-layer/geovisearth/' },
                    ]
                },
                {
                    text: '地图控件',
                    items: [
                        { text: '下侧状态栏', link: '/control/location-bar/' }
                    ]
                }
            ]
        ,

        socialLinks: [
            { icon: 'github', link: 'https://github.com/icooooler/vue3-mars3d' }
        ]
    },
    vite: {
        // @ts-ignore
        plugins: [vitePluginMars3d({
            cesiumRunPath: '/Cesium/Build/Cesium',
            // cesiumRunPath: 'mars3d-cesium/Build/Cesium',
            // name: 'mars3d-cesium',
        })],
        rollupOptions: {
            external: ['vue', 'mars3d'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    mars3d: 'mars3d'
                }
            },
        }
    }
})
