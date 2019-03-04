import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App/App.vue'
import DbBrowser from './components/DbBrowser/DbBrowser.vue'
import Login from './components/Login/Login.vue'
import ReportGeneratorList from './components/ReportGenerator/ReportGeneratorList/ReportGeneratorList.vue'
import ReportGeneratorEdit from './components/ReportGenerator/ReportGeneratorEdit/ReportGeneratorEdit.vue'
import ReportGeneratorNew from './components/ReportGenerator/ReportGeneratorNew/ReportGeneratorNew.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/dbbrowser',
      component: DbBrowser
    },
    {
      path: '/reportconfigurator/list',
      component: ReportGeneratorList
    },
    {
      path: '/reportconfigurator/edit/:id',
      component: ReportGeneratorEdit
    },
    {
      path: '/reportconfigurator/new',
      component: ReportGeneratorNew
    }
  ]
})
