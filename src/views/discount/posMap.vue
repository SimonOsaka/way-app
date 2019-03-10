<template>
    <div class="wrapper">
      <navbar title="路线图" backgroundColor="#45b5f0" height="88"></navbar>
      <web :style="discountMapStyle" :src="discountMapUrl"></web>
    </div>
</template>

<style scoped>
.wrapper {
  flex-direction: column;
  padding: 10px;
}
</style>

<script>
import { setPageTitle, getStorageVal, titlebar } from '../../tools/utils.js'
import { Utils } from 'weex-ui'
import navbar from '../../include/navbar.vue'
import { http } from '../../tools/http.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { navbar },
  data: () => ({
    discountMapUrl: ''
  }),
  beforeCreate() {
    setPageTitle('用户服务协议')
  },
  methods: {
    getDiscountMapUrl() {
      getStorageVal('way:discount:mapUrl').then(
        data => {
          this.discountMapUrl = data
        },
        err => {
          navigator.pop({
            animated: 'true'
          })
        }
      )
    }
  },
  created() {
    console.log('pos map created')
    titlebar('路线图')
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.discountMapStyle = { width: '750px', height: pageHeight + 'px' }
    this.getDiscountMapUrl()
  }
}
</script>
