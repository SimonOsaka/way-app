<template>
  <div>
    <navbar title="商家详情" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div style="flex-direction: column; align-items: center; justice-content: center; padding-top: 10px; padding-bottom: 10px;">
        <image class="image_shop" :src="shop.shopLogoUrl"></image>
        <text class="text_shop">{{shop.shopName}}</text>
      </div>
      <div style="margin-top: 10px; justify-content: center; flex-direction: row;">
        <wxc-button type="blue" size="small" btnStyle="{borderColor: red, backgroundColor: '#fff'}" textStyle="{color: red}" :text="follow.btnText" @wxcButtonClicked="btnFollowClicked"></wxc-button>
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
import { Utils, WxcCell, WxcButton } from 'weex-ui'
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
import { shopFollow, cancelFollow, getShopDetail } from '../../api/shop.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar, WxcButton },
  data: () => ({
    cellStyle: { height: '150px' },
    shop: {
      id: 0,
      shopAddress: '',
      shopName: '',
      shopLogoUrl: '',
      shopBusinessTimeAll: '',
      hasFollowed: -1
    },
    follow: {
      btnText: '关注'
    },
    user: {
      userLoginId: 0,
      token: ''
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
    this.initShopDetail()
    receiveMessage('m:way:login', data => {
      console.log('receive, m:way:login', data)
      if (data.status === 0 && data.val === 'success') {
        this.initShopDetail()
      }
    })
  },
  methods: {
    initShopDetail() {
      let _this = this
      getStorageVal('way:shop:id').then(
        data => {
          _this.shop.id = data
          getStorageVal('way:user').then(data=> {
            let user = JSON.parse(data)
            _this.user.userLoginId = user.userLoginId
            _this.user.token = user.userToken
            _this.requestShopDetail()
          }, e => {
            _this.requestShopDetail()
          })
        },
        e => {
          navigator.pop()
          return
        }
      )
    },
    requestShopDetail() {
      getShopDetail({
          shopId: this.shop.id,
          userLoginId: this.user.userLoginId === 0 ? undefined : this.user.userLoginId
        },{
          token: this.user.token === '' ? undefined : this.user.token
        }).then((data) => {
            if (data.code != 200) {
              return
            }
            let shopDetail = data.data
            this.shop.id = shopDetail.id
            this.shop.shopName = shopDetail.shopName
            this.shop.shopAddress = shopDetail.shopAddress
            this.shop.shopTel = shopDetail.shopTel
            this.shop.shopBusinessTimeAll =
              shopDetail.shopBusinessTime1 + ' ' + shopDetail.shopBusinessTime2
            this.shop.shopLogoUrl = shopDetail.shopLogoUrl
            this.shop.hasFollowed = shopDetail.follow.hasFollowed
            if (shopDetail.follow.hasFollowed === 0) {
              this.follow.btnText = '已关注'
            } else {
              this.follow.btnText = '关注'
            }
          },
          function(error) {
            console.error('failure', error)
          }
        )
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
        shopId: this.shop.id,
        userLoginId: this.user.userLoginId
      }, {
        token: this.user.token
      }).then((data)=>{
        if (data.code != 200) {
          return
        }
        this.shop.hasFollowed = 0
        this.follow.btnText = '已关注'
      })
    },
    requestCancelFollow() {
      cancelFollow({
        shopId: this.shop.id,
        userLoginId: this.user.userLoginId
      }, {
        token: this.user.token
      }).then((data)=>{
        if (data.code != 200) {
          return
        }
        this.shop.hasFollowed = 1
        this.follow.btnText = '关注'
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
.image_shop {
  width: 256px;
  height: 256px;
}
.text_shop {
  font-size: 64px;
  font-weight: bold;
}
</style>