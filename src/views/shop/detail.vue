<template>
  <div>
    <navbar title="商家详情" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div style="flex-direction: column; align-items: center; justice-content: center; padding-top: 10px; padding-bottom: 10px;">
        <image class="image_shop" :src="shop.shopLogoUrl"></image>
        <text class="text_shop">{{shop.shopName}}</text>
      </div>
      <div style="margin-top: 10px;">
        <wxc-cell label="商家地址：" :title="shop.shopAddress" :has-arrow="false" :has-bottom-border="true">
        </wxc-cell>
        <wxc-cell label="商家电话：" :title="shop.shopTel" :has-arrow="false" :has-bottom-border="true">
        </wxc-cell>
        <wxc-cell label="营业时间：" :title="shop.shopBusinessTimeAll" :has-arrow="false" :has-bottom-border="true">
        </wxc-cell>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Utils, WxcCell } from 'weex-ui'
import navbar from '../../include/navbar.vue'
import {
  getEntryUrl,
  receiveMessage,
  initIconfont,
  getStorageVal,
  setPageTitle,
  titlebar
} from '../../tools/utils.js'
import { http } from '../../tools/http.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar },
  data: () => ({
    cellStyle: { height: '150px' },
    shop: {
      id: 0,
      shopAddress: '',
      shopName: '',
      shopLogoUrl: '',
      shopBusinessTimeAll: ''
    }
  }),
  beforeCreate() {
    initIconfont()
    titlebar('商家详情')
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.scrollerStyle = {
      height: pageHeight + 'px'
    }
  },
  created() {
    let _this = this
    getStorageVal('way:shop:id').then(
      data => {
        _this.shop.id = data

        http({
          method: 'POST',
          url: '/shop/detail',
          headers: {},
          body: {
            shopId: this.shop.id
          }
        }).then(
          function(data) {
            if (data.code != 200) {
              return
            }
            let shopDetail = data.data
            _this.shop.id = shopDetail.id
            _this.shop.shopName = shopDetail.shopName
            _this.shop.shopAddress = shopDetail.shopAddress
            _this.shop.shopTel = shopDetail.shopTel
            _this.shop.shopBusinessTimeAll =
              shopDetail.shopBusinessTime1 + ' ' + shopDetail.shopBusinessTime2
            _this.shop.shopLogoUrl = shopDetail.shopLogoUrl
          },
          function(error) {
            console.error('failure', error)
          }
        )
      },
      e => {
        navigator.pop()
        return
      }
    )
  },
  methods: {}
}
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
  font-size: 32px;
  font-style: normal;
}
.scroller {
  width: 750px;
}
.image {
  width: 750px;
  height: 500px;
}
.image_shop {
  width: 256px;
  height: 256px;
}
.text_shop {
  font-size: 64px;
  font-weight: bold;
}
</style>