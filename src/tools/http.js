export function http(OPTIONS = {}) {
  let DEFAULT_OPTION = {
    method: "GET",
    type: "json", // json、text、jsonp
    headers: {}
  };

  const modal = weex.requireModule("modal");
  const stream = weex.requireModule("stream");
  const platform = weex.config.env.platform.toLowerCase();

  let apiRoot;
  if (platform === "web") {
    apiRoot = "http://api.jicu.vip"; //window.location.origin.replace(':8081', '')
  } else {
    if (process.env === "test") {
      // 测试环境域名
      apiRoot = window.location.origin.replace(":8081", ""); //'http://your.dev.domain.com'
    } else {
      // 正式环境域名
      apiRoot = "http://api.jicu.vip"; //'http://your.prod.domain.com'
    }
  }

  let options = Object.assign(DEFAULT_OPTION, OPTIONS);
  options.url = apiRoot + options.url;
  if (options.method === "GET") {
    if (options.params) {
      let paramStr = Object.keys(options.params).reduce(
        (acc, key) => `${acc}${key}=${options.params[key]}&`,
        "?"
      );
      options.url = options.url.concat(paramStr).slice(0, -1);
    }
  } else if (options.method === "POST") {
    if (options.body) {
      options.body = JSON.stringify(options.body);
      options.headers["Content-Type"] = "application/json";
    }
  }
  console.log("请求选项", options);
  return new Promise((resolve, reject) => {
    stream.fetch(options, response => {
      if (response.ok) {
        console.log("stream response", response);
        resolve(response.data);
      } else {
        modal.toast({
          message: `Somthing error, ${response.statusText}`,
          duration: 1
        });
        console.log("stream reject", response);
        reject(response);
      }
    });
  });
}
