import req from "./api";

export const getProfile = () => req("get", "/users/profile");
export const editProfile = (data) => req("patch", "/users/profile", data);
export const editPassword = (data) =>
  req("post", "/users/updatePassword", data);
export const getLikeList = (data) => req("get", "/users/getLikeList", data);
export const followFriend = (id) => req("post", `/users/${id}/follow`);
export const unfollowFriend = (id) => req("delete", `/users/${id}/unfollow`);

// router.get("/profile", isAuth, handleErrorAsync(userControllers.getProfile));
// router.patch("/profile", isAuth, handleErrorAsync(userControllers.editProfile));
// router.post(
//   "/updatePassword",
//   isAuth,
//   handleErrorAsync(userControllers.editPassword)
// );
// router.get(
//   "/getLikeList",
//   isAuth,
//   handleErrorAsync(userControllers.getLikeList)
// );
// router.post(
//   "/:id/follow",
//   isAuth,
//   handleErrorAsync(userControllers.followFriend)
// );
// router.delete(
//   "/:id/unfollow",
//   isAuth,
//   handleErrorAsync(userControllers.unfollowFriend)
// );
