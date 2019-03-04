import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
class Alert extends Vue {
  @Prop(Array) messages!: Array<string>
  @Prop(String) title!: ''
}
export default Alert
