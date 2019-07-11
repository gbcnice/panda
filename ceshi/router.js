import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import My from './views/My.vue'
import Fenlei from './views/Fenlei.vue'
import Car from './views/Car.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{name:'shop'},
      children:[
        {
          path: '/home/shop',
          name: 'shop',
          component: Shop
        },
        {
          path: '/home/my',
          name: 'my',
          component: My
        },
        {
          path: '/home/fenlei',
          name: 'fenlei',
          component: Fenlei
        },
        {
          path: '/home/car',
          name: 'car',
          component: Car
        }
      ]
    }
    
  ]
})
