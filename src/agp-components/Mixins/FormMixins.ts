import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class FormMixin extends Vue {
  @Prop({ type: String, default: '' }) label!: string
  @Prop({ type: String, default: '' }) id!: string
  @Prop({ type: String, default: '' }) name!: string
  @Prop({ type: String, default: '' }) cssClass!: string
  @Prop({ type: Boolean, default: false }) readonly!: boolean
  @Prop({ type: Boolean, default: false }) disabled!: boolean
  @Prop({ type: Boolean, default: false }) mandatory!: boolean
  @Prop() value!: any
  @Prop() values!: any
  formHandler () {}
}
export default FormMixin
