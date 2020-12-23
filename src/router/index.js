import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/viwes/Home/Home";
import Base from "@/layouts/Base";
import Login from "@/viwes/Auth/Login";
import Worksheet from "@/viwes/worksheet/Worksheet";


Vue.use(VueRouter)
const routes=[
    {
    path:'/',
    component:Base,
        children: [
            {
                path:'',
                name:"Home",
                component:Home,
            },
            {
                path:'/login',
                name:"Login",
                component:Login,
            },
            {
                path:'/worksheet',
                name:"Worksheet",
                component:Worksheet,
            },


        ]
    },

]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})
export default router
