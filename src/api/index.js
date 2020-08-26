import { get, post } from "./services/instance";
import store from "../store";

// 文章列表
export const PostList = () => {
    return get("/posts/?page=" + store.state.page)
}
// 文章总数
export const TotalPost = () => {
    return get("/posts")
}
// 分类列表
export const CategoryList = () => {
    return get("/categorys")
}
// 标签列表
export const TagList = () => {
    return get("/tags")
}

