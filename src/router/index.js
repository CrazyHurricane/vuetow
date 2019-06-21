import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Car from '@/components/car'
import Mine from '@/components/mine'
import Order from '@/components/order'
import Address from '@/components/address'
import Diming from '@/components/diming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/diming',
      name: 'diming',
      component: Diming
    }
  ]
})
