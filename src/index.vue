<template>
<div>
  <wxc-tab-bar ref="wxc-tab-bar" :tab-titles="tabTitles" :tab-styles="tabStyles" title-type="iconFont" duration="0" @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <div class="item-container" :style="contentStyle">
      <wxc-searchbar class="searchbar" placeholder="输入商品名称" theme="gray" mod="hasDep" return-key-type="search" :dep-name="city" @wxcSearchbarInputReturned="wxcSearchbarInputOnInput" @wxcSearchbarDepChooseClicked="wxcSearchbarDepChooseClicked"></wxc-searchbar>
      <scroller :style="mcScrollerStyle" @loadmore="fetchMc" loadmoreoffset="10" v-if="!main.queryListNoDataShow">
        <div class="m_cell" v-for="(commodityObj, i) in main.queryList" :key="i">
          <div class="m_cell_split" v-if="i != 0"></div>
          <wxc-cell :cell-style="cellStyle" :has-top-border="false" :has-bottom-border="true" :has-margin="false">
            <image slot="label" class="shop_image" resize="cover" :src="commodityObj.shopLogoUrl"></image>
            <text slot="title" style="margin-left: 10px;">{{commodityObj.mName}}</text>
            <text slot="value" style="text-align: right; font-size: 26px;">{{commodityObj.mDistance}}</text>
          </wxc-cell>
          <wxc-cell v-for="(cItem, j) in commodityObj.firstList" :key="cItem.cId" :has-arrow="false" :cell-style="cellStyle" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false" @wxcCellClicked="commodityCellClick(i, j)">
            <image slot="label" class="image" resize="cover" :src="cItem.cImgUrl"></image>
            <div slot="title">
              <text class="c_name">{{cItem.cName}}</text>
              <!--
              <div style="flex-direction:row;">
                <text class="c_name c_money" style="font-size:20px; padding-top: 3px;">¥</text>
                <text class="c_money">{{cItem.cPrice}}</text>
              </div>
              -->
            </div>
          </wxc-cell>
          <wxc-cell v-if="commodityObj.moreList.length > 0" :has-arrow="false" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false">
            <text slot="title" class="iconfont" style="text-align: center;" v-if="commodityObj.isMore == true" @click="moreCommodityClicked(commodityObj.shopIndex)"> 查看更多{{commodityObj.moreList.length}}个 &#xe661 </text>
            <text slot="title" class="iconfont" style="text-align: center;" v-else @click="unMoreCommodityClicked(commodityObj.shopIndex)"> 收起 &#xe6de; </text>
          </wxc-cell>
        </div>
      </scroller>
      <div class="m_cell flex_column_center" v-else>
        <text v-if="main.needLocation == false" class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe66f;</text>
        <text v-if="main.needLocation == true" class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe651;</text>
        <text style="font-size:32px; margin-top: 20px; text-align: center; color: #cccccc;">{{main.noDataTip}}</text>
      </div>
    </div>
    <!-- discount -->
    <div class="item-container" :style="contentStyle">
      <scroller v-if="!discountListNoDataShow" :style="discountScrollerStyle" @loadmore="fetchDiscount" loadmoreoffset="10" @scroll="discountScrollHandler">
        <refresh class="refresh" @refresh="discountOnRefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
          <text class="indicator-text">{{refreshText}}</text>
          <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <div class="m_cell" v-for="(discountObj, i) in discountList" :key="i" :ref="'cell'+i">
          <div class="m_cell_split" v-if="i != 0"></div>
          <wxc-cell @wxcCellClicked="discountCellClicked(i)" :has-arrow="false" :cell-style="cellStyle" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
            <image slot="label" class="image" resize="cover" :src="discountObj.commodityImageUrl"></image>
            <div slot="title">
              <div style="flex-direction: row;">
                <text class="c_name" style="width: 460px;">{{discountObj.cName}}</text>
                <div style="flex: auto; -webkit-box-flex: 1;">
                  <text style="text-align: right; font-size: 26px; padding-top: 5px;">{{discountObj.mDistance}}</text>
                </div>
              </div>
              <div style="flex-direction:row;">
                <text class="c_name c_money" style="padding-top:4px;">¥{{discountObj.cPrice}}</text>
              </div>
              <div :key="i" :index="i" style="flex-direction: row; padding-left: 20px; margin-top: 10px;">
                  <text class="iconfont red" style="font-size: 24px;">&#xe651;</text>
                  <text class="c_real" style="color: #ccc; width: 500px;">{{discountObj.position}}</text>
              </div>
            </div>
          </wxc-cell>
        </div>
      </scroller>
      <div class="m_cell flex_column_center" v-else>
        <text class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe66f;</text>
        <text style="font-size:32px; margin-top: 20px; text-align: center; color: #cccccc;"> 没有查询到结果 </text>
      </div>
      <div style="flex-direction: column; position: absolute; right: 16px; bottom: 16px;">
        <text class="iconfont" :style="addDiscountStyle" @click="discountCreate">&#xe649;</text>
        <text class="iconfont" :style="discountTopStyle" @click="discountScrollToTop">&#xe69e;</text>
      </div>
    </div>
    <div class="item-container" :style="contentStyle">
      <scroller :style="myScrollerStyle">
        <wxc-cell v-if="my.userLoginId != 0" :has-arrow="false" :cell-style="cellStyle" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false">
          <image slot="label" class="image avatar" src="http://static.duozouzou.top/user.png"></image>
          <div slot="title">
            <div style="flex-direction: row;">
              <text class="c_name">{{my.nickname}}</text>
            </div>
          </div>
        </wxc-cell>

        <div v-if="my.userLoginId != 0" class="m_cell_split"></div>
        <wxc-cell v-if="my.userLoginId != 0" title="我发布的优惠信息"
                  @wxcCellClicked="userDiscountClick"
                  :has-bottom-border="true" :has-arrow="true"></wxc-cell>

        <wxc-cell v-if="my.userLoginId != 0" title="我的关注"
                  @wxcCellClicked="userFollowClick"
                  :has-bottom-border="true" :has-arrow="true"></wxc-cell>

        <div class="m_cell_split"></div>
        <wxc-cell v-if="my.userLoginId != 0" title="反馈建议" @wxcCellClicked="feedbackClick" :has-top-border="false" :has-arrow="true"/>
        <wxc-cell title="关于" @wxcCellClicked="aboutClick" :has-top-border="false" :has-arrow="true"/>

        <div v-if="my.userLoginId == 0" class="m_cell_split"></div>
        <wxc-cell v-if="my.userLoginId == 0" :has-arrow="false" :cell-style="cellStyle" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <div slot="title">
            <wxc-button type="blue" text="登录" @wxcButtonClicked="loginClicked"></wxc-button>
          </div>
        </wxc-cell>

        <div v-if="my.userLoginId != 0" class="m_cell_split"></div>
        <wxc-cell v-if="my.userLoginId != 0" :has-arrow="false" :cell-style="cellStyle" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <div slot="title">
            <wxc-button type="red" text="退出登录" @wxcButtonClicked="logoutClicked"></wxc-button>
          </div>
        </wxc-cell>
      </scroller>
    </div>

    <wxc-dialog title="发现新版本"
                :show="checkAppVersionDialogData.show"
                :single="checkAppVersionDialogData.single"
                :cancel-text="checkAppVersionDialogData.cancelText"
                :confirm-text="checkAppVersionDialogData.confirmText"
                @wxcDialogCancelBtnClicked="wxcDialogCancelBtnClicked"
                @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked">
                <div slot="content">
                  <div v-for="(item, i) in checkAppVersionDialogData.content" :key="i">{{item}}</div>
                </div>
                </wxc-dialog>
  </wxc-tab-bar>
</div>
</template>

<script>
import {
  WxcSearchbar,
  Utils,
  WxcTabBar,
  WxcCell,
  WxcButton,
  WxcDialog
} from 'weex-ui'
import {
  getEntryUrl,
  postMessage,
  receiveMessage,
  initIconfont,
  setPageTitle,
  modalDebug,
  getStorageVal,
  setStorageVal,
  titlebar
} from './tools/utils.js'
import tabbarConfig from './entry/tabbar/config.js'
import { http } from './tools/http.js'
import { syncUserDevice } from './api/user.js'
import { coordinateConvert, regeo } from './api/amap.js'
const navigator = weex.requireModule('navigator')
const storage = weex.requireModule('storage')
const modal = weex.requireModule('modal')
const dom = weex.requireModule('dom')
const version = weex.requireModule('version')
const dictionary = weex.requireModule('dictionary')
const globalEvent = weex.requireModule('globalEvent')

export default {
  components: { WxcSearchbar, WxcTabBar, WxcCell, WxcButton, WxcDialog },
  data: () => ({
    city: '',
    cellStyle: { backgroundColor: '#ffffff' },
    tabTitles: tabbarConfig.tabIconFontTitles,
    tabStyles: tabbarConfig.tabIconFontStyles,
    scrollerStyle: {},
    discountInit: false,
    discountList: [],
    discountListNoDataShow: false,
    discountPageNum: 1,
    discountPageSize: 20,
    my: {
      nickname: '我是昵称',
      userLoginId: 0,
      userToken: ''
    },
    discountTopStyle: { visibility: 'hidden' },
    discountClientLng: 0,
    discountClientLat: 0,
    discountCityCode: '',
    discountRealUserLoginId: 0,
    refreshing: false,
    refreshText: '下拉刷新',
    userToken: '',
    main: {
      init: false,
      keywords: '',
      queryList: [],
      queryListNoDataShow: false,
      noDataTip: '',
      needLocation: false,
      clientLng: 0,
      clientLat: 0,
      cityCode: '',
      pageNum: 1,
      pageSize: 20
    },
    checkAppVersionDialogData: {
      show: false,
      single: true,
      cancelText: '忽略本次升级',
      confirmText: '升级',
      content: [],
      newAppVersion: '',
      appStoreUrl: ''
    }
  }),
  beforeCreate() {
    initIconfont()
    getStorageVal('way:first').then(
      data => {
        console.log('app非第一次启动，不需要引导')
        this.checkAppVersion()
        this.requestSyncUserDevice()
      },
      error => {
        console.log('app第一次启动，开启引导')
        navigator.push({
          url: getEntryUrl('guide'),
          animated: 'false'
        })
      }
    )

    globalEvent.addEventListener('receiveNotify', function(params) {
      console.log('接收receiveNotify', params)
      if (params) {
        const nType = params['nType']
        if (nType == '1') {
          console.log('通知-跳转商品详情')
          const cid = params['cid']
          setStorageVal('way:commodity:id', cid)
          navigator.push({
            url: getEntryUrl('views/commodity/detail'),
            animated: 'true'
          })
        } else if (nType == '2') {
          console.log('通知-跳转优惠详情')
          const did = params['did']
          setStorageVal('way:discount:id', did)
          navigator.push({
            url: getEntryUrl('views/discount/detail'),
            animated: 'true'
          })
        }
      }
    })
  },
  created() {
    titlebar('首页')

    receiveMessage('m:way:city', data => {
      console.log('接收城市设置完成消息, m:way:city')
      //重新加载main
      this.main.pageNum = 1
      this.main.queryList = []
      this.initMainTab()
      //重新加载discount
      this.loadDiscountTabContent()
    })

    receiveMessage('m:way:login', data => {
      console.log('receive, m:way:login', data)
      if (data.status === 0 && data.val === 'success') {
        this.loadMyTabContent()
        this.requestSyncUserDevice()
      }
    })

    receiveMessage('m:way:discount:refresh', data => {
      console.log('receiveMessage, m:way:discount:refresh', data)
      if (data.status === 0) {
        this.discountPageNum = 1
        this.discountList = []
        this.fetchDiscount()
      }
    })

    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this
    //
    this.contentStyle = { height: tabPageHeight - tabStyles.height + 'px' }
    this.mcScrollerStyle = {
      height: tabPageHeight - tabStyles.height - 84 + 'px',
      width: '750px'
    }
    this.discountScrollerStyle = {
      height: tabPageHeight - tabStyles.height + 'px',
      width: '750px'
    }
    this.myScrollerStyle = {
      height: tabPageHeight - tabStyles.height + 'px',
      width: '750px'
    }
    this.addDiscountStyle = {
      fontSize: '48px',
      color: '#999999',
      borderColor: '#cccccc',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '50px',
      width: '64px',
      height: '64px',
      backgroundColor: '#ffffff',
      paddingTop: '7px',
      paddingLeft: '7px',
      opacity: 0.9,
      marginTop: '15px'
    }
    this.discountTopStyle = Object.assign(
      this.discountTopStyle,
      this.addDiscountStyle
    )
    console.log(
      this.contentStyle,
      this.scrollerStyle,
      this.myScrollerStyle,
      this.addDiscountStyle,
      this.discountTopStyle
    )

    getStorageVal('way:first').then((data) => {
      //非首次进入
      this.initMainTab()
    }, (error) => {
      //首次进入，进行自动定位
      this.firstAutoLocation()
    })
  },
  methods: {
    initMainTab() {
      console.log('初始化initMainTab')
      getStorageVal('way:city').then(
        data => {
          console.log('way:city', data)
          let cityObj = JSON.parse(data)
          modalDebug('返回城市对象', data)
          this.main.queryListNoDataShow = false
          this.main.noDataTip = '没有查询到结果'
          this.main.needLocation = false

          this.city = cityObj.name
          this.main.clientLng = cityObj.lng
          this.main.clientLat = cityObj.lat
          this.main.cityCode = cityObj.cityCode
          console.log('城市', this.city, this.main)
          this.searchbarHttp()
        },
        err => {
          console.log('way:city', err)
          this.main.queryListNoDataShow = true
          this.main.noDataTip = '我需要你的位置信息'
          this.main.needLocation = true
          this.city = '我在哪...'
        }
      )
    },
    wxcTabBarCurrentTabSelected(e) {
      const index = e.page
      console.log(index)
      this.switchTabContent(index)
    },
    switchTabContent(index) {
      console.log('switch to index ', index)
      if (index == 1) {
        setPageTitle('优惠信息')
        titlebar('优惠信息')
        if (!this.discountInit) {
          this.loadDiscountTabContent()
        }
      } else if (index == 2) {
        console.log('into my tab')
        setPageTitle('个人信息')
        titlebar('我的主页')
        this.loadMyTabContent()
      } else {
        setPageTitle('首页')
        titlebar('首页')
        console.log('init first tab', this.main.init)
        if (this.main.init == false) {
          this.main.init = true
          this.initMainTab()
        }
      }
    },
    loadDiscountTabContent() {
      this.discountList.splice(0, this.discountList.length)
      this.discountPageNum = 1
      getStorageVal('way:user').then(
        data => {
          let user = JSON.parse(data)
          console.log('加载discount tab后', user)
          // this.discountRealUserLoginId = user.userLoginId;
          // this.userToken = user.userToken;
          this.fetchDiscount()
        },
        error => {
          this.discountRealUserLoginId = 0
          this.fetchDiscount()
        }
      )
    },
    loadMyTabContent() {
      console.log('加载my tab')
      getStorageVal('way:user').then(
        data => {
          let user = JSON.parse(data)
          console.log('加载my tab后', user)
          this.my.nickname = user.userNickName
          this.my.userLoginId = user.userLoginId
          this.my.userToken = user.userToken
        },
        error => {
          this.my.userLoginId = 0
        }
      )
    },
    wxcSearchbarDepChooseClicked() {
      navigator.push({
        url: getEntryUrl('views/city/index'),
        animated: 'true'
      })
    },
    fetchMc(event) {
      this.searchbarHttp()
    },
    fetchDiscount() {
      let _this = this
      getStorageVal('way:city').then(
        data => {
          let city = JSON.parse(data)
          _this.discountClientLng = city.lng
          _this.discountClientLat = city.lat
          _this.discountCityCode = city.cityCode
          _this.fetchDiscountHttp()
        },
        e => {
          this.$refs['wxc-tab-bar'].setPage(0)
          titlebar('首页')
          navigator.push({
            url: getEntryUrl('views/city/index'),
            animated: 'true'
          })
        }
      )
    },
    fetchDiscountHttp() {
      let _this = this
      http({
        method: 'POST',
        url: '/discount/query',
        headers: {},
        body: {
          //获取已经选择的地域信息
          clientLng: this.discountClientLng,
          clientLat: this.discountClientLat,
          pageNum: this.discountPageNum,
          pageSize: this.discountPageSize,
          cityCode: this.discountCityCode
          // realUserLoginId: this.discountRealUserLoginId
        }
      }).then(
        data => {
          // console.log("success", data);
          if (data.code != 200) {
            return
          }
          this.discountInit = true

          this.discountPageNum++

          let discountDataList = data.data

          for (let index = 0; index < discountDataList.length; index++) {
            const discountData = discountDataList[index]
            let discountObj = {
              discountId: discountData.id,
              position: discountData.shopPosition,
              cName: discountData.commodityName,
              cPrice: discountData.commodityPrice,
              mDistance: discountData.shopDistance,
              cReal: discountData.commodityReal,
              cCate: discountData.commodityCate,
              cExpireMills: discountData.limitTimeExpireMills,
              commodityImageUrl: discountData.commodityImageUrl,
              realUserLoginId: discountData.realUserLoginId
            }
            _this.discountList.push(discountObj)
          }

          _this.discountListNoDataShow = _this.discountList.length == 0
        },
        error => {
          console.error('failure', error)
        }
      )
    },
    logoutClicked(e) {
      console.log('退出登录')

      let _this = this
      http({
        method: 'POST',
        url: '/user/logout',
        headers: {
          token: this.my.userToken
        },
        body: {
          userLoginId: this.my.userLoginId
        }
      }).then(
        function(data) {
          console.log('success', data)
          if (data.code != 200) {
            modal.toast({
              message: data.msg,
              duration: 2
            })
            return
          }
          storage.removeItem('way:user', event => {})

          _this.my.userLoginId = 0
          // navigator.pop({ animated: "true" });
          // navigator.push({
          //   url: getEntryUrl("views/user/login"),
          //   animated: "true"
          // });
        },
        function(error) {
          console.error('failure', error)
        }
      )
    },
    loginClicked(e) {
      navigator.push({
        url: getEntryUrl('views/user/login', { tabIndex: 2 }),
        animated: 'true'
      })
    },
    discountCellClicked(i) {
      let discount = this.discountList[i]
      setStorageVal('way:discount:id', discount.discountId)
      navigator.push({
        url: getEntryUrl('views/discount/detail', {
          discountId: discount.discountId
        }),
        animated: 'true'
      })
    },
    discountScrollToTop() {
      const el = this.$refs.cell0[0]
      dom.scrollToElement(el, {})
    },
    discountCreate() {
      getStorageVal('way:user').then(
        data => {
          navigator.push({
            url: getEntryUrl('views/discount/create'),
            animated: 'true'
          })
        },
        error => {
          navigator.push({
            url: getEntryUrl('views/user/login', { tabIndex: 1 }),
            animated: 'true'
          })
        }
      )
    },
    discountScrollHandler(e) {
      // console.log(e.contentOffset.y)
      if (e.contentOffset.y < -500) {
        this.discountTopStyle.visibility = 'visible'
      } else {
        this.discountTopStyle.visibility = 'hidden'
      }
    },
    wxcSearchbarInputOnInput(e) {
      this.main.keywords = e.value
      let _this = this
      getStorageVal('way:city').then(
        data => {
          let city = JSON.parse(data)
          _this.main.clientLng = city.lng
          _this.main.clientLat = city.lat
          _this.main.cityCode = city.cityCode
          _this.main.queryList.splice(0, _this.main.queryList.length)
          _this.main.pageNum = 1
          _this.searchbarHttp()
        },
        e => {
          navigator.push({
            url: getEntryUrl('views/city/index'),
            animated: 'true'
          })
        }
      )
    },
    searchbarHttp() {
      console.log('查询searchbarHttp')
      let _this = this
      http({
        method: 'POST',
        url: '/shop/query',
        headers: {},
        body: {
          keywords: this.main.keywords,
          clientLng: this.main.clientLng,
          clientLat: this.main.clientLat,
          cityCode: this.main.cityCode,
          pageNum: this.main.pageNum,
          pageSize: this.main.pageSize
        }
      }).then(
        function(data) {
          if (data.code != 200) {
            return
          }

          let shopQueryDataList = data.data

          let shopIndex = 0
          shopQueryDataList.forEach(shopQueryData => {
            //       {
            //   mName: "商家名称",
            //   cName: "商品名称",
            //   cPrice: "1.8",
            //   mDistance: "652m"
            // }
            let commodityData = shopQueryData.commodityList
            let cList = []
            commodityData.forEach(commodity => {
              cList.push({
                cId: commodity.id,
                cName: commodity.name,
                // cPrice: commodity.price,
                cImgUrl: commodity.imgUrl
              })
            })

            _this.main.queryList.push({
              shopIndex: shopIndex++,
              mName: shopQueryData.shopName,
              shopLogoUrl: shopQueryData.shopLogoUrl,
              firstList: cList.slice(0, 1),
              moreList: cList.length > 1 ? cList.slice(1) : [],
              isMore: cList.length > 1 ? true : false,
              moreNum: cList.length > 1 ? cList.length - 1 : 0,
              mDistance: shopQueryData.shopDistance
            })
          })

          _this.main.queryListNoDataShow = _this.main.queryList.length == 0

          _this.main.pageNum++
        },
        function(error) {
          console.error('failure', error)
        }
      )
    },
    moreCommodityClicked(shopIndex) {
      let shopItem = this.main.queryList[shopIndex]
      console.log(shopIndex, shopItem)
      shopItem.firstList = shopItem.firstList.concat(shopItem.moreList)
      shopItem.isMore = !shopItem.isMore
      this.main.queryList[shopIndex] = shopItem
    },
    unMoreCommodityClicked(shopIndex) {
      let shopItem = this.main.queryList[shopIndex]
      console.log(shopIndex, shopItem)
      shopItem.moreList = shopItem.firstList.slice(1)
      shopItem.firstList = shopItem.firstList.slice(0, 1)
      shopItem.isMore = !shopItem.isMore
      this.main.queryList[shopIndex] = shopItem
    },
    commodityCellClick(i, j) {
      let shopItem = this.main.queryList[i]
      console.log(i, j, shopItem)
      let commodityItem = null
      if (j === 0) {
        commodityItem = shopItem.firstList[0]
      } else {
        commodityItem = shopItem.moreList[j - 1]
      }
      console.log(commodityItem)
      if (commodityItem) {
        console.log('跳转到商品详情页面', commodityItem.cId)
        setStorageVal('way:commodity:id', commodityItem.cId)
        navigator.push({
          url: getEntryUrl('views/commodity/detail'),
          animated: 'true'
        })
      }
    },
    // discountExpireOnCompleted(i) {
    //   console.log("优惠过期", i);
    //   this.discountList.splice(i, 1);
    // },
    discountOnRefresh(event) {
      this.refreshing = true
      console.log('refresh')
      this.refreshText = '加载中'

      this.discountPageNum = 1
      this.discountList.splice(0, this.discountList.length)
      this.fetchDiscount()
      this.refreshing = false
    },
    onpullingdown(event) {
      // this.refreshing = true
      this.refreshText = '下拉加载'
      // console.log(
      //   'pulling down',
      //   event.pullingDistance,
      //   event.dy,
      //   event.viewHeight
      // )
    },
    userDiscountClick() {
      navigator.push({
        url: getEntryUrl('views/user/myDiscount'),
        animated: 'true'
      })
    },
    userFollowClick() {
      navigator.push({
        url: getEntryUrl('views/user/myFollow'),
        animated: 'true'
      })
    },
    checkAppVersion() {
      console.log('开始app版本检查')
      let _this = this
      http({
        method: 'GET',
        url: '/ios/app/version',
        headers: {},
        params: {}
      }).then(function(data) {
        console.log('success', data)
        if (data.code !== 200) {
          return
        }
        getStorageVal('way:version:check:show').then(
          ignoreAppVersion => {
            console.log('忽略的app版本', ignoreAppVersion)
            if (ignoreAppVersion === data.data.newAppVersion) {
              console.log('已忽略检查app版本')
              return
            }
            _this.checkAppVersionDialog(data)
          },
          error => {
            console.log('没有本地检查app版本数据')
            _this.checkAppVersionDialog(data)
          }
        )
      })
    },
    checkAppVersionDialog(data) {
      console.log('版本弹窗，data', data)
      const operation = data.data.operation
      if (operation === 'force' || operation === 'notice') {
        console.log('版本提示', operation)
        if (operation === 'force') {
          this.checkAppVersionDialogData.single = true
        } else if (operation === 'notice') {
          this.checkAppVersionDialogData.single = false
        }
        this.checkAppVersionDialogData.content.push(
          '新版本 ' + data.data.newAppVersion
        )
        if (data.data.commentList) {
          for (var i = 0; i < data.data.commentList.length; i++) {
            this.checkAppVersionDialogData.content.push(
              data.data.commentList[i]
            )
          }
        }
        this.checkAppVersionDialogData.appStoreUrl = data.data.appStoreUrl
        this.checkAppVersionDialogData.newAppVersion = data.data.newAppVersion
        this.checkAppVersionDialogData.show = true
        console.log('开启版本提示')
      }
    },
    wxcDialogConfirmBtnClicked(e) {
      console.log('去升级')
      if (Utils.env.isIOS()) {
        const appstore = weex.requireModule('appstore')
        appstore.openUrl(this.checkAppVersionDialogData.appStoreUrl)
      } else if (Utils.env.isAndroid()) {
        const webbrowser = weex.requireModule('webbrowser')
        webbrowser.openUrl(this.checkAppVersionDialogData.appStoreUrl)
      }
    },
    wxcDialogCancelBtnClicked(e) {
      console.log('忽略本次升级')
      this.checkAppVersionDialogData.show = false
      setStorageVal(
        'way:version:check:show',
        this.checkAppVersionDialogData.newAppVersion
      )
    },
    requestSyncUserDevice() {
      getStorageVal('way:user').then(data => {
        let longitude = 0
        let latitude = 0
        let jpushRegId = ''
        let deviceToken = ''
        const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
        if (isIOS) {
          dictionary.getDict('longitude', function(resp) {
            console.log('获取iOS native经度', resp)
            longitude = resp
          })
          dictionary.getDict('latitude', function(resp) {
            console.log('获取iOS native纬度', resp)
            latitude = resp
          })
          dictionary.getDict('deviceToken', function(resp) {
            console.log('首页-获取iOS deviceToken', resp)
            deviceToken = resp
          })
          dictionary.getDict('jpushRegId', function(resp) {
            console.log('首页-获取jpushRegId', resp)
            jpushRegId = resp
          })
        } else {
          longitude = dictionary.getDict('longitude')
          console.log('获取native经度', longitude)

          latitude = dictionary.getDict('latitude')
          console.log('获取native纬度', latitude)

          jpushRegId = dictionary.getDict('jpushRegId')
          console.log('获取jpushRegId', jpushRegId)
        }
        const user = JSON.parse(data)
        const userLoginId = user.userLoginId
        const syncParams = {
          userLoginId: userLoginId,
          deviceToken: deviceToken,
          jpushRegId: jpushRegId,
          latitude: latitude,
          longitude: longitude
        }
        console.log('首页-syncUserDevice', syncParams)
        syncUserDevice(syncParams)
      })
    },
    firstAutoLocation() {
      let gpsLocation = ''
      this.city = '定位中...'
      const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
      if (isIOS) {
        dictionary.getDict('longitude', function(resp) {
          console.log('获取iOS native经度', resp)
        })
        dictionary.getDict('latitude', function(resp) {
          console.log('获取iOS native纬度', resp)
        })
      } else {
        let lng = dictionary.getDict('longitude')
        let lat = dictionary.getDict('latitude')
        console.log('获取android native经纬度', lng, lat)
        if (lng && lng > 0 && lat && lat > 0) {
          gpsLocation = [lng, ',', lat].join('')
        } else {
          //未打开定位
          this.initMainTab()
          return
        }
      }

      coordinateConvert({ locationList: [gpsLocation] }).then((data) => {
        let locations = data.data
        if (locations && locations.length === 1) {
          locations.forEach(element => {
            let amapLocation = [element.longitude, ',', element.latitude].join('')
            regeo({location: amapLocation, extensions: 'all'}).then((data) => {
              if (data.code !== 200) {
                return
              }
              let regeoData = data.data
              let regeoName = regeoData.neighborhoodName
              let regeoLocation = regeoData.neighborhoodLocation
              let regeoCityCode = regeoData.cityCode
              let cityData = {
                name: regeoName,
                lng: regeoLocation.split(',')[0],
                lat: regeoLocation.split(',')[1],
                cityCode: regeoCityCode
              }
              this.city = regeoName
              console.log('首页自动定位结果', JSON.stringify(cityData))
              setStorageVal('way:city', JSON.stringify(cityData)).then(data => {
                console.log('设置cityData')
                postMessage('m:way:city')
              })
            })
          });
        }
      })
    },
    aboutClick() {
      navigator.push({
        url: getEntryUrl('views/user/about'),
        animated: 'true'
      })
    },
    feedbackClick() {
      navigator.push({
        url: getEntryUrl('views/user/feedback'),
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
.item-container {
  width: 750px;
  background-color: #ffffff;
  align-items: center;
}
.image {
  width: 140px;
  height: 140px;
  margin-right: 10px;
  border-radius: 10px;
}
.shop_image {
  width: 64px;
  height: 64px;
  border-radius: 5px;
}
.avatar {
  border-radius: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
}
.m_cell {
  padding-bottom: 2px;
  margin-bottom: 6px;
}
.flex_column_center {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.m_cell_split {
  height: 10px;
  background-color: #f2f3f4;
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
.red {
  color: red;
}
.refresh {
  width: 750;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}
.loading {
  width: 750;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}
.indicator-text {
  color: #888888;
  font-size: 30px;
  text-align: center;
}
.indicator {
  margin-top: 16px;
  height: 40px;
  width: 40px;
  color: #000;
}
.text {
  font-size: 50px;
  text-align: center;
  color: #41b883;
}
</style>