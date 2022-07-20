import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "catalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/metaWall",
    name: "metaWall",
    component: HomeView,
  },
  {
    path: "/metaWall/postCreate",
    name: "postCreate",
    component: () => import("../views/PostCreate.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/user/followingList",
    name: "followingList",
    component: () => import("../views/FollowingList.vue"),
  },
  {
    path: "/user/likeList",
    name: "likeList",
    component: () => import("../views/LikeList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
