<template>
  <div>
    <navbar :title="navbarTitle" backgroundColor="#45b5f0" height="88"></navbar>
    <scroller class="scroller" :style="scrollerStyle">
      <div>
        <wxc-cell label="地址" :has-arrow="true" @wxcCellClicked="toSelectCityAddressClicked">
          <div slot="title">
            <input ref="widgetUserAddressInput" type="text" placeholder="固定的地址" class="input" :value="params.addressName" @focus="userAddressOnfocus"/>
          </div>
        </wxc-cell>
      </div>
      <div>
        <wxc-cell label="标签" :has-arrow="false">
          <div slot="title">
             <wxc-grid-select
              :single="true"
              :cols="4"
              :customStyles="gridCustomStyles"
              :list="gridData"
              @select="params => onSelect('res3', params)">
            </wxc-grid-select>
          </div>
        </wxc-cell>
      </div>
      <div class="save_btn">
        <wxc-button type="green" text="确定" @wxcButtonClicked="saveUserAddressBtnClick"></wxc-button>
      </div>
    </scroller>
  </div>
</template>

<script>
import { WxcCell, Utils, WxcGridSelect, WxcButton } from "weex-ui";
import navbar from "../../include/navbar.vue";
import {
  postMessage,
  getStorageVal,
  getEntryUrl,
  setStorageVal,
  titlebar,
  removeStorage
} from "../../tools/utils.js";
import { createUserAddress, updateUserAddress } from '../../api/user.js'
const navigator = weex.requireModule("navigator");
const modal = weex.requireModule('modal')

export default {
  components: { navbar, WxcCell, WxcGridSelect, WxcButton },
  data() {
    return {
      gridCustomStyles: {
        lineSpacing: '14px',
        width: '120px',
        height: '50px',
        icon: '',
        color: '#333333',
        checkedColor: '#ffffff',
        disabledColor: '#eeeeee',
        borderColor: '#666666',
        checkedBorderColor: '#ffb200',
        backgroundColor: '#ffffff',
        checkedBackgroundColor: '#ffb200'
      },
      gridData: [
        {
          'title': '公司',
          'tag': 'company',
          'checked': false
        },
        {
          'title': '学校',
          'tag': 'school',
          'checked': false
        },
        {
          'title': '家',
          'tag': 'home',
          'checked': false
        }
      ],
      navbarTitle: '',
      params: {
        "id": "",
        "userLoginId": "",
        "addressName": "",
        "addressLongitude": 0,
        "addressLatitude": 0,
        "addressTag": ""
      },
      headers: {
        token: ''
      }
    }
  },
  created() {
    const pageHeight = Utils.env.getPageHeight();
    const screenHeight = Utils.env.getScreenHeight();
    this.scrollerStyle = { height: pageHeight + "px" };

    getStorageVal('user:address:edit').then((data) => {
      console.log('修改地址', data)
      this.navbarTitle = '修改地址'
      titlebar(this.navbarTitle);
      let userAddressObj = JSON.parse(data)
      this.params.id = userAddressObj.id
      this.params.addressName = userAddressObj.addressName
      this.params.addressLongitude = userAddressObj.addressLongitude
      this.params.addressLatitude = userAddressObj.addressLatitude
      this.params.addressTag = userAddressObj.addressTag
      switch (this.params.addressTag) {
        case 'home':
          this.gridData[2]['checked'] = true
          this.gridData.$set(2, this.gridData[2])
          break
        case 'school':
          this.gridData[1]['checked'] = true
          this.gridData.$set(1, this.gridData[1])
          break
        case 'home':
          this.gridData[0]['checked'] = true
          this.gridData.$set(0, this.gridData[0])
          break
      }
      removeStorage('user:address:edit')
      console.log('修改地址gridData', JSON.stringify(this.gridData))
    }, (error) => {
      this.navbarTitle = '新增地址'
      titlebar(this.navbarTitle);
    })
  },
  methods: {
    userAddressOnfocus() {
      this.$refs.widgetUserAddressInput.blur()
      this.toSelectCityAddressClicked()
    },
    onSelect(res, { selectIndex, checked, checkedList }) {
      console.log(res, selectIndex, checked, checkedList.length)
      if (checked) {
        this.params.addressTag = this.gridData[selectIndex].tag
      } else {
        this.params.addressTag = ''
      }
    },
    saveUserAddressBtnClick() {
      if (this.params.addressName === '') {
        modal.toast({
          message: '地址必须输入',
          duration: 1
        })
        return
      }
      this.requestSaveOrUpdateUserAddress()
    },
    requestSaveOrUpdateUserAddress() {
      getStorageVal('way:user').then(
        (data) => {
          let user = JSON.parse(data)
          this.params.userLoginId = user.userLoginId
          this.headers.token = user.userToken
          if (this.params.id && this.params.id > 0) {
            updateUserAddress(this.params, this.headers).then(data => {
              postMessage('user:address:refresh', 'success')
              navigator.pop({
                animated: 'true'
              })
            })
          } else {
            createUserAddress(this.params, this.headers).then(data => {
              postMessage('user:address:refresh', 'success')
              navigator.pop({
                animated: 'true'
              })
            })
          }
      },
      error => {
        navigator.push({
          url: getEntryUrl('views/user/login'),
          animated: 'true'
        })
      })
    },
    toSelectCityAddressClicked() {
      console.log('跳转到选择城市地址')
    }
  }
};
</script>

<style scoped>
.scroller {
  width: 750px;
}
.save_btn {
  margin-top: 20px;
  align-items: center;
}
</style>
