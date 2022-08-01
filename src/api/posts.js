import req from "./api";
export const createPost = (data) => req("post", "/posts", data);
