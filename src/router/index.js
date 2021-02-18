import Vue from "vue";
import VueRouter from "vue-router";
import ImageGallery from "../views/ImageGallery.vue";
import ImageView from "../views/ImageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "Home" }
  },
  {
    path: "/images",
    name: "ImageGallery",
    component: ImageGallery
  },
  {
    path: "/images/:imageId",
    name: "ImageView",
    component: ImageView,
    props: route => ({ imageId: route.params.imageId })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
