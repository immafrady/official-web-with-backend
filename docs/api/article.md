# 文章列表

## 新增文章

- url: `/article/new`
- method: `POST`
- content-type: `application/json`
- params: 请查看 - `IArticleCreateOptions`
- authed

## 更新文章

- url: `/article/detail/${id}`
- method: `PUT`
- content-type: `application/json`
- params: 请查看 - `IArticleModifyOptions`
- authed

## 删除文章

- url: `/article/detail/${id}`
- method: `DELETE`
- params: id - 文章id
- authed

## 更新文章状态

- url: `/article/detail/:id/status`
- method: `PUT`
- params: id - 文章id
- authed

## 查看文章详情（用户）

- url: `/article/detail/${id}`
- method: `GET`
- params: id - 文章id

## 查看文章详情（管理员）

- url: `/article/admin/detail/${id}`
- method: `GET`
- params: id - 文章id
- authed

## 查看文章列表（用户）

- url: `/article/detail/list`
- method: `GET`
- content-type: `application/x-www-form-urlencoded`
- params: `IArticleListOptions`

## 查看文章列表（管理员）

- url: `/article/admin/detail/list`
- method: `GET`
- content-type: `application/x-www-form-urlencoded`
- params: `IArticleListOptions`
- authed
