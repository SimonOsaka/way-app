export default {
  // 使用 iconFont 模式的tab title配置
  tabIconFontTitles: [
    {
      title: '首页',
      codePoint: '\ue6b8'
    },
    {
      title: '优惠信息',
      codePoint: '\ue752',
      badge: 0
    },
    {
      title: '我的主页',
      codePoint: '\ue7d6',
      dot: false
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#333333',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: false,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#333333',
    activeIconFontColor: 'red',
    iconFontUrl: 'local:///font/iconfont.ttf'
  }
}
