export function initIconfont() {
  let domModule = weex.requireModule('dom')
  domModule.addRule('fontFace', {
    fontFamily: 'iconfont',
    src: "url('local:///font/iconfont.ttf')"
  })
}

export function setPageTitle(title) {
  // if (document) {
  //   document.title = title || '页面'
  // }
}

export function setOgImage(imgUrl) {
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', imgUrl || '')
}

export function getEntryUrl(filename, parameters) {
  const bundleUrl = weex.config.bundleUrl

  // const host = /\/\/([^/]+?)\//.exec(bundleUrl)[0]

  const isAndroidAssets =
    bundleUrl.indexOf('your_current_IP') >= 0 ||
    bundleUrl.indexOf('file://assets/') >= 0
  const isiOSAssets =
    bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('.app') > 0

  const isWeb = weex.config.env.platform.toLowerCase() === 'web'
  let url = ''
  if (isWeb) {
    url = `/${filename}.html`
    if (parameters) {
      url += '?'
      let ps = []
      for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
          const val = parameters[key]
          ps.push(key + '=' + val)
        }
      }
      url += ps.join('&')
    }
  } else {
    if (isiOSAssets) {
      url = `${bundleUrl.split('bundlejs')[0]}/bundlejs/${filename}.js`
      console.log('getEntryUrl, ios', url)
    } else if (isAndroidAssets) {
      url = `${bundleUrl.split('/dist')[0]}/dist/${filename}.js`
    }
  }
  return url
}

export function getUrlSearch(url, name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = url.slice(url.indexOf('?') + 1).match(reg)
  if (r != null) {
    try {
      return decodeURIComponent(r[2])
    } catch (_e) {
      return null
    }
  }
  return null
}

export function isEmpty(obj) {
  if (obj == null || obj == '' || obj == 'undefined' || obj == 'null') {
    return true
  }
  if (obj.length > 0) return false
  if (obj.length === 0) return true
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false
  }
  return true
}

export function whichPlatform() {
  return weex.config.env.platform.toLowerCase()
}
const modal = weex.requireModule('modal')
export function getStorageValue(key) {
  const storage = weex.requireModule('storage')
  let storageVal = ''
  storage.getItem(key, e => {
    console.log(e)
    if (e.result == 'success') {
      storageVal = e.data
    }
  })
  return storageVal
}

export function setStorageVal(key, val) {
  modalDebug(key + val)
  return new Promise(function(resolve, reject) {
    modalDebug('promise...')
    const storage = weex.requireModule('storage')
    storage.setItem(key, val, e => {
      modalDebug('setItem result:' + JSON.stringify(e))
      if (e.result == 'success') {
        resolve(e.result)
      } else {
        reject(e)
      }
    })
  })
}

export function getStorageVal(key) {
  return new Promise(function(resolve, reject) {
    const storage = weex.requireModule('storage')
    let storageVal = ''
    storage.getItem(key, e => {
      console.log('getStorageVal', e)
      if (e.result == 'success') {
        storageVal = e.data
        resolve(storageVal)
      } else {
        reject(e)
      }
    })
  })
}

export function setStorageValue(key, val) {
  const storage = weex.requireModule('storage')
  storage.setItem(key, val, e => {
    if (e.result == 'success' && e.data == 'undefined') {
      console.log('setStorageValue', e)
      return true
    }
    return false
  })
}

export function postMessage(key, val) {
  if (whichPlatform() === 'web') {
    const storage = weex.requireModule('storage')
    storage.setItem(key, val, e => {
      console.info('发送消息', key, val, e)
      if (e.result == 'success' && e.data == 'undefined') {
        return true
      } else {
        return false
      }
    })
  } else {
    console.log('postMessage start', key, val)
    const a = new BroadcastChannel(key)
    a.postMessage(val)
    console.log('postMessage over', key, val)
  }
}

export function receiveMessage(key, success) {
  var data = {
    status: 1,
    val: undefined
  }
  console.log(key, whichPlatform())
  const b = new BroadcastChannel(key)
  b.onmessage = function(event) {
    console.log('b.onmessage', key, event)
    if (event.data) {
      data.val = event.data
    }
    data.status = 0
    success(data)
    console.log('接收消息返回', data)
  }
}

export function modalDebug(info = '') {
  if (false) {
    const modal = weex.requireModule('modal')
    modal.toast({
      message: info,
      duration: 3
    })
  }
}

export function getUrlKey(name) {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
        location.href
      ) || [, ''])[1].replace(/\+/g, '%20')
    ) || null
  )
}

export function titlebar(title) {
  // const isIOS = weex.config.env.platform.toLowerCase() === 'ios'
  // if (isIOS) {
  weex.requireModule('titlebar').setTitle(title)
  // }
}
