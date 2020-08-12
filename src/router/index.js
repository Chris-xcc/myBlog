import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 解决Element-UI重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const Home = () => import('../views/Home.vue')
const About = () => import( /* webpackChunkName: "about" */ '../views/About.vue')
const Category = () => import("../views/Category");
const Tag = () => import("../views/Tag");
const Login = () => import("../views/Login");
const Register = () => import("../views/Register");

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router