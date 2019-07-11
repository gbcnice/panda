import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import My from './views/My.vue'
import Fenlei from './views/Fenlei.vue'
import Car from './views/Car.vue'
import Last from './components/shop/last.vue'
import Logo from './components//shop/logo.vue'
import Supermarket from './components/shop/supermarket.vue'
import Time from './components/shop/time.vue'
import Goodplace from './components/shop/goodplace.vue'
import Goodone from './components/shop/goodone.vue'

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
      path: '/last',
      name: 'last',
      component: Last
    },
    {
      path: '/logo',
      name: 'logo',
      component: Logo
    },
    {
      path: '/supermarket',
      name: 'supermarket',
      component: Supermarket
    },
    {
      path: '/time',
      name: 'time',
      component: Time
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
          component: Shop,
          redirect:{name:'goodplace'},
          children:[
            {
              path: '/home/shop/goodplace',
              name: 'goodplace',
              component: Goodplace
            },
            {
              path: '/home/shop/goodone',
              name: 'goodone',
              component: Goodone
            }
          ]
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
