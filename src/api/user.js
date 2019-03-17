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

export function updateUserProfileAddress(params, headers) {
  return http({
    method: "POST",
    url: "/user/profile/address/update",
    headers: headers,
    body: params
  });
}

export function queryUserAddressList(params, headers) {
  return http({
    method: "POST",
    url: "/user/address/list",
    headers: headers,
    body: params
  });
}

export function createUserAddress(params, headers) {
  return http({
    method: "POST",
    url: "/user/address/create",
    headers: headers,
    body: params
  });
}

export function updateUserAddress(params, headers) {
  return http({
    method: "POST",
    url: "/user/address/update",
    headers: headers,
    body: params
  });
}

export function deleteUserAddress(params, headers) {
  return http({
    method: "POST",
    url: "/user/address/delete",
    headers: headers,
    body: params
  });
}