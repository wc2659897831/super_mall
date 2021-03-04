import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Dateil = () => import('views/dateil/Dateil')

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    }, 
    {
      path: '/detail',
      component: Dateil
    }
  ]
})

export default router