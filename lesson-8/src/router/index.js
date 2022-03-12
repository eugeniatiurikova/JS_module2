import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Catalog.vue'
import ProductInfo from '../views/ProductInfo.vue'

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
    path: '/catalog',
    name: 'Products',
    component: Products
  },
  {
    path: '/productinfo',
    name: 'ProductInfo',
    component: ProductInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
