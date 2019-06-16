<template>
  <div>
    <navbar title="商品详情" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div>
        <slider class="slider" interval="3000" auto-play="false" @change="changeHandler">
          <div class="slider-pages" v-for="(item, index) in commodityObj.cPicUrlList" :key="'banner_' + index">
            <image class="image" resize="cover" :src="item.cPicUrl"></image>
          </div>
        </slider>
        <div class="banner_indicator">
          <text style="color: #ffffff; font-size: 24px;">{{ currentBannerIndex }} / {{ bannerLength }}</text>
        </div>
      </div>
      <div style="margin-top: 10px;">
        <wxc-cell :has-arrow="false" :has-bottom-border="true" :cell-style="cellStyle">
          <div slot="label">
            <div style="flex-direction: row;">
              <text style="width: 660px;">{{commodityObj.cName}}</text>
            </div>
            <!--
            <div style="flex-direction:row; margin-top: 10px;">
              <text class="c_money" style="font-size:20px; padding-top:10px;">¥</text>
              <text class="c_money">{{commodityObj.cPrice}}</text>
            </div>
            -->
          </div>
          <div slot="value">
            <div @click="popupOverlayClicked" style="flex-direction: column;">
              <text class="iconfont" style="font-size: 42px;">&#xe6f3;</text>
              <text style="font-size: 22px;">分享</text>
            </div>
          </div>
        </wxc-cell>
      </div>
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="true" :cell-style="cellStyle">
          <div slot="label" style="flex-direction:row; justify-content: flex-start;">
            <text class="iconfont" style="color: red;">&#xe651;</text>
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
      <div>
        <wxc-cell v-for="(relationItem, index) in relationCommodityList" :key="'relation' + index" :has-arrow="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false" @wxcCellClicked="relationCommodityCellClicked(index)">
          <image slot="label" resize="cover" class="commodity_image" :src="relationItem.imgUrl"></image>
          <div slot="title">
            <div style="flex-direction: row; justify-content: space-between;">
              <text class="c_name">{{relationItem.name}}</text>
              <text style="font-size: 24px;">{{ relationItem.wayShop.shopDistance }}</text>
            </div>
            <div style="flex-direction: row; justify-content: space-between; margin-top: 64px; margin-left: 24px;">
              <text class="iconfont" style="font-size: 24px; color: #CCCCCC;">&#xe676; {{ relationItem.wayShop.shopName }}</text>
            </div>
          </div>
        </wxc-cell>
      </div>
    </scroller>

    <wxc-popup height="160" :show="isAutoShow" pos="bottom" @wxcPopupOverlayClicked="popupOverlayAutoClick">
      <div style="flex-direction: row; padding-left: 247px;">
        <div @click="weixinClicked('session')" style="width: 128px; height: 128px; margin-top: 24px;">
          <text class="iconfont" :style="weixinStyle">&#xe622;</text>
          <text style="font-size: 24px;">微信好友</text>
        </div>
        <div @click="weixinClicked('timeline')" style="width: 128px; height: 128px; margin-top: 24px;">
          <text class="iconfont" :style="{fontSize: '64px', paddingLeft: '24px'}">&#xe701;</text>
          <text style="font-size: 24px;">微信朋友圈</text>
        </div>
      </div>
    </wxc-popup>
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
  setStorageVal,
  titlebar
} from '../../tools/utils.js'
import { loadCateImageUrl } from '../../tools/image.js'
import { http } from '../../tools/http.js'
import navbar from '../../include/navbar.vue'
import { getWeixinShareWebpage, queryRelationCommodity } from '../../api/commodity.js'
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
const weixin = weex.requireModule('weixin')
const globalEvent = weex.requireModule('globalEvent')

export default {
  components: { WxcCell, WxcPopup, WxcDialog, WxcMask, navbar },
  data() {
    return {
      cellStyle: {},
      weixinStyle: {
        fontSize: '64px'
      },
      commodityObj: {
        id: 0,
        cName: '',
        cPrice: '',
        cPosition: '',
        shopId: 0,
        shopName: '',
        shopLogoUrl: '',
        cPicUrlList: []
      },
      currentBannerIndex: 1,
      bannerLength: 0,
      isAutoShow: false,
      relationCommodityList: []
    }
  },
  created() {
    initIconfont()
    titlebar('商品详情')
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    // this.scrollerStyle = { marginTop: screenHeight - pageHeight + 'px' }
    this.scrollerStyle = { height: pageHeight + 'px' }

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

    globalEvent.addEventListener('weixinCallback', function(data) {
      console.log('微信分享商品详情callback的结果', data)
      if (data) {
        if (data.errCode == '0') {
          modal.toast({
            message: '分享成功',
            duration: 1
          })
        }
      }
      _this.isAutoShow = false
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
          let bannerImgUrlList = []
          if (commodityDetail['imgUrl'] && commodityDetail['imgUrl'] !== '') {
            bannerImgUrlList.push({ cPicUrl: commodityDetail.imgUrl })
          }
          if (commodityDetail['imgUrl1'] && commodityDetail['imgUrl1'] !== '') {
            bannerImgUrlList.push({ cPicUrl: commodityDetail.imgUrl1 })
          }
          if (commodityDetail['imgUrl2'] && commodityDetail['imgUrl2'] !== '') {
            bannerImgUrlList.push({ cPicUrl: commodityDetail.imgUrl2 })
          }
          if (commodityDetail['imgUrl3'] && commodityDetail['imgUrl3'] !== '') {
            bannerImgUrlList.push({ cPicUrl: commodityDetail.imgUrl3 })
          }
          if (commodityDetail['imgUrl4'] && commodityDetail['imgUrl4'] !== '') {
            bannerImgUrlList.push({ cPicUrl: commodityDetail.imgUrl4 })
          }
          _this.commodityObj.shopId = commodityDetail.shopId
          _this.commodityObj.shopName = commodityDetail.shopName
          _this.commodityObj.shopLogoUrl = commodityDetail.shopLogoUrl

          console.log('商品图片集合', JSON.stringify(bannerImgUrlList))
          _this.commodityObj.cPicUrlList = _this.commodityObj.cPicUrlList.concat(bannerImgUrlList)
          _this.bannerLength = _this.commodityObj.cPicUrlList.length
          console.log('商品图片集合', _this.bannerLength)
          _this.requestQueryRelationCommodity()
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
    weixinClicked(shareType) {
      console.log('weixin clicked...')
      getWeixinShareWebpage({
        commodityId: this.commodityObj.id,
        shareType: shareType
      }).then(resp => {
        console.log('微信返回', resp)
        if (resp.code !== 200) {
          return
        }
        const weixinParams = resp.data
        console.log('微信分享商品详情，请求参数', weixinParams)
        weixin.shareWebpage(weixinParams)
      })
    },
    shopCellClicked() {
      setStorageVal('way:shop:id', this.commodityObj.shopId)
      navigator.push({
        url: getEntryUrl('views/shop/detail'),
        animated: 'true'
      })
    },
    requestQueryRelationCommodity() {
      getStorageVal('way:city').then(
        data => {
          console.log('way:city', data)
          const cityObj = JSON.parse(data)
          const clientLng = cityObj.lng
          const clientLat = cityObj.lat
          const commodityId = this.commodityObj.id
          queryRelationCommodity({ commodityId: commodityId, clientLng: clientLng, clientlat: clientLat }).then(response => {
            if (response.code !== 200) {
              return
            }
            this.relationCommodityList = response.data
          })
        },
        err => {
        }
      )
    },
    relationCommodityCellClicked(i) {
      const clickedCommodity = this.relationCommodityList[i]
      if (clickedCommodity) {
        console.log('跳转到商品详情页面', clickedCommodity.id)
        setStorageVal('way:commodity:id', clickedCommodity.id)
        navigator.push({
          url: getEntryUrl('views/commodity/detail'),
          animated: 'true'
        })
      }
    },
    changeHandler(e) {
      this.currentBannerIndex = e.index + 1
    }
  },
  destroyed() {
    globalEvent.removeEventListener('weixinCallback')
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
.commodity_image {
  width: 140px;
  height: 140px;
  margin-right: 10px;
  border-radius: 10px;
}
.slider {
  flex-direction: row;
  width: 750px;
  height: 500px;
}
.slider-pages {
  flex-direction: row;
  width: 750px;
  height: 500px;
}
.banner_indicator {
  flex-direction: row;
  justify-content: center;
  width: 80px;
  height: 34px;
  position: absolute;
  bottom: 18px;
  right:18px;
  background-color: black;
  opacity: .5;
  border-radius: 10px;
  padding-top: 4px;
}
</style>