// 加载高德地图
import Vue from 'vue'

import VueAMap from 'vue-amap'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '5e9550f484aaf3b12e8338d1fbbc4f23',
  // 插件引入
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
