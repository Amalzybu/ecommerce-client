import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Address from '../views/Address.vue'
import OrderList from '../views/OrderList.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },

  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
