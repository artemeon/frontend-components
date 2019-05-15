import Vue from 'vue'
import Card from './Card/Card.vue'

const Components = { Card }

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
export default Components
