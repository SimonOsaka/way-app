<template>
    <div>
      <navbar title="文章详情" backgroundColor="#45b5f0" height="88"></navbar>  
      <scroller :style="scrollerStyle">
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <div slot="title">
            <text class="title">{{ subject }}</text>
          </div>
          <div slot="value">
            <text class="time">{{ publishTime }}</text>
          </div>
        </wxc-cell>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false" @wxcCellClicked="commodityCellClick">
          <div slot="title">
            <rich-text :html="content" style="flex: 1"></rich-text>
          </div>
        </wxc-cell>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false" @wxcCellClicked="commodityCellClick">
          <image slot="label" class="image" resize="cover" :src="commodityImage"></image>
          <div slot="title">
            <text class="c_name">{{commodityName}}</text>
          </div>
        </wxc-cell>
      </scroller>
    </div>
</template>

<script>
import { WxcCell, Utils } from 'weex-ui'
import {
  initIconfont,
  setPageTitle,
  setStorageVal,
  getStorageVal,
  getEntryUrl,
  titlebar
} from '../../../tools/utils.js'
import { http } from '../../../tools/http.js'
import navbar from '../../../include/navbar.vue'
import { fetchArticle } from '../../../api/article.js'
import richText from '../../../components/rich-text.vue'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar, richText },
  data: () => ({
    postId: undefined,
    content: null,
    subject: null,
    publishTime: null,
    commodityId: undefined,
    commodityName: null,
    commodityImage: null,
    my: {
      userLoginId: 0,
      userToken: ''
    },
    scrollerStyle: {
      width: '750px'
    }
  }),
  created() {
    initIconfont()
    titlebar('文章详情')
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
        this.initDetail()
      },
      error => {
        this.my.userLoginId = 0
        navigator.pop()
      }
    )
  },
  methods: {
    initDetail() {
      console.log('初始化文章详情')
      let _this = this
      getStorageVal('way:article:postId').then(
        data => {
          this.postId = data
          getStorageVal('way:user').then(data=> {
            let user = JSON.parse(data)
            _this.my.userLoginId = user.userLoginId
            _this.my.userToken = user.userToken
            _this.getArticleDetail()
          }, e => {
            navigator.pop()
            return
          })
        },
        e => {
          navigator.pop()
          return
        }
      )
    },
    getArticleDetail() {
      console.log('读取文章详情')
      fetchArticle(this.postId, {
        token: this.my.userToken
      }).then(response => {
        this.subject = response.subject
        this.publishTime = response.publishTime
        this.content = response.postContent
        this.content = '<html><head><title>content</title></head><body>' + this.content + '</body></html>'
        this.commodityId = response.commodityId
        this.commodityName = response.commodityName
        this.commodityImage = response.commodityImage
      })
    },
    commodityCellClick() {
      setStorageVal('way:commodity:id', this.commodityId)
      navigator.push({
        url: getEntryUrl('views/commodity/detail'),
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
.image {
  width: 140px;
  height: 140px;
  margin-right: 10px;
  border-radius: 10px;
}
.c_name {
  padding-left: 20px;
}
.title {
  font-size: 48px;
}
.time {
  color: #ccc;
  font-size: 24px;
}
.red {
  color: red;
}
.c_real {
  font-size: 24px;
}
.c_cancel_text {
  font-size: 28px;
}
</style>
