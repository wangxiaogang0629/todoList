import Vue from 'vue'

Vue.component('Footer', {
  data() {
    return {
      webInfo: {
        text: 'Design by BeyondLove (2020)'
      }
    }
  },
  template: `
    <div>{{webInfo.text}}</div>
  `
})