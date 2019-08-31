import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import StandardMixin from '@/agp-components/Mixins/StandardMixin'

@Component
class agpTr extends Mixins(StandardMixin) {}
export default agpTr
