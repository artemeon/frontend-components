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
  TableRow
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
export default Components
