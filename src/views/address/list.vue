<template>
  <div>
    <navbar title="我的地址" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div>
        <wxc-cell title="新增地址" :has-arrow="true" @wxcCellClicked="toCreateUserAddressClicked"></wxc-cell>
      </div>
      <div>
        <wxc-cell value="item.addressTagName"  v-for="(item, i) in userAddressList" :key="i" :has-arrow="false">
          <div slot="title" style="flex-direction: row;">
            <text style="color: #333333; font-size: 30px; line-height: 40px;">{{item.addressName}}</text>
            <wxc-tag v-if="item.addressTagName" type="solid" tag-color="#38f" font-color="#ffffff" style="margin-left: 8px; margin-top: 8px;" :value="item.addressTagName"></wxc-tag>
          </div>
          <div slot="value" style="flex-direction: row;">
            <text class="iconfont" style="font-size: 30px;" @click="toUpdateUserAddressClicked(i)">&#xe7e9;</text>
            <text class="iconfont" style="font-size: 30px; margin-left: 20px;" @click="deleteUserAddressClicked(i)">&#xe80b;</text>
          </div>
        </wxc-cell>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcCell, Utils, WxcTag } from 'weex-ui'
import navbar from '../../include/navbar.vue'
import {
  postMessage,
  receiveMessage,
  getStorageVal,
  setPageTitle,
  getEntryUrl,
  setStorageVal,
  titlebar,
  initIconfont
} from '../../tools/utils.js'
import { deleteUserAddress, queryUserAddressList } from '../../api/user.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar, WxcTag },
  data: () => ({
    userAddressList: [],
    tagMap: {
      'school': '学校',
      'home': '家',
      'company': '公司'
    }
  }),
  beforeCreate() {
    initIconfont()
    titlebar('我的地址')
  },
  created() {
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.scrollerStyle = { height: pageHeight + 'px' }

    receiveMessage('user:address:refresh', (success) => {
      this.userAddressList = []
      this.initData()
    })
    
    this.initData()
  },
  beforeDestroy() {
    postMessage('user:address:city:part', 'refresh')
  },
  methods: {
    initData() {
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
    toUpdateUserAddressClicked(i) {
      setStorageVal('user:address:edit', JSON.stringify(this.userAddressList[i])).then(data => {
        navigator.push({
          url: getEntryUrl('views/address/edit'),
          animated: 'true'
        })
      })
    },
    deleteUserAddressClicked(i) {
      var modal = weex.requireModule('modal')
      modal.confirm({
          message: '删除地址吗？',
          okTitle: '删除',
          cancelTitle: '取消',
          duration: 0.3
      }, (value) => {
          if (value === '删除') {
            this.requestDeleteUserAddress(i)
          }
      })
    },
    requestDeleteUserAddress(i) {
      getStorageVal('way:user').then((data) => {
        let user = JSON.parse(data)
        let params = {
          id: this.userAddressList[i].id,
          userLoginId: user.userLoginId
        }
        let headers = {
          token: user.userToken
        }
        deleteUserAddress(params, headers).then((data) => {
          if (data.code === 200) {
            this.userAddressList.splice(i, 1)
          }
        })
      })
    },
    toCreateUserAddressClicked() {
      navigator.push({
        url: getEntryUrl('views/address/edit'),
        animated: 'true'
      })
    },
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
