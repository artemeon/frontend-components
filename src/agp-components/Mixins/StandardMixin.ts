import { Component, Vue, Prop } from 'vue-property-decorator'
const defaultStyles = {}
@Component
class StandardMixin extends Vue {
  @Prop({ type: String, default: '' }) cssaddon!: String

  standardHandler () {}
}
export default StandardMixin
