import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 解决Element-UI重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

const Home = () => import('@/views/Home.vue')

const PostDetail = () => import("@/views/PostDetail");

const About = () => import( /* webpackChunkName: "about" */ '@/views/About.vue')

const Category = () => import("@/views/Category");
const CategoryPostList = () => import("@/components/category/CategoryPostList");
const CategoryList = () => import("@/components/category/CategoryList");

const Tag = () => import("@/views/Tag");
const TagPostList = () => import("@/components/tag/TagPostList");
const TagList = () => import("@/components/tag/TagList");

const Login = () => import("@/views/Login");

const Register = () => import("@/views/Register");

const Forget = () => import("@/views/Forget");

const EmailActive = () => import("@/views/EmailActive");

const User = () => import("@/views/User");
const PostCollect = () => import("@/components/user/PostCollect");
const UserInfo = () => import("@/components/user/UserInfo");

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
},
{
    path: '/post/',
    redirect: '/post/1'
},
{
    path: '/post/1',
    name: 'PostDetail',
    component: PostDetail
},
{
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail
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
    path: '/email_active',
    name: 'EmailActive',
    component: EmailActive
},
{
    path: '/forget',
    name: 'Forget',
    component: Forget
},
{
    path: '/user',
    name: 'User',
    component: User,
    children: [{
        path: '/',
        redirect: '/user/info'
    },
    {
        path: '/user/info',
        name: 'UserInfo',
        component: UserInfo
    },
    {
        path: '/user/collect',
        name: 'PostCollect',
        component: PostCollect
    },
    ]
},

{
    path: '/category',
    name: 'Category',
    component: Category,
    children: [{
        path: '/',
        redirect: '/category/list'
    },
    {
        path: '/category/list',
        name: 'CategoryList',
        component: CategoryList

    },
    {
        path: '/category/:id',
        name: 'CategoryPostList',
        component: CategoryPostList
    },
    ]
},
{
    path: '/tag',
    name: 'Tag',
    component: Tag,
    children: [{
        path: '/',
        redirect: '/tag/list'
    },
    {
        path: '/tag/list',
        name: 'TagList',
        component: TagList

    },
    {
        path: '/tag/:id',
        name: 'TagPostList',
        component: TagPostList
    },
    ]
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
    routes,
    mode: 'history'
})

export default router