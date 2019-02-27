import { Vue, Component } from 'vue-property-decorator'
import Navbar from '../Navbar/Navbar.vue'
import Loader from '../Loader/Loader.vue'
// import Cookies from 'js-cookie'
import Col from '../Grid/Col.vue'
import Row from '../Grid/Row'
import Container from '../Grid/Container'
import ContainerFluid from '../Grid/ContainerFluid'
import 'toastr/build/toastr.min.css'
@Component({
  components: { Navbar, Loader, Col, Row, Container, ContainerFluid }
  })
class App extends Vue {
  private mounted (): void {}
}

export default App
