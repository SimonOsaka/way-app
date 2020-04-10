<template>
    <div>
      <navbar title="文章列表" backgroundColor="#45b5f0" height="88"></navbar>  
      <scroller v-if="!noData" @loadmore="loadMore" loadmoreoffset="10" @scroll="scrollHandler" :style="scrollerStyle">
        <div class="m_cell" v-for="(row, i) in list" :key="i" :ref="'cell'+i">
          <div class="m_cell_split" v-if="i != 0"></div>
          <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="true" :has-margin="false" :auto-accessible="false" @wxcCellClicked="getArticleContent(row.postId)">
            <div slot="title">
              <div style="flex-direction: row;">
                <text class="c_name" style="width: 480px; font-size: 36px;">{{ row.subject }}</text>
              </div>
              <!--
              <div :key="i" :index="i" style="flex-direction: row; padding-left: 20px; margin-top: 40px;">
              </div>
              -->
            </div>
            <text slot="value" style="font-size:28px; color: #ccc;">
              {{ row.publishTime }}
            </text>
          </wxc-cell>
        </div>
      </scroller>
      <div class="m_cell" v-else>
        <text class="iconfont" style="font-size:128px; margin-top: 232px; text-align: center; color: #cccccc;">&#xe66f;</text>
        <text style="font-size:32px; margin-top: 20px; text-align: center; color: #cccccc;"> 无数据 </text>
      </div>
    </div>
</template>

<script>
import { WxcCell, Utils } from 'weex-ui'
import {
  initIconfont,
  setPageTitle,
  getStorageVal,
  setStorageVal,
  getEntryUrl,
  titlebar
} from '../../../tools/utils.js'
import { http } from '../../../tools/http.js'
import navbar from '../../../include/navbar.vue'
import { fetchArticleList } from '../../../api/article.js'
const navigator = weex.requireModule('navigator')

export default {
  components: { WxcCell, navbar },
  data: () => ({
    list: null,
    listQuery: {
      //keywords: null,
      page: 1,
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
    titlebar('文章列表')
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
        this.getList()
      },
      error => {
        this.my.userLoginId = 0
        navigator.pop()
      }
    )
  },
  methods: {
    loadMore(event) {
      this.listQuery.page++
      this.getList()
    },
    scrollHandler(e) {
      console.log(e.contentOffset.y)
    },
    getList() {
      console.log('加载文章列表')
      fetchArticleList(this.listQuery, {
        token: this.my.userToken
      }).then(response => {
        this.list = response.items
        this.noData = this.list.length === 0
      })
    },
    getArticleContent(id) {
      setStorageVal('way:article:postId', id)
      navigator.push({
        url: getEntryUrl('views/user/lab/articleDetail'),
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
.c_money {
  color: red;
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
