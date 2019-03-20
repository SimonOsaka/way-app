import { http } from "../tools/http.js";
/**
 * 关键词查询地理位置信息
 * @param params {keywords:""}
 */
export function inputtips(params) {
  return http({
    method: 'POST',
    url: '/amap/inputtips',
    headers: {},
    body: params
  })
}

/**
 * 经纬度查询地理位置信息
 * @param params {location:""}
 */
export function regeo(params) {
  return http({
    method: 'POST',
    url: '/amap/regeo',
    headers: {},
    body: params
  })
}

/**
 * 坐标转换gps转高德
 * @param params 例如：'{"locationList":["112,39"]}'
 */
export function coordinateConvert(params) {
  return http({
    method: 'POST',
    url: '/amap/convert',
    headers: {},
    body: params
  })
}
