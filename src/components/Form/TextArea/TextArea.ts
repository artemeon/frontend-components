import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
class TextArea extends Vue {
  @Prop() label!: string
  @Prop() id!: string
  @Prop() placeholder!: string
  @Prop() readonly!: boolean
  @Prop() disabled!: boolean
  @Prop() mandatory!: boolean
  @Prop() value!: any
  private inputText = null
  created () {
    this.inputText = this.value
  }
  updateVal () {
    this.$emit('input', this.inputText)
  }
}

export default TextArea
