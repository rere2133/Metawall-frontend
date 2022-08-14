import req from "./api";

export const getProfile = () => req("get", "/users/profile");
export const editProfile = (data) => req("patch", "/users/profile", data);

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
