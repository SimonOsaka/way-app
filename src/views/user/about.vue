<template>
    <div>
      <navbar title="关于" backgroundColor="#45b5f0" height="88"></navbar>  
      <div>
        <wxc-cell :has-arrow="false" :has-top-border="false" :has-bottom-border="false" :has-margin="false" :auto-accessible="false">
          <text slot="label">当前版本</text>
          <text slot="value">{{ about.appVersion }}</text>
        </wxc-cell>
      </div>
    </div>
</template>

<script>
import { WxcCell, Utils } from 'weex-ui'
import {
  initIconfont,
  titlebar
} from '../../tools/utils.js'
import navbar from '../../include/navbar.vue'
const navigator = weex.requireModule('navigator')
const version = weex.requireModule('version')

export default {
  components: { WxcCell, navbar },
  data: () => ({
    about: {
      appVersion: '-'
    },
    scrollerStyle: {
      width: '750px'
    }
  }),
  created() {
    initIconfont()
    titlebar('关于')
    const pageHeight = Utils.env.getPageHeight()
    this.scrollerStyle = {
      height: pageHeight + 'px'
    }

  let appVertionText = ''
  const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
  if (!isIOS) {
    appVertionText = version.getAppVersion()
    console.log('about', 'app版本，appVertionText=', appVertionText)
  } else {
    version.getAppVersion(function(versionText) {
      console.log('about', 'app版本', versionText)
      appVertionText = versionText
    })
  }
    this.about.appVersion = appVertionText
  },
  methods: {
  }
}
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
  font-size: 32px;
  font-style: normal;
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
</style>
