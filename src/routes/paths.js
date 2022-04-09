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
    path: "/company",
    name: "Company",
    component: () => import("@/views/Company.vue"),
  },
  {
    path: "*",
    name: "Not-found",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];

export default paths;
