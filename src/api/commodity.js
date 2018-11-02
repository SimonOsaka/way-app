import { http } from "../tools/http.js";
export function getWeixinShareWebpage(params) {
  return http({
    method: "POST",
    url: "/weixin/webpage/commodity",
    headers: {},
    body: params
  });
}
