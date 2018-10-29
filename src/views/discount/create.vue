<template>
  <div>
    <navbar title="创建优惠" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <category title="商品分类"></category>
      <div class="content">
        <wxc-grid-select :single="true" :list="cateData" @select="params => onSelect('res3', params)">
        </wxc-grid-select>
      </div>

      <category title="商品名称"></category>
      <input type="text" placeholder="输入商品名称" class="input" :autofocus=true @input="commodityNameOnchange" />

      <category title="商品价格（元）"></category>
      <input type="number" placeholder="输入商品价格" class="input" @input="commodityPriceOnchange" />

      <category title="商家位置"></category>
      <div>
        <input type="text" placeholder="输入商家所在地区" class="input" :value="shopPosition" disabled="true"></input>
        <text class="iconfont" style="font-size: 42px; padding-top: 20px; position: absolute; top:0; width: 750px; height: 80px; text-align: right;" @click="openShopPositionMask">&#xe6a3;</text>
      </div>
      <input type="text" placeholder="输入街道、门牌号" class="input" @input="shopAddressOnchange"></input>

      <category title="优惠时间"></category>
      <div class="content">
        <wxc-grid-select :single="true" :list="expireList" @select="params => expireOnSelect('expire', params)">
        </wxc-grid-select>
      </div>

      <div style="align-items:center; padding-top: 20px;">
        <wxc-button type="white" text="发布" :disabled="btnDisabled" @wxcButtonClicked="createDiscountClicked"></wxc-button>
      </div>
    </scroller>

    <wxc-loading :show="isShow" type="default" :need-mask="true" loading-text="提交中" @wxcLoadingMaskClicked="maskClicked"></wxc-loading>

    <wxc-mask height="800" width="702" border-radius="0" duration="200" mask-bg-color="#FFFFFF" :has-animation="true" :has-overlay="true" :show-close="true" :show="shopPositionShow" @wxcMaskSetHidden="shopPositionMaskSetHidden">
      <input type="text" placeholder="输入商家所在地区" class="input" style="width: 702px; border-bottom-width: 1px; border-bottom-color: #ccc;" @input="shopPositionOnchange" :value="shopPosition"></input>
      <div>
        <div @click="inputTipClicked(i)" v-for="(tip, i) in inputTipsList" :key="i" style="flex-direction: column; padding-left: 10px; padding-top:10px;padding-bottom:10px;">
          <text style="margin-left: 10px;">{{tip.name}}</text>
          <text style="color: #cccccc;">{{tip.district}}</text>
        </div>
      </div>
    </wxc-mask>
  </div>
</template>

<script>
import {
  Utils,
  WxcGridSelect,
  WxcButton,
  WxcCell,
  WxcLoading,
  WxcMask
} from 'weex-ui'
import navbar from "../../include/navbar.vue"
import {
  getEntryUrl,
  postMessage,
  receiveMessage,
  setStorageValue,
  getStorageValue,
  initIconfont,
  isEmpty,
  getStorageVal,
  setStorageVal,
  getUrlKey,
  setPageTitle
} from '../../tools/utils.js'
import { http } from '../../tools/http.js'
import category from '../../components/category.vue'
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')

export default {
  components: {
    WxcGridSelect,
    category,
    WxcButton,
    WxcCell,
    WxcLoading,
    WxcMask,
    navbar
  },
  data: () => ({
    commodityCate: '',
    commodityName: '',
    commodityPrice: '',
    shopPosition: '',
    shopAddress: '',
    cateData: [
      { title: '服装', cate: 'clothes' },
      { title: '蔬菜', cate: 'vegetables' },
      { title: '饮料', cate: 'drinks' },
      { title: '零食', cate: 'snacks' },
      { title: '工具', cate: 'tools' },
      { title: '其它', cate: 'others' }
    ],
    cateAll: {},
    clientLng: 0,
    clientLat: 0,
    inputTipsList: [],
    expireList: [
      { title: '一天', checked: true, day: 1 },
      { title: '三天', day: 3 },
      { title: '一星期', day: 7 }
    ],
    expireDays: 1,
    cityCode: '',
    isShow: false,
    btnDisabled: false,
    shopPositionShow: false
  }),
  beforeCreate() {
    initIconfont()
    setPageTitle('发布优惠')
    const pageHeight = Utils.env.getPageHeight();
    const screenHeight = Utils.env.getScreenHeight();
    this.scrollerStyle = { marginTop: screenHeight - pageHeight + 'px' }

    getStorageVal('way:city').then(
      data => {
        let city = JSON.parse(data)
        this.cityCode = city.cityCode
      },
      e => {
        navigator.push({
          url: getEntryUrl('views/city/index'),
          animated: 'true'
        })
      }
    )
  },
  methods: {
    onSelect(res, { selectIndex, checked, checkedList }) {
      console.log(res, selectIndex, checked, checkedList.length)
      if (checked) {
        console.log(checkedList[0])
        this.commodityCate = this.cateData[selectIndex].cate
      }
    },
    expireOnSelect(res, { selectIndex, checked, checkedList }) {
      console.log(res, selectIndex, checked, checkedList.length)
      if (checked) {
        console.log(checkedList[0])
        this.expireDays = this.expireList[selectIndex].day
      }
    },
    commodityNameOnchange: function(event) {
      this.commodityName = event.value
      console.log('onchange', event.value)
    },
    commodityPriceOnchange: function(event) {
      this.commodityPrice = event.value
      console.log('oninput', event.value)
    },
    shopPositionOnchange: function(event) {
      this.shopPosition = event.value
      console.log('oninput', event.value)

      if (this.shopPosTimeout) {
        clearTimeout(this.shopPosTimeout)
      }

      this.shopPosTimeout = setTimeout(() => {
        console.log('0.5秒执行')
        this.shopPositionFetch()
      }, 500)
    },
    shopAddressOnchange(event) {
      this.shopAddress = event.value
      console.log('oninput', event.value)
    },
    shopPositionFetch() {
      let _this = this
      http({
        method: 'POST',
        url: '/amap/inputtips',
        headers: {},
        body: {
          keywords: this.shopPosition
        }
      }).then(
        function(data) {
          console.log('success', data)
          if (data.code != 200) {
            return
          }

          _this.inputTipsList = data.data
          console.log(_this.inputTipsList)
        },
        function(error) {
          console.error('failure', error)
        }
      )
    },
    inputTipClicked(i) {
      console.log(i)
      this.shopPositionShow = false
      this.shopPosition =
        this.inputTipsList[i].district + this.inputTipsList[i].name
      let location = this.inputTipsList[i].location.split(',')
      this.clientLng = location[0]
      this.clientLat = location[1]
    },
    createDiscountClicked(e) {
      console.log(e)
      console.log('按钮禁用？', this.btnDisabled, '组件禁用？', e.disabled)
      if (e.disabled == true) {
        return
      }
      if (
        isEmpty(this.commodityName) ||
        isEmpty(this.commodityPrice) ||
        isEmpty(this.shopPosition) ||
        isEmpty(this.shopAddress) ||
        isEmpty(this.commodityCate) ||
        this.expireDays < 1
      ) {
        modal.toast({
          message: '请填全信息',
          duration: 2
        })
        return
      }

      if (isEmpty(this.clientLng) || isEmpty(this.clientLat)) {
        modal.toast({
          message: '请输入并选择商家位置',
          duration: 2
        })
        return
      }

      console.log(
        this.commodityName,
        this.commodityPrice,
        this.shopPosition,
        this.shopAddress,
        this.commodityCate,
        this.expireDays,
        this.clientLng,
        this.clientLat,
        this.cityCode
      )

      let _this = this
      getStorageVal('way:user').then(data => {
        this.isShow = true
        this.btnDisabled = true
        let user = JSON.parse(data)
        http({
          method: 'POST',
          url: '/discount/create',
          headers: {
            token: user.userToken
          },
          body: {
            commodityName: _this.commodityName,
            commodityCate: _this.commodityCate,
            commodityPrice: _this.commodityPrice,
            shopPosition: _this.shopPosition.concat(_this.shopAddress),
            userLoginId: user.userLoginId,
            clientLat: _this.clientLat,
            clientLng: _this.clientLng,
            expireDays: _this.expireDays,
            cityCode: _this.cityCode
          }
        }).then(
          function(data) {
            if (data.code != 200) {
              _this.isShow = false
              _this.btnDisabled = false
              modal.toast({
                message: data.msg,
                duration: 2
              })
              return
            }

            _this.isShow = false

            modal.toast({
              message: '提交成功',
              duration: 2
            })

            let lateTimeout = setTimeout(() => {
              clearTimeout(lateTimeout)
              postMessage('m:way:discount:refresh')
              navigator.pop({
                animated: true
              })
            }, 2000)
          },
          function(error) {
            console.error('failure', error)
            _this.isShow = false
            _this.btnDisabled = false
          }
        )
      })
    },
    maskClicked() {},
    shopPositionMaskSetHidden() {
      this.shopPositionShow = false
    },
    openShopPositionMask() {
      this.shopPositionShow = true
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
  flex: 1;
}
.content {
  padding-top: 24px;
  padding-right: 24px;
  padding-left: 24px;
}
.image {
  width: 750px;
  height: 500px;
}
.input {
  font-size: 40px;
  height: 80px;
  width: 750px;
}
.textarea {
  font-size: 40px;
  width: 750px;
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
input:disabled {
  background-color: white;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
}
</style>