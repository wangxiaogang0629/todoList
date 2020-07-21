import IconFont from '@/components/iconFont/index.vue'
import Vue from 'vue'
const req = require('./svg', false, /.svg$/)
req.keys().map(req)

Vue.component('Icon', IconFont)
