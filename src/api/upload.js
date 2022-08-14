import req from "./api";

// uploadImg
export const uploadImgFile = (data) => req("post", "/upload", data);
