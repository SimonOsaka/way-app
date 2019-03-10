import { http } from "../tools/http.js";
export function syncUserDevice(params) {
  return http({
    method: "POST",
    url: "/user/device/sync",
    headers: {},
    body: params
  });
}

export function userShopFollows(params, headers) {
  return http({
    method: "POST",
    url: "/shop/user/follows",
    headers: headers,
    body: params
  });
}
