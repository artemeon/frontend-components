import Vue from 'vue'
import Card from './Card/Card.vue'
import Checkbox from './Form/Checkbox/Checkbox.vue'
import Radio from './Form/Radio/Radio.vue'
import TextArea from './Form/TextArea/TextArea.vue'
import TextField from './Form/TextField/TextField.vue'
import Select from './Form/Select/Select.vue'
import ASwitch from './ASwitch/ASwitch.vue'
import Button from './Button/Button.vue'
import Table from './Table/Table.vue'
import TableBody from './Table/TableBody/TableBody.vue'
import TableCell from './Table/TableCell/TableCell.vue'
import TableHead from './Table/TableHead/TableHead.vue'
import TableRow from './Table/TableRow/TableRow.vue'
// agp table components
import agpTable from '../agp-components/agp-table/agpTable/agpTable.vue'
import agpTc from '../agp-components/agp-table/agpTc/agpTc.vue'
import agpTr from '../agp-components/agp-table/agpTr/agpTr.vue'
import agpThead from '../agp-components/agp-table/agpThead/agpThead.vue'
// agp form elements
import agpCheckbox from '../agp-components/agp-form/agpCheckbox/agpCheckbox.vue'
import agpInput from '../agp-components/agp-form/agpInput/agpInput.vue'
import agpRadio from '../agp-components/agp-form/agpRadio/agpRadio.vue'
import agpSelect from '../agp-components/agp-form/agpSelect/agpSelect.vue'
import agpTextarea from '../agp-components/agp-form/agpTextarea/agpTextarea.vue'

const Components = {
  Card,
  Checkbox,
  Radio,
  TextArea,
  TextField,
  Select,
  ASwitch,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  agpTable,
  agpTc,
  agpTr,
  agpThead,
  agpCheckbox,
  agpInput,
  agpRadio,
  agpSelect,
  agpTextarea
}
// https://forum.vuejs.org/t/dynamically-import-components/33715
// const ComponentLibrary = {
//   install(Vue, options = {}) {
//     // components
//     for (const componentName in components) {
//       const component = components[componentName]

//       Vue.component(component.name, component)
//     }
//   }
// }
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
export default Components
