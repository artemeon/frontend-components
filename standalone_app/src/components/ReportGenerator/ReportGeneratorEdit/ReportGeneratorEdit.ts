import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import axios from 'axios'
import to from 'await-to-js'
import Col from '../../Grid/Col'
import Row from '../../Grid/Row'
import { Report } from '../Interfaces'
const toastr = require('toastr')
@Component({ components: { Col, Row } })
class ReportGeneratorEdit extends Vue {
  @(namespace('Loader').Action) StartLoader: any
  @(namespace('Loader').Action) StopLoader: any
  private reportId!: string
  private report: Report = {} as Report
  private title: string = ''
  private description: string = ''
  private availableForPublic: number = 0
  private bitEditObjects: number = 0
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
      this.availableForPublic = res.data.intPublic
      this.bitEditObjects = this.getBitEditObjectsValue()
    }
  }
  private getBitEditObjectsValue (): number {
    if (this.report.bitEditObjects === true) {
      return 1
    }
    return 0
  }
  private checkIfObjectsEditable (): boolean {
    if (this.report.bitEditObjects === 1) {
      return true
    }
    return false
  }
  private checkIfPublic (): boolean {
    if (this.report.intPublic === 1) {
      return true
    }
    return false
  }

  private async submitForm (e: any): Promise<void> {
    e.preventDefault()
    const [err, res]: any = await to(
      axios({
        method: 'POST',
        url:
          process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=saveApi&systemid=' +
          this.reportId,
        data: {
          intPublic: this.availableForPublic,
          strDescription: this.description,
          strTitle: this.title,
          bitEditObjects: this.bitEditObjects
        }
      })
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      if (res.data === 'updated') {
        toastr.success('Gespeichert')
        this.$router.push('/reportconfigurator/list')
      }
    }
  }
}

export default ReportGeneratorEdit
