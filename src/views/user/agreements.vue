<template>
    <div class="wrapper">
      <navbar title="用户协议" backgroundColor="#45b5f0" height="88"></navbar>
      <web :style="agreementsStyle" :src="userAgreementsUrl"></web>
    </div>
</template>

<style scoped>
.wrapper {
  flex-direction: column;
  padding: 10px;
}
</style>

<script>
import { setPageTitle, titlebar } from '../../tools/utils.js'
import { Utils } from 'weex-ui'
import { http } from '../../tools/http.js'
import navbar from '../../include/navbar.vue'

export default {
  components: { navbar },
  data: () => ({
    userAgreementsUrl: ''
  }),
  beforeCreate() {
    setPageTitle('用户服务协议')
  },
  methods: {
    queryUserAgreementsUrl() {
      let _this = this
      http({
        method: 'POST',
        url: '/user/agreements',
        headers: {},
        body: {}
      }).then(
        function(data) {
          console.log('success', data)
          if (data.code != 200) {
            return
          }

          let result = data.data
          _this.userAgreementsUrl = result.userAgreementsUrl
        },
        function(error) {
          console.error('failure', error)
        }
      )
    }
  },
  created() {
    titlebar('用户协议')
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.agreementsStyle = { width: '750px', height: pageHeight + 'px' }
    this.queryUserAgreementsUrl()
  }
}
</script>