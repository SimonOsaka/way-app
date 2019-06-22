<template>
  <div>
    <navbar title="商品详情" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="false">
          <image slot="label" resize="cover" style="width: 64px; height: 64px;" :src="commodityObj.shopLogoUrl" @click="shopCellClicked"></image>
          <text slot="title" style="margin-left: 10px;" @click="shopCellClicked">{{commodityObj.shopName}}</text>
          <wxc-button slot="value" :type="follow.btnType" size="small" :text="follow.btnText" @wxcButtonClicked="btnFollowClicked"></wxc-button>
        </wxc-cell>
      </div>
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="false" :cell-style="cellStyle">
          <div slot="title" style="width: 680px; flex-direction: row; flex-wrap: wrap; padding: 10px;">
            <text>{{commodityObj.cName}}</text>
          </div>
        </wxc-cell>
      </div>
      <!-- 图片 -->
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="false" :cell-style="cellStyle">
          <div slot="title" class="flex_column_center">
            <div style="width: 680px; flex-direction: row; flex-wrap: wrap; padding: 10px;">
              <image v-for="(item, index) in commodityObj.cPicUrlList" @click="commodityImgClicked(index)" resize="cover" style="width: 200px; height: 200px; margin: 10px;" :src="item.cPicUrl" :key="'pic_list_' + index"></image>
            </div>
          </div>
        </wxc-cell>
      </div>
      <!-- 地址 -->
      <div>
        <wxc-cell :has-arrow="false" :has-bottom-border="false" :cell-style="cellStyle">
          <div slot="title" class="address">
            <text class="iconfont address_icon">&#xe651;</text>
            <text class="address_text">{{ commodityObj.cPosition }}</text>
          </div>
        </wxc-cell>
      </div>
      <div>
        <wxc-cell :has-arrow="false" :has-top-border="true" :has-bottom-border="true">
          <div slot="value">
            <div @click="popupOverlayClicked" style="flex-direction: row; flex-align: end;">
              <text class="iconfont" style="font-size: 42px;">&#xe6f3;</text>
            </div>
          </div>
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

    <wxc-lightbox
      ref="wxc-lightbox"
      :height="lightBox.height"
      :show="lightBox.show"
      :index="lightBox.index"
      :image-list="lightBox.imageList"
      :opacity="1"
      :indicator-color="{'item-color': '#cccccc','item-selected-color': '#ffffff','item-size': '20px'}"
      @wxcLightboxOverlayClicked="wxcLightboxOverlayClicked">
    </wxc-lightbox>
  </div>
</template>

<script>
import { Utils, WxcCell, WxcPopup, WxcDialog, WxcMask, WxcButton, WxcLightbox } from 'weex-ui'
import {
  getEntryUrl,
  initIconfont,
  getStorageVal,
  setStorageVal,
  titlebar
} from '../../tools/utils.js'
import { loadCateImageUrl } from '../../tools/image.js'
import { http } from '../../tools/http.js'
import navbar from '../../include/navbar.vue'
import { getCommodityDetail, getWeixinShareWebpage, queryRelationCommodity } from '../../api/commodity.js'
import { shopFollow, cancelFollow } from '../../api/shop.js'

const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
const weixin = weex.requireModule('weixin')
const globalEvent = weex.requireModule('globalEvent')

export default {
  components: { WxcCell, WxcPopup, WxcDialog, WxcMask, navbar, WxcButton, WxcLightbox },
  data() {
    return {
      cellStyle: {
        paddingTop: 0,
        paddingBottom: 0
      },
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
      follow: {
        btnText: '+ 关注',
        btnType: 'blue'
      },
      user: {
        userLoginId: 0,
        token: ''
      },
      shop: {
        hasFollowed: -1
      },
      isAutoShow: false,
      relationCommodityList: [],
      lightBox: {
        show: false,
        height: 750,
        imageList: [],
        index: 0
      }
    }
  },
  created() {
    initIconfont()
    titlebar('商品详情')
    const pageHeight = Utils.env.getPageHeight()
    this.scrollerStyle = { height: pageHeight + 'px' }
    // this.lightBox.height = pageHeight 

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

      this.localUser()
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
    localUser() {
      getStorageVal('way:user').then(data=> {
        let user = JSON.parse(data)
        this.user.userLoginId = user.userLoginId
        this.user.token = user.userToken
        this.getCommodityData()
      }, e => {
        this.getCommodityData()
      })
    },
    getCommodityData() {
      getCommodityDetail({ 
          commodityId: this.commodityObj.id, 
          userLoginId: this.user.userLoginId === 0 ? undefined : this.user.userLoginId 
        }).then(data => {
          console.log('success', data)
          if (data.code != 200) {
            this.dialogContent = data.msg
            this.dialogShow = true
          }
          let commodityDetail = data.data
          this.commodityObj.id = commodityDetail.id
          this.shop.hasFollowed = commodityDetail.hasFollowed
            if (commodityDetail.hasFollowed === 0) {
              this.follow.btnText = '已关注'
              this.follow.btnType = 'white'
            } else {
              this.follow.btnText = '+ 关注'
              this.follow.btnType = 'blue'
            }

          this.commodityObj.cName = commodityDetail.name
          // this.commodityObj.cPrice = commodityDetail.price
          this.commodityObj.cPosition = commodityDetail.shopAddress
          if (commodityDetail['imgUrl'] && commodityDetail['imgUrl'] !== '') {
            this.commodityObj.cPicUrlList.push({ cPicUrl: commodityDetail.imgUrl })
            this.lightBox.imageList.push({ src: commodityDetail.imgUrl })
          }
          if (commodityDetail['imgUrl1'] && commodityDetail['imgUrl1'] !== '') {
            this.commodityObj.cPicUrlList.push({ cPicUrl: commodityDetail.imgUrl1 })
            this.lightBox.imageList.push({ src: commodityDetail.imgUrl1 })
          }
          if (commodityDetail['imgUrl2'] && commodityDetail['imgUrl2'] !== '') {
            this.commodityObj.cPicUrlList.push({ cPicUrl: commodityDetail.imgUrl2 })
            this.lightBox.imageList.push({ src: commodityDetail.imgUrl2 })
          }
          if (commodityDetail['imgUrl3'] && commodityDetail['imgUrl3'] !== '') {
            this.commodityObj.cPicUrlList.push({ cPicUrl: commodityDetail.imgUrl3 })
            this.lightBox.imageList.push({ src: commodityDetail.imgUrl3 })
          }
          if (commodityDetail['imgUrl4'] && commodityDetail['imgUrl4'] !== '') {
            this.commodityObj.cPicUrlList.push({ cPicUrl: commodityDetail.imgUrl4 })
            this.lightBox.imageList.push({ src: commodityDetail.imgUrl4 })
          }
          this.commodityObj.shopId = commodityDetail.shopId
          this.commodityObj.shopName = commodityDetail.shopName
          this.commodityObj.shopLogoUrl = commodityDetail.shopLogoUrl

          this.requestQueryRelationCommodity()
      })
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
    btnFollowClicked() {
      getStorageVal('way:user').then(
        data => {
          let user = JSON.parse(data)
          this.user.userLoginId = user.userLoginId
          this.user.token = user.userToken
          
          if (this.shop.hasFollowed === 1) {
            this.requestFollow()
          } else {
            this.requestCancelFollow()
          }
        },
        error => {
          this.user.userLoginId = 0
          this.user.token = ''
          navigator.push({
            url: getEntryUrl('views/user/login', { tabIndex: 0 }),
            animated: 'true'
          })
        }
      )
    },
    requestFollow() {
      shopFollow({
        shopId: this.commodityObj.shopId,
        userLoginId: this.user.userLoginId
      }, {
        token: this.user.token
      }).then((data)=>{
        if (data.code != 200) {
          return
        }
        this.shop.hasFollowed = 0
        this.follow.btnText = '已关注'
        this.follow.btnType = 'white'
      })
    },
    requestCancelFollow() {
      cancelFollow({
        shopId: this.commodityObj.shopId,
        userLoginId: this.user.userLoginId
      }, {
        token: this.user.token
      }).then((data)=>{
        if (data.code != 200) {
          return
        }
        this.shop.hasFollowed = 1
        this.follow.btnText = '+ 关注'
        this.follow.btnType = 'blue'
      })
    },
    wxcLightboxOverlayClicked() {
      this.lightBox.show = false
    },
    commodityImgClicked(i) {
      console.log('点击图片', JSON.stringify(this.lightBox.imageList))
      console.log('点击图片', i)
      this.lightBox.index = i 
      this.$set(this.lightBox, 'index', i)
      this.lightBox.show = true
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
.address {
  flex-direction:row;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
}
.address_icon {
  color: red;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 4px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.address_text {
  font-size: 24px;
  width: 600px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 4px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.flex_column_center {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>