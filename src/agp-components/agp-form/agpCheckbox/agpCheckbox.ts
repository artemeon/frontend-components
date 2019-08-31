import { Component, Watch, Prop, Mixins } from 'vue-property-decorator'
import FormMixin from '@/agp-components/Mixins/FormMixins'

@Component
class agpCheckbox extends Mixins(FormMixin) {
  @Prop({ type: Boolean, default: false }) checked!: Boolean
  @Prop({ type: Boolean, default: false }) opener!: Boolean
  inputVal = this.checked

  @Watch('inputVal')
  onChange (val: any) {
    this.$emit('input', val)
  }
}
export default agpCheckbox
