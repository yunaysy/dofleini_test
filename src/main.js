import Vue from 'vue'
import { Row, Col, Form, Input, Radio, Button, Icon, Upload, Space } from 'ant-design-vue'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Upload)
Vue.use(Space)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
