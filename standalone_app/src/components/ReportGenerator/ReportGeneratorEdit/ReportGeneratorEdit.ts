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
  private report: object = {}
  private title: string = ''
  private description: string = ''
  private async mounted (): Promise<void> {
    this.StartLoader()
    this.reportId = this.$route.params.id
    axios.defaults.headers.common['Authorization'] = 'Basic '.concat(
      btoa(process.env.VUE_APP_USER + ':' + process.env.VUE_APP_PASSWORD)
    )
    await this.fetchReport()
    this.StopLoader()
  }
  private async fetchReport (): Promise<void> {
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=fetchReportApi&systemid=' +
          this.reportId +
          '&contentFill=1'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      this.report = res.data
      this.title = res.data.strTitle
      this.description = res.data.strDescription
    }
  }
}

export default ReportGeneratorEdit
