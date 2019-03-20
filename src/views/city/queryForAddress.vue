<template>
  <div>
    <navbar :title="navbarTitle" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <wxc-searchbar ref="wxc-searchbar" placeholder="市区街" :always-show-cancel="alwaysShowCancel" :return-key-type="returnKeyType" @wxcSearchbarInputReturned="wxcSearchbarInputOnInput"></wxc-searchbar>
      <div v-if="searchList.length > 0">
        <wxc-cell v-for="(result, i) in searchList" :key="i" :title="result.addressTitle" :desc="result.addressDesc" @wxcCellClicked="wxcIndexlistItemClicked(i)" :has-arrow="false" :has-top-border="true">
        </wxc-cell>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcSearchbar, WxcCell, Utils } from 'weex-ui'
import navbar from '../../include/navbar.vue'
import {
  postMessage,
  getStorageVal,
  getEntryUrl,
  setStorageVal,
  titlebar
} from '../../tools/utils.js'
import { inputtips } from '../../api/amap.js'
const navigator = weex.requireModule('navigator')
const dictionary = weex.requireModule('dictionary')

export default {
  components: { WxcSearchbar, WxcCell, navbar },
  data: () => ({
    searchList: [],
    keywords: '',
    alwaysShowCancel: false,
    returnKeyType: 'send',
    navbarTitle: ''
  }),
  beforeCreate() {
    this.navbarTitle = '确认地址'
    titlebar(this.navbarTitle)
  },
  created() {
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.scrollerStyle = { height: pageHeight + 'px' }
  },
  methods: {
    wxcIndexlistItemClicked(i) {
      console.log(i)
      let city = this.searchList[i]
      postMessage('user:address:city', JSON.stringify(city))
      navigator.pop({
        animated: 'true'
      })
    },
    wxcSearchbarInputOnInput(e) {
      this.keywords = e.value
      this.inputTipsFetch()
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
              addressLongitude: tip.location.split(',')[0],
              addressLatitude: tip.location.split(',')[1]
            })
          })
        },
        (error) => {
          console.error('failure', error)
        }
      )
    }
  }
}
</script>

<style scoped>
.scroller {
  width: 750px;
}
</style>
