import { http } from "../tools/http.js";
export function getCommodityDetail(params) {
  return http({
    method: "POST",
    url: "/commodity/detail",
    headers: {},
    body: params
  });
}

export function getWeixinShareWebpage(params) {
  return http({
    method: "POST",
    url: "/weixin/webpage/commodity",
    headers: {},
    body: params
  });
}

export function queryRelationCommodity(params) {
  return http({
    method: "POST",
    url: "/commodity/queryRelationCommodity",
    headers: {},
    body: params
  });
}
