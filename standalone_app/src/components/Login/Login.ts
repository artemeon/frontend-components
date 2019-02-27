import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
@Component
class Login extends Vue {
  private userName: string = ''
  private password: string = ''

  private async handleLogin (e: any): void {
    e.preventDefault()
    console.log('login : ', this.userName, ' password : ', this.password)
  }
}

export default Login
