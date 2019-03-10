import { http } from "../tools/http.js";
export function shopFollow(params, headers) {
  return http({
    method: "POST",
    url: "/shop/follow",
    headers: headers,
    body: params
  });
}

export function cancelFollow(params, headers) {
  return http({
    method: "POST",
    url: "/shop/follow/cancel",
    headers: headers,
    body: params
  });
}

export function getShopDetail(params, headers) {
  return http({
    method: 'POST',
    url: '/shop/detail',
    headers: headers,
    body: params
  })
}
