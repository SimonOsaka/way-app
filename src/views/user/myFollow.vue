<template>
    <div>
      <navbar title="我的关注" backgroundColor="#45b5f0" height="88"></navbar>  
      <scroller v-if="!noData" @loadmore="loadMore" loadmoreoffset="10" @scroll="followScrollHandler" :style="scrollerStyle">
        <div class="m_cell" v-for="(item, i) in follow.list" :key="i" :ref="'cell'+i">
          <div class="m_cell_split" v-if="i != 0"></div>
          <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false">
            <image slot="label" class="image" resize="cover" :src="item.shop.shopLogoUrl"></image>
            <div slot="title">
              <div style="flex-direction: row;">
                <text class="c_name" style="width: 480px;">{{item.shop.shopName}}</text>
              </div>
              <div :key="i" :index="i" style="flex-direction: row; padding-left: 20px; margin-top: 40px;">
                  <text class="iconfont red" style="font-size: 24px;">&#xe651;</text>
                  <text class="c_real" style="color: #ccc; width: 480px;">{{item.shop.shopAddress}}</text>
              </div>
            </div>
            <div slot="value">
              <wxc-button v-if="item.hasFollowed === 0" type="red" size="small" text="取消关注" @wxcButtonClicked="btnCancelFollowClicked(i)"></wxc-button>
              <text v-else class="c_name">已取消</text>
            </div>
          </wxc-cell>
        </div>
      </scroller>
      <div class="m_cell" v-else>
        <text class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe66f;</text>
        <text style="font-size:32px; margin-top: 20px; text-align: center; color: #cccccc;"> 还没有关注 </text>
      </div>
    </div>
</template>

<script>
import { WxcCell, Utils, WxcButton } from 'weex-ui'
import {
  initIconfont,
  setPageTitle,
  getStorageVal,
  titlebar
} from '../../tools/utils.js'
import { http } from '../../tools/http.js'
import navbar from '../../include/navbar.vue'
import { userShopFollows } from '../../api/user.js'
import { cancelFollow } from '../../api/shop.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar, WxcButton },
  data: () => ({
    follow: {
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
    titlebar('我的关注')
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
        this.requestGetFollowList()
      },
      error => {
        this.my.userLoginId = 0
        navigator.pop()
      }
    )
  },
  methods: {
    loadMore(event) {
      this.requestGetFollowList()
    },
    followScrollHandler(e) {
      console.log(e.contentOffset.y)
    },
    requestGetFollowList() {
      console.log('加载我的关注列表')
      let _this = this
      userShopFollows({
        userLoginId: this.my.userLoginId,
        pageNum: this.follow.pageNum++,
        pageSize: this.follow.pageSize
      }, {
        token: this.my.userToken
      }).then(function(data) {
        if (data.code != 200) {
          return
        }

        let list = data.data.shopFollowList
        if (list.length !== 0) {
          list.forEach(follow => {
            _this.follow.list.push(follow)
          })
        }
        _this.noData = _this.follow.list.length === 0
      })
    },
    btnCancelFollowClicked(i) {
      cancelFollow({
        userLoginId: this.my.userLoginId
      }, {
        token: this.my.userToken
      }).then(()=>{
        let item = this.follow.list[i]
        item.hasFollowed = 1
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
