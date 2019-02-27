import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
@Component
class Loader extends Vue {
  @(namespace('Loader').State) loading!: boolean
}

export default Loader
