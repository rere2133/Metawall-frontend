import req from "./api";
export const userLogin = (data) => req("post", "/users/sign_in", data);
export const userSignup = (data) => req("post", "/users/sign_up", data);
