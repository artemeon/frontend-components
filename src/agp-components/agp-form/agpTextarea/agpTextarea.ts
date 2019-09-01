import { Component, Watch, Prop, Mixins } from 'vue-property-decorator'
import FormMixin from '@/agp-components/Mixins/FormMixins'

@Component
class agpTextarea extends Mixins(FormMixin) {
  @Prop({ type: Number, default: 1 }) numberOfRows!: number
  inputVal = this.value

  @Watch('inputVal')
  onChange (val: any) {
    this.$emit('input', val)
  }
}
export default agpTextarea
