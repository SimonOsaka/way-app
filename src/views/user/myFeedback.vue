<template>
    <div>
      <navbar title="我的反馈建议" backgroundColor="#45b5f0" height="88"></navbar>  
      <scroller v-if="!noData" @loadmore="loadMore" loadmoreoffset="10" @scroll="feebackScrollHandler" :style="scrollerStyle">
        <div v-for="(item, i) in feedback.list" :key="i" :ref="'cell'+i">
          <div class="cell_split" v-if="i != 0"></div>
          <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false">
            <text slot="label">{{ feedbackTypeMap[item.feedbackType] }}</text>
            <text slot="value">{{ item.feedbackTime }}</text>
          </wxc-cell>
          <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
            <text slot="title">{{ item.feedbackContent }}</text>
          </wxc-cell>
        </div>
      </scroller>
      <div v-else>
        <text class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe66f;</text>
        <text style="font-size:32px; margin-top: 20px; text-align: center; color: #cccccc;"> 还没有反馈建议 </text>
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
import navbar from '../../include/navbar.vue'
import { queryUserFeedbackList, feedbackTypeMap } from '../../api/user.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar, WxcButton },
  data: () => ({
    feedback: {
      list: [],
      pageNum: 1,
      pageSize: 10
    },
    feedbackTypeMap: {},
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
    titlebar('我的反馈建议')
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
        this.requestFeedbackTypeMap()
      },
      error => {
        this.my.userLoginId = 0
        navigator.pop()
      }
    )
  },
  methods: {
    loadMore(event) {
      this.requestQueryUserFeedbackList()
    },
    feebackScrollHandler(e) {
      console.log(e.contentOffset.y)
    },
    requestFeedbackTypeMap() {
      feedbackTypeMap({
        userLoginId: this.my.userLoginId
        },{
        token: this.my.userToken
      }).then(response => {
        if (response.code != 200) {
          return
        }
        this.feedbackTypeMap = response.data.feedbackTypeMap
        this.requestQueryUserFeedbackList()
      })
    },
    requestQueryUserFeedbackList() {
      queryUserFeedbackList({
        userLoginId: this.my.userLoginId,
        pageNum: this.feedback.pageNum++,
        pageSize: this.feedback.pageSize
      }, {
        token: this.my.userToken
      }).then(response => {
        if (response.code != 200) {
          return
        }

        const list = response.data.userFeedbackBoList
        if (list.length !== 0) {
          list.forEach(feedback => {
            this.feedback.list.push(feedback)
          })
        }
        this.noData = this.feedback.list.length === 0
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
.cell_split {
  height: 10px;
  background-color: #f2f3f4;
}
.red {
  color: red;
}
</style>
