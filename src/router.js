import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import PostList from "./pages/PostList.vue";
import PostDetail from "./pages/PostDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostList,
    },

    {
      path: "/blog/:slug",
      name: "details",
      component: PostDetail,
    },
  ],
});
export { router };
