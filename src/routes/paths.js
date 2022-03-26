const paths = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/Menu.vue"),
  },
  {
    path: "/store",
    name: "Store",
    component: () => import("@/views/Store.vue"),
  },
  {
    path: "/franchise",
    name: "Franchise",
    component: () => import("@/views/Franchise.vue"),
  },
  {
    path: "*",
    name: "Not-found",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];

export default paths;
