import { Component, Vue } from 'vue-property-decorator'
@Component
class ReportGeneratorShow extends Vue {
  private reportId!: string
  private mounted (): void {
    this.reportId = this.$route.params.id
    console.log('show report id : ', this.reportId)
  }
}
export default ReportGeneratorShow
