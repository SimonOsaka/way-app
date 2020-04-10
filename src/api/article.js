import { http } from "../tools/http.js";
export function fetchArticleList(params) {
  return http({
    method: "get",
    url: "/app/article",
    params
  });
}

export function fetchArticle(id, headers) {
  return http({
    url: '/app/article/' + id,
    method: 'get',
    headers
  })
}
