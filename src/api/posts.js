import req from "./api";
//posts CRUD
export const getPost = (id) => req("get", `/post/${id}`);
export const getPosts = (data) => req("get", "/posts", data);
export const createPost = (data) => req("post", "/posts", data);
export const editPost = (id, data) => req("patch", `/post/${id}`, data);
export const deleteAllPosts = () => req("delete", `/posts`);
export const deletePost = (id) => req("delete", `/post/${id}`);

// toggle likes
export const addLike = (id) => req("post", `/post/${id}/likes`);
export const deleteLike = (id) => req("delete", `/post/${id}/likes`);

// comment
export const createComment = (id, data) =>
  req("post", `/post/${id}/comment`, data);

// user
export const getUserPosts = (id) => req("get", `/posts/user/${id}`);

// uploadImg
export const uploadImgFile = (data) => req("post", "/upload", data);
