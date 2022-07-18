import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("../views/main/MainTemplate.vue"),
    children:[
      {
        alias: "",
        path: "3d-exp/",
        name: "ThreeDExperiencePage",
        component: () => import("../views/main/ThreeDExpirience.vue")
      },
      {
        path: "graphic-exp/",
        name: "GraphicDesign",
        component: () => import("../views/main/GraphicDesign.vue")
      },
      {
        path: "logos/",
        name: "LogosDesign",
        component:()=> import("../views/main/LogosDesign.vue")
      }
    ]
  },
  {
    path: "/about/",
    name: "AboutPage",
    component: () => import("../views/About.vue")
  },
  {
    path: "*",
    name: "ErrorPage",
    component: () => import("../views/Error.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to){
    if(to.hash){
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
