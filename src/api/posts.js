import req from "./api";
export const createPost = (data) => req("post", "/posts", data);
export const getPosts = (data) => req("get", "/posts", data);
