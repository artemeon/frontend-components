import Vue from 'vue'
import Card from './Card/Card.vue'
import Checkbox from './Form/Checkbox/Checkbox.vue'
import Radio from './Form/Radio/Radio.vue'
import TextArea from './Form/TextArea/TextArea.vue'
import TextField from './Form/TextField/TextField.vue'
import Select from './Form/Select/Select.vue'
const Components = { Card, Checkbox, Radio, TextArea, TextField, Select }

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
export default Components
