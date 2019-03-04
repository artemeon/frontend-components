import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import to from 'await-to-js'
import { namespace } from 'vuex-class'
import { ReportList } from '../Interfaces'
const toastr = require('toastr')
@Component
class ReportGeneratorList extends Vue {
  @(namespace('Loader').Action) StartLoader: any
  @(namespace('Loader').Action) StopLoader: any
  private reportList: ReportList = {} as ReportList
  private async mounted (): Promise<void> {
    axios.defaults.headers.common['Authorization'] = 'Basic '.concat(
      btoa(process.env.VUE_APP_USER + ':' + process.env.VUE_APP_PASSWORD)
    )
    this.StartLoader()
    await this.fetchList()
    this.StopLoader()
  }
  // fetch the report list from Api
  private async fetchList (): Promise<void> {
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=listApi'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      console.log(res)
      this.reportList = res.data
    }
  }
  // delete the selected report
  private async deleteReport (id: string): Promise<void> {
    this.StartLoader()
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=deleteApi&systemid=' +
          id +
          '&contentFill=1'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      if (res.data === 'deleted') {
        await this.fetchList()
      }
    }
    this.StopLoader()
  }
  // duplicate report
  private async duplicateReport (id: string): Promise<void> {
    this.StartLoader()
    const [err, res] = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=copyObjectApi&systemid=' +
          id +
          '&contentFill=1'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      console.log(res)
      if (res.data === 'copied') {
        await this.fetchList()
      }
    }
    this.StopLoader()
  }
}

export default ReportGeneratorList
