import Vue from 'vue'
import VueRouter from 'vue-router'
import AddPayment from "./components/AddPayment";

Vue.use(VueRouter)

const routes = [
    {
        path: '/add/payment/:category',
        query:{
            category:"Food"
        },
        name: "add",
        component: AddPayment
    },
]


export default new VueRouter(
    {
        mode: 'history',
        scrollBehavior() {
            return {
                x: 0, y: 0,
                behavior: 'smooth'
            }
        },
        routes
    }
)