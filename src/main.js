// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueI18n from 'vue-i18n'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import api from './assets/js/api.js'

import './assets/css/common.css'
import 'swiper/dist/css/swiper.css'

import FastClick from 'fastclick'

FastClick.attach(document.body);

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(VueAwesomeSwiper)

const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'zh-CN': require('./assets/lang/zh-CN'),   // 中文语言包
      'en': require('./assets/lang/en')    // 英文语言包
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
