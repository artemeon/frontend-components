import { Component, Watch, Prop, Mixins } from 'vue-property-decorator'
import FormMixin from '@/agp-components/Mixins/FormMixins'

@Component
class agpRadio extends Mixins(FormMixin) {
  inputVal = this.value

  @Watch('inputVal')
  onChange (val: any) {
    this.$emit('input', val)
  }
}
export default agpRadio
