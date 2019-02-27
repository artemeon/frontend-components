import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import axios from 'axios'
import to from 'await-to-js'
const toastr = require('toastr')
@Component
class ReportGeneratorEdit extends Vue {
  @(namespace('Loader').Action) StartLoader: any
  @(namespace('Loader').Action) StopLoader: any
  private reportId!: string
  private async mounted (): Promise<void> {
    // console.log(this.$route.params.id)
    this.reportId = this.$route.params.id
    axios.defaults.headers.common['Authorization'] = 'Basic '.concat(
      btoa(process.env.VUE_APP_USER + ':' + process.env.VUE_APP_PASSWORD)
    )
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=editApi&systemid=' +
          this.$route.params.id +
          '&contentFill=1'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      console.log(res)
    }
  }
}

export default ReportGeneratorEdit
