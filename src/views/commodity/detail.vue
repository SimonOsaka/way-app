<template>
  <div>
    <navbar title="商品详情" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div>
        <image class="image" resize="cover" :src="commodityObj.cPicUrl"></image>
      </div>
      <div style="margin-top: 10px;">
        <wxc-cell :has-arrow="false" :has-bottom-border="true" :cell-style="cellStyle">
          <div slot="label">
            <div style="flex-direction: row;">
              <text style="width: 600px;">{{commodityObj.cName}}</text>
            </div>
            <!--
            <div style="flex-direction:row; margin-top: 10px;">
              <text class="c_money" style="font-size:20px; padding-top:10px;">¥</text>
              <text class="c_money">{{commodityObj.cPrice}}</text>
            </div>
            -->
          </div>
          <div slot="value" style="flex-direction: row; width: 110px;">
            <div @click="popupOverlayClicked">
              <text class="iconfont">&#xe6f3; 分享</text>
              <text></text>
            </div>
          </div>
        </wxc-cell>
      </div>
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="true" :cell-style="cellStyle">
          <div slot="label" style="flex-direction:row;">
            <text class="iconfont" style="margin-top:6px; color: red;">&#xe651;</text>
            <text style="width: 700px;">{{commodityObj.cPosition}}</text>
          </div>
        </wxc-cell>
      </div>
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="true" @wxcCellClicked="shopCellClicked">
          <image slot="label" resize="cover" style="width: 64px; height: 64px;" :src="commodityObj.shopLogoUrl"></image>
          <text slot="title" style="margin-left: 10px;">{{commodityObj.shopName}}</text>
        </wxc-cell>
      </div>
    </scroller>

    <wxc-popup height="160" :show="isAutoShow" pos="bottom" @wxcPopupOverlayClicked="popupOverlayAutoClick">
      <div @click="weixinClicked" style="width: 128px; height: 128px; margin-left: 311px; margin-top: 24px;">
        <text class="iconfont" :style="weixinIconStyle">&#xe622;</text>
        <text style="margin-left: 10px;">微信</text>
      </div>
    </wxc-popup>

    <wxc-dialog title="功能开发中" content="敬请期待" :show="show" :single="true" @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked"></wxc-dialog>

  </div>
</template>

<script>
import { Utils, WxcCell, WxcPopup, WxcDialog, WxcMask } from 'weex-ui'
import {
  getEntryUrl,
  receiveMessage,
  postMessage,
  setStorageValue,
  getStorageValue,
  initIconfont,
  getStorageVal,
  setPageTitle,
  setOgImage,
  getUrlKey,
setStorageVal
} from '../../tools/utils.js'
import { loadCateImageUrl } from '../../tools/image.js'
import { http } from '../../tools/http.js'
import navbar from "../../include/navbar.vue"
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
const safari = weex.requireModule('safari')

export default {
  components: { WxcCell, WxcPopup, WxcDialog, WxcMask, navbar },
  data: () => ({
    cellStyle: {},
    weixinIconStyle: {
      fontSize: '64px'
    },
    commodityObj: {
      id: 0,
      cPicUrl: '',
      cName: '',
      cPrice: '',
      cPosition: '',
      shopId: 0,
      shopName: '',
      shopLogoUrl: ''
    },
    isAutoShow: false,
    show: false
  }),
  created() {
    initIconfont()
    const pageHeight = Utils.env.getPageHeight();
    const screenHeight = Utils.env.getScreenHeight();
    this.scrollerStyle = { marginTop: screenHeight - pageHeight + 'px' }

    let _this = this
    // _this.commodityObj.id = getUrlKey('cid')
    getStorageVal('way:commodity:id').then(data => {
      console.log('商品详情id接收', data)
      _this.commodityObj.id = data
      if (!_this.commodityObj.id) {
        console.log('商品详情id没有', data)
        navigator.pop()
        return
      }

      this.getCommodityData()
    })

    console.log('商品详情id', _this.commodityObj.id)
  },
  methods: {
    getCommodityData() {
      let _this = this
      http({
          method: 'POST',
          url: '/commodity/detail',
          headers: {},
          body: {
            commodityId: this.commodityObj.id
          }
        }).then(
          function(data) {
            console.log('success', data)
            if (data.code != 200) {
              _this.dialogContent = data.msg
              _this.dialogShow = true
            }
            let commodityDetail = data.data
            _this.commodityObj.id = commodityDetail.id
            _this.commodityObj.cName = commodityDetail.name
            // _this.commodityObj.cPrice = commodityDetail.price
            _this.commodityObj.cPosition = commodityDetail.shopAddress
            _this.commodityObj.cPicUrl = commodityDetail.imgUrl
            _this.commodityObj.shopId = commodityDetail.shopId
            _this.commodityObj.shopName = commodityDetail.shopName
            _this.commodityObj.shopLogoUrl = commodityDetail.shopLogoUrl

            setPageTitle(commodityDetail.name)
            setOgImage(_this.commodityObj.cPicUrl)
          },
          function(error) {
            console.error('failure', error)
          }
        )
    },
    popupOverlayAutoClick() {
      this.isAutoShow = false
    },
    popupOverlayClicked() {
      this.isAutoShow = true
    },
    weixinClicked() {
      console.log('weixin clicked...')
      // this.show = true
      safari.openSafariUrl('http://h5.jicu.vip/views/commodity/detail.html?cid=' + this.commodityObj.id)
    },
    wxcDialogConfirmBtnClicked() {
      this.show = false
    },
    shopCellClicked() {
      setStorageVal('way:shop:id', this.commodityObj.shopId)
      navigator.push({
        url: getEntryUrl('views/shop/detail'),
        animated: 'true'
      })
    }
  }
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
.c_name {
  padding-left: 20px;
}
.c_money {
  color: red;
}
.c_real {
  font-size: 24px;
}
</style>