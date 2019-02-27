import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import to from 'await-to-js'
import { namespace } from 'vuex-class'
const toastr = require('toastr')
@Component
class ReportGeneratorList extends Vue {
  @(namespace('Loader').Action) StartLoader: any
  @(namespace('Loader').Action) StopLoader: any
  private reportList: object = {}
  private async mounted (): Promise<void> {
    this.StartLoader()
    axios.defaults.headers.common['Authorization'] = 'Basic '.concat(
      btoa(process.env.VUE_APP_USER + ':' + process.env.VUE_APP_PASSWORD)
    )
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=apiList'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      console.log(res)
      this.reportList = res.data
    }
    this.StopLoader()
  }
  // delete the selected report
  private async deleteReport (id: string) {
    // https://192.168.0.227/agp/index.php?admin=1&module=reportconfigurator&action=delete&systemid=c4ce7f75c7665cea0b9e&reloadUrl=/reportconfigurator/list/fe5a7f75c5475bb491fd&contentFill=1
    console.log('delete report', id)
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=delete&systemid=' +
          id +
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

export default ReportGeneratorList
