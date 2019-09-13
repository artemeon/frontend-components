import { Component, Watch, Mixins } from 'vue-property-decorator'
import FormMixin from '@/agp-components/Mixins/FormMixins'

@Component
class agpInput extends Mixins(FormMixin) {
  inputVal = this.value

  @Watch('inputVal')
  onChange (value: any) {
    this.$emit('change', value)
  }
}
export default agpInput
