import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main.vue';
import Login from '../components/Login.vue';

Vue.use(VueRouter)


const routes = [
 {
   path: '/',
   component: Main,
   children:[
     {
       path:'/login',
       component: Login
     }
   ]
 },
 
]


const router = new VueRouter({
  routes,
  mode:'history'
})

export default router