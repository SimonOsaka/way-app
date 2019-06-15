<template>
    <div>
      <navbar title="反馈建议" backgroundColor="#45b5f0" height="88"></navbar>  
      <scroller class="scroller" :style="scrollerStyle">
        <wxc-cell title="我的反馈建议" @wxcCellClicked="myFeedbackClicked" :has-top-border="false" :has-arrow="true"/>
        <div class="cell_split"></div>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <text slot="label" class="title">反馈建议类型</text>
        </wxc-cell>
        <wxc-radio :list="feedbackTypeRadioList" :config="radioConfig" @wxcRadioListChecked="wxcRadioListChecked"></wxc-radio>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <text slot="label" class="title">反馈建议内容</text>
        </wxc-cell>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <div slot="title" class="flex_column_center">
            <textarea class="textarea" :rows="5" @input="oninput"></textarea>
          </div>
        </wxc-cell>
        <div class="cell_split"></div>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <div slot="title" class="flex_column_center">
            <wxc-button text="确定" type="blue" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
          </div>
        </wxc-cell>
      </scroller>
    </div>
</template>

<script>
import { WxcCell, Utils, WxcButton, WxcRadio } from 'weex-ui'
import {
  initIconfont,
  titlebar,
  getStorageVal,
  getEntryUrl
} from '../../tools/utils.js'
import { addFeedback } from '../../api/user.js'
import navbar from '../../include/navbar.vue'
const navigator = weex.requireModule('navigator')
const version = weex.requireModule('version')
const modal = weex.requireModule('modal')

export default {
  components: { WxcCell, navbar, WxcButton, WxcRadio },
  data: () => ({
    feedback: {
      userLoginId: 0,
      feedbackOsType: 0,
      feedbackType: 0,
      feedbackAppVersion: '',
      feedbackContent: ''
    },
    userToken: '',
    scrollerStyle: {
      width: '750px'
    },
    feedbackTypeRadioList: [
      { title: '    商家反馈', value: 1 },
      { title: '    商品反馈', value: 2 },
      { title: '    优惠反馈', value: 3 },
      { title: '    账号反馈', value: 4 },
      { title: '    投诉建议', value: 99 }
    ],
    radioConfig: {
      checkedColor: '#0099CC'
    }
  }),
  created() {
    initIconfont()
    titlebar('反馈建议')
    const pageHeight = Utils.env.getPageHeight()
    this.scrollerStyle = {
      height: pageHeight + 'px'
    }

    getStorageVal('way:user').then(
      data => {
        let user = JSON.parse(data)
        this.feedback.userLoginId = user.userLoginId
        this.userToken = user.userToken
      },
      error => {
        this.feedback.userLoginId = 0
        navigator.pop()
      }
    )

    let appVertionText = ''
    const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
    if (!isIOS) {
      appVertionText = version.getAppVersion()
      this.feedback.feedbackOsType = 1
      console.log('feedback', 'app版本，appVertionText=', appVertionText)
    } else {
      version.getAppVersion(function(versionText) {
        console.log('feedback', 'app版本', versionText)
        appVertionText = versionText
      })
      this.feedback.feedbackOsType = 2
    }
    this.feedback.feedbackAppVersion = appVertionText
  },
  methods: {
    wxcRadioListChecked(event) {
      this.feedback.feedbackType = event.value
    },
    wxcButtonClicked() {
      if (!this.check()) {
        return
      }
      addFeedback(this.feedback, {
        token: this.userToken
      }).then(function(data) {
        if (data.code != 200) {
          return
        }

        modal.toast({
          message: '感谢您的反馈！',
          duration: 1
        })

        navigator.pop({ animated: "true" })
      })
    },
    oninput(event) {
      console.log('oninput:', event.value)
      this.feedback.feedbackContent = event.value
    },
    check() {
      if (this.feedback.userLoginId === 0) {
        return false
      } else if (this.feedback.feedbackOsType === 0) {
        return false
      } else if (this.feedback.feedbackType === 0) {
        modal.toast({
          message: '请选择反馈建议类型！',
          duration: 1
        })
        return false
      } else if (this.feedback.feedbackAppVersion === '') {
        return false
      } else if (this.feedback.feedbackContent.split('\n').join('').replace(/ /g, '') === '') {
        modal.toast({
          message: '请输入反馈建议内容！',
          duration: 1
        })
        return false
      } else if (this.feedback.feedbackContent.length > 100) {
        modal.toast({
          message: '反馈建议内容请控制在100字以内！',
          duration: 1
        })
        return false
      }

      return true
    },
    myFeedbackClicked() {
      navigator.push({
        url: getEntryUrl('views/user/myFeedback'),
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
.scroller {
  flex: 1;
}
.flex_column_center {
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cell_split {
  height: 10px;
  background-color: #f2f3f4;
}
.title {
  font-size: 32px;
  color: #FF6666;
  font-weight: bold;
}
.textarea {
  width: 650px;
  color: #666666;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
}
</style>
