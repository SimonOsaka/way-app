<template>
  <div>
    <navbar title="选择地址" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <wxc-searchbar ref="wxc-searchbar" placeholder="请输入您所在的位置（例如：xx市xx区xx街）" :always-show-cancel="alwaysShowCancel" :return-key-type="returnKeyType" @wxcSearchbarInputReturned="wxcSearchbarInputOnInput"></wxc-searchbar>
      <div v-if="currentAddress != ''">
        <category title="定位地址"></category>
        <wxc-cell :has-arrow="false" :has-top-border="true" @wxcCellClicked="autoLocationCellClicked">
          <div slot="title">
            <text class="iconfont" style="color: #333333; font-size: 30px; line-height: 40px;">&#xe650; {{currentAddress}}</text>
          </div>
          <div slot="value">
            <text class="iconfont" @click="reAutoLocation">&#xe6a4; 重新定位</text>
          </div>
        </wxc-cell>
      </div>
      <div>
        <category title="我的地址">
          <text slot="right" class="iconfont" @click="toMyAddressClicked" style="text-align: right; width: 375px; padding-top: 20px; padding-right: 24px; font-weight: 600; font-size: 28px; color: #38f;">操作 &#xe6a3;</text>
        </category>
        <wxc-cell v-for="(item, i) in userAddressList" :key="i" @wxcCellClicked="userAddressListItemClicked(i)" :has-arrow="false" :has-top-border="true">
          <div slot="title" style="flex-direction: row;">
            <text style="color: #333333; font-size: 30px; line-height: 40px;">{{item.addressName}}</text>
            <wxc-tag v-if="item.addressTagName" type="solid" tag-color="#38f" font-color="#ffffff" style="margin-left: 8px; margin-top: 8px;" :value="item.addressTagName"></wxc-tag>
          </div>
        </wxc-cell>
      </div>
      <div v-if="searchList.length > 0">
        <category title="搜索地址"></category>
        <wxc-cell v-for="(result, i) in searchList" :key="i" :title="result.addressTitle" :desc="result.addressDesc" @wxcCellClicked="wxcIndexlistItemClicked(i)" :has-arrow="false" :has-top-border="true">
        </wxc-cell>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcSearchbar, WxcCell, Utils, WxcTag } from 'weex-ui'
import navbar from '../../include/navbar.vue'
import {
  initIconfont,
  postMessage,
  receiveMessage,
  getStorageVal,
  setPageTitle,
  getEntryUrl,
  setStorageVal,
  titlebar
} from '../../tools/utils.js'
import { http } from '../../tools/http.js'
import { updateUserProfileAddress, queryUserAddressList } from '../../api/user.js'
import { inputtips, regeo, coordinateConvert } from '../../api/amap.js'
import category from '../../components/category.vue'
const navigator = weex.requireModule('navigator')
const dictionary = weex.requireModule('dictionary')

export default {
  components: { WxcSearchbar, WxcCell, category, navbar, WxcTag },
  data: () => ({
    searchList: [],
    userAddressList: [],
    keywords: '',
    alwaysShowCancel: false,
    returnKeyType: 'done',
    inputTimeout: null,
    currentAddress: '',
    city: {},
    tagMap: {
      'school': '学校',
      'home': '家',
      'company': '公司'
    }
  }),
  beforeCreate() {
    initIconfont()
    titlebar('选择城市')
  },
  created() {
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.scrollerStyle = { height: pageHeight + 'px' }

    this.reAutoLocation()

    receiveMessage('user:address:city:part', (data) => {
      if (data.status === 0) {
        this.requestUserAddressList()
      }
    })

    this.requestUserAddressList()
  },
  methods: {
    userAddressListItemClicked(i) {
      let rs = this.userAddressList[i]
      this.city.name = rs.addressName
      let location = [rs.addressLongitude, rs.addressLatitude].join(',')
      this.regeo(location)
    },
    requestUserAddressList() {
      getStorageVal('way:user').then((data) => {
        let user = JSON.parse(data)
        let params = {
          userLoginId: user.userLoginId
        }, headers = {
          token: user.userToken
        }
        queryUserAddressList(params, headers).then((data) => {
          if (data.code !== 200) {
            return
          }
          if (this.userAddressList.length > 0) {
            this.userAddressList.splice(0, this.userAddressList.length)
          }
          let resultList = data.data.userAddressBoList
          resultList.forEach(item => {
            let userAddress = {
              id: item.id,
              addressName: item.name,
              addressTag: item.tag,
              addressTagName: this.tagMap[item.tag],
              addressLongitude: item.longitude,
              addressLatitude: item.latitude
            }
            this.userAddressList.push(userAddress)
          })
        })
      })
    },
    wxcIndexlistItemClicked(i) {
      console.log(i)
      let rs = this.searchList[i]
      this.city = { name: rs.addressTitle }
      this.regeo(rs.addressLocation)
    },
    wxcSearchbarInputOnInput(e) {
      this.keywords = e.value
      if (this.inputTimeout) {
        clearTimeout(this.inputTimeout)
      }
      let _this = this
      this.inputTimeout = setTimeout(() => {
        this.inputTipsFetch()
      }, 500)
    },
    inputTipsFetch() {
      inputtips({keywords: this.keywords}).then((data) => {
          if (data.code != 200) {
            return
          }
          this.searchList.splice(0, this.searchList.length)
          let inputTipsList = data.data
          inputTipsList.forEach(tip => {
            this.searchList.push({
              addressTitle: tip.name,
              addressDesc: tip.district + tip.address,
              addressLocation: tip.location
            })
          })
        },
        (error) => {
          console.error('failure', error)
        }
      )
    },
    regeo(location) {
      regeo({location: location}).then((data) => {
          if (data.code != 200) {
            return
          }

          let regeoData = data.data
          let cityCode = regeoData.cityCode

          let loc = location.split(',')

          this.city.lng = loc[0]
          this.city.lat = loc[1]
          this.city.cityCode = cityCode
          getStorageVal('way:user').then(
            data => {
              let user = JSON.parse(data)
              updateUserProfileAddress({
                userLoginId: user.userLoginId,
                addressName: this.city.name,
                addressLongitude: this.city.lng,
                addressLatitude: this.city.lat
              }, {
                token: user.userToken
              })
            },
            error => {
            }
          )

          this.storeLocalWayCity()
        },
        (error) => {
          console.error('failure', error)
        }
      )
    },
    storeLocalWayCity() {
      setStorageVal('way:city', JSON.stringify(this.city)).then(data => {
        console.log('设置city data')
        postMessage('m:way:city')
        navigator.pop({
          animated: 'true'
        })
      })
    },
    toMyAddressClicked() {
      getStorageVal('way:user').then((data) => {
        navigator.push({
          url: getEntryUrl('views/address/list'),
          animated: 'true'
        })
      }, (error) => {
        navigator.push({
          url: getEntryUrl('views/user/login'),
          animated: 'true'
        })
      })
    },
    autoLocation(gpsLocation) {
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
              this.city.name = regeoName
              this.city.lng = regeoLocation.split(',')[0]
              this.city.lat = regeoLocation.split(',')[1]
              this.city.cityCode = regeoCityCode
              this.currentAddress = regeoName
              console.log('自动定位结果', JSON.stringify(this.city))
            })
          });
        }
      })
    },
    autoLocationCellClicked() {
      this.storeLocalWayCity()
    },
    reAutoLocation() {
      this.currentAddress = '定位中...'
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
          this.autoLocation([lng, ',', lat].join(''))
        } else {
          this.currentAddress = ''
        }
      }
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
</style>
