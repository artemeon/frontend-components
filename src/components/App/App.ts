import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import agpTable from '@/agp-components/agp-table/agpTable/agpTable.vue'
import agpInput from '@/agp-components/agp-form/agpInput/agpInput'
@Component({ components: { agpTable, agpInput } })
class App extends Vue {
  mounted () {
    console.log('this')
  }
  update (e: any) {
    console.log(e)
  }
}
export default App
