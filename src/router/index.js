import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const cart = () => import('../views/cart/cart')
const profile = () => import('../views/profile/profile')

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

//导出router
export default router