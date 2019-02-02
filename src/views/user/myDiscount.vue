<template>
    <div>
      <navbar title="已发布优惠" backgroundColor="#45b5f0" height="88"></navbar>  
      <scroller v-if="!noData" @loadmore="loadMore" loadmoreoffset="10" @scroll="discountScrollHandler" :style="scrollerStyle">
        <div class="m_cell" v-for="(discountObj, i) in discount.list" :key="i" :ref="'cell'+i">
          <div class="m_cell_split" v-if="i != 0"></div>
          <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false">
            <image slot="label" class="image" resize="cover" :src="discountObj.commodityImageUrl"></image>
            <div slot="title">
              <div style="flex-direction: row;">
                <text class="c_name" style="width: 480px;">{{discountObj.commodityName}}</text>
              </div>
              <div style="flex-direction:row;">
                <text class="c_name c_money" style="padding-top:4px;">¥{{discountObj.commodityPrice}}</text>
              </div>
              <div :key="i" :index="i" style="flex-direction: row; padding-left: 20px; margin-top: 10px;">
                  <text class="iconfont red" style="font-size: 24px;">&#xe651;</text>
                  <text class="c_real" style="color: #ccc; width: 500px;">{{discountObj.shopPosition}}</text>
              </div>
            </div>
          </wxc-cell>
        </div>
      </scroller>
      <div class="m_cell" v-else>
        <text class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe66f;</text>
        <text style="font-size:32px; margin-top: 20px; text-align: center; color: #cccccc;"> 未发布优惠信息 </text>
      </div>
    </div>
</template>

<script>
import { WxcCell, Utils } from 'weex-ui'
import {
  initIconfont,
  setPageTitle,
  getStorageVal,
  titlebar
} from '../../tools/utils.js'
import { http } from '../../tools/http.js'
import navbar from '../../include/navbar.vue'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar },
  data: () => ({
    discount: {
      list: [],
      pageNum: 1,
      pageSize: 10
    },
    my: {
      userLoginId: 0,
      userToken: ''
    },
    noData: false,
    scrollerStyle: {
      width: '750px'
    }
  }),
  created() {
    initIconfont()
    titlebar('已发布优惠')
    const pageHeight = Utils.env.getPageHeight()
    const screenHeight = Utils.env.getScreenHeight()
    this.scrollerStyle = {
      height: pageHeight + 'px'
    }
    getStorageVal('way:user').then(
      data => {
        let user = JSON.parse(data)
        this.my.userLoginId = user.userLoginId
        this.my.userToken = user.userToken
        this.getDiscountList()
      },
      error => {
        this.my.userLoginId = 0
        navigator.pop()
      }
    )
  },
  methods: {
    loadMore(event) {
      this.getDiscountList()
    },
    discountScrollHandler(e) {
      console.log(e.contentOffset.y)
    },
    getDiscountList() {
      console.log('加载优惠信息列表')
      let _this = this
      http({
        method: 'POST',
        url: '/discount/user',
        headers: {
          token: this.my.userToken
        },
        body: {
          userLoginId: this.my.userLoginId,
          pageNum: this.discount.pageNum++,
          pageSize: this.discount.pageSize
        }
      }).then(function(data) {
        if (data.code != 200) {
          return
        }

        if (data.data.length !== 0) {
          data.data.forEach(discount => {
            _this.discount.list.push(discount)
          })
        }
        _this.noData = _this.discount.list.length === 0
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
.image {
  width: 140px;
  height: 140px;
  margin-right: 10px;
  border-radius: 10px;
}
.c_name {
  padding-left: 20px;
}
.c_money {
  color: red;
}
.red {
  color: red;
}
.c_real {
  font-size: 24px;
}
</style>
