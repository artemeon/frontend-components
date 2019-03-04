import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import axios from 'axios'
import to from 'await-to-js'
import Col from '../../Grid/Col'
import Row from '../../Grid/Row'
import Alert from '../../Alert/Alert'
const toastr = require('toastr')

@Component({ components: { Row, Col, Alert } })
class ReportGeneratorNew extends Vue {
  @(namespace('Loader').Action) StartLoader: any
  @(namespace('Loader').Action) StopLoader: any
  private reportablesList: Array<object> = []
  private title: string = ''
  private description: string = ''
  private availableForPublic: number = 1
  private bitEditObjects: number = 0
  private reportable: string = ''
  private showAlert: boolean = false
  private alertMessages: Array<string> = []
  private async mounted (): Promise<void> {
    axios.defaults.headers.common['Authorization'] = 'Basic '.concat(
      btoa(process.env.VUE_APP_USER + ':' + process.env.VUE_APP_PASSWORD)
    )
    this.StartLoader()
    await this.fetchReportables()
    this.StopLoader()
  }

  private async fetchReportables (): Promise<void> {
    const [err, res]: any = await to(
      axios.get(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=fetchReportablesApi'
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      this.reportablesList = res.data
    }
  }

  private async submitForm (e: any): Promise<void> {
    e.preventDefault()
    this.showAlert = false
    if (this.title === '' && this.reportable !== '') {
      this.alertMessages = ['"Titel" ist leer']
      this.showAlert = true
      return
    }
    if (this.title !== '' && this.reportable === '') {
      this.alertMessages = ['"Auszuwertende Objektart" ist leer']
      this.showAlert = true
      return
    }
    if (this.title === '' && this.reportable === '') {
      this.alertMessages = [
        '"Titel" ist leer',
        '"Auszuwertende Objektart" ist leer'
      ]
      this.showAlert = true
      return
    }
    this.StartLoader()
    const [err, res] = await to(
      axios.post(
        process.env.VUE_APP_BASE_URL +
          '/xml.php?admin=1&module=reportconfigurator&action=createNewReportApi',
        {
          intPublic: this.availableForPublic,
          strDescription: this.description,
          strTitle: this.title,
          bitEditObjects: this.bitEditObjects,
          strTargetobject: this.reportable
        }
      )
    )
    if (err) {
      toastr.error('Fehler')
    }
    if (res) {
      if (res.data === 'saved') {
        toastr.success('Gespeichert')
        this.$router.push('/reportconfigurator/list')
      }
    }
    this.StopLoader()
  }
}

export default ReportGeneratorNew
