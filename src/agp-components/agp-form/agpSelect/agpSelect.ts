import { Component, Watch, Prop, Mixins } from 'vue-property-decorator'
import FormMixin from '@/agp-components/Mixins/FormMixins'

@Component
class agpSelect extends Mixins(FormMixin) {
  @Prop() iconValues!: any
  selected = ''

  @Watch('selected')
  onChange (val: any) {
    this.$emit('input', val)
  }
}
export default agpSelect
