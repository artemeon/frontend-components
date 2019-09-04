import { Component, Watch, Mixins } from 'vue-property-decorator'
import FormMixin from '@/agp-components/Mixins/FormMixins'

@Component
class agpInput extends Mixins(FormMixin) {
  inputVal = this.value

  @Watch('inputVal')
  onChange (val: any) {
    this.$emit('input', val)
  }
}
export default agpInput
