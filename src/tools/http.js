const referer = 'ios.jicu.vip'
export function http(OPTIONS = {}) {
  if (!checkNetworkStatus()) {
    console.log('终止网络请求')
    return new Promise((resolve, reject) => {
      reject({ statusText: '网络无连接' })
    })
  }
  let DEFAULT_OPTION = {
    method: 'GET',
    type: 'json', // json、text、jsonp
    headers: {}
  }

  const modal = weex.requireModule('modal')
  const stream = weex.requireModule('stream')
  const platform = weex.config.env.platform.toLowerCase()

  // 正式环境域名
  let apiRoot = 'http://api.jicu.vip' //'http://your.prod.domain.com'

  let options = Object.assign(DEFAULT_OPTION, OPTIONS)
  options.url = apiRoot + options.url
  options.headers['referer'] = referer
  if (options.method === 'GET') {
    if (options.params) {
      let paramStr = Object.keys(options.params).reduce(
        (acc, key) => `${acc}${key}=${options.params[key]}&`,
        '?appVersion=' + getAppVersion() + '&'
      )
      options.url = options.url.concat(paramStr).slice(0, -1)
    }
  } else if (options.method === 'POST') {
    if (options.body) {
      options.body = JSON.stringify(
        Object.assign(options.body, { appVerion: getAppVersion() })
      )
      options.headers['Content-Type'] = 'application/json'
    }
  }
  console.log('请求选项', options)
  return new Promise((resolve, reject) => {
    stream.fetch(options, response => {
      if (response.ok) {
        console.log('stream response', response)
        resolve(response.data)
      } else {
        modal.toast({
          message: `网络无连接`,
          duration: 1
        })
        console.log('stream reject', response)
        reject(response)
      }
    })
  })
}

function checkNetworkStatus() {
  const network = weex.requireModule('network')
  let ok = true
  network.getNetworkStatus(function(statusText) {
    if (statusText === 'NONE') {
      console.log('checkNetworkStatus', '当前没有网络')
      weex.requireModule('modal').toast({
        message: '网络无连接',
        duration: 1
      })
      ok = false
    } else {
      console.log('网络连接正常')
    }
  })
  return ok
}

function getAppVersion() {
  let appVertionText = ''
  console.log('http.js', '获取appVersion', '开始', appVertionText)
  const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
  if (!isIOS) {
    appVertionText = weex.requireModule('version').getAppVersion()
    console.log('http.js', 'app版本，appVertionText=', appVertionText)
  } else {
    weex.requireModule('version').getAppVersion(function(versionText) {
      console.log('http.js', 'app版本', versionText)
      appVertionText = versionText
    })
  }
  console.log('http.js', '获取appVersion', '结束', appVertionText)
  return appVertionText
}
