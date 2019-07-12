import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import My from './views/My.vue'
import Fenlei from './views/Fenlei.vue'
import Car from './views/Car.vue'
import Chepin from './views/fenlei-luyou/Chepin'
import Jiadianshuma from './views/fenlei-luyou/Jiadianshuma'
import Jvjiabaihuo from './views/fenlei-luyou/Jvjiabaihuo'
import Meishi from './views/fenlei-luyou/Meishi'
import Meizhuang from './views/fenlei-luyou/Meizhuang'
import Nanzhuang from './views/fenlei-luyou/Nanzhuang'
import Neiyi from './views/fenlei-luyou/Neiyi'
import Nvying from './views/fenlei-luyou/Nvying'
import Nvzhuang from './views/fenlei-luyou/Nvzhuang'
import Tongxun from './views/fenlei-luyou/Tongxun'
import Xiangbao from './views/fenlei-luyou/Xiangbao'
import Xiezi from './views/fenlei-luyou/Xiezi'
import Yundong from './views/fenlei-luyou/Yundong'
import Muying from './views/fenlei-luyou/Muying'

import Goodplace from './components/shop/goodplace.vue'
import Goodone from './components/shop/goodone.vue'
// import Xiangqingyemian from './views/fenlei-luyou/Xiangqingyemian'

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
          component: Fenlei,
          children:[
            {
              path: '/home/fenlei/chepin',
              name: 'chepin',
              component: Chepin
            },
            {
              path: '/home/fenlei/jiadianshuma',
              name: 'jiadianshuma',
              component: Jiadianshuma
            }, {
              path: '/home/fenlei/jvjiabaihuo',
              name: 'jvjiabaihuo',
              component: Jvjiabaihuo
            },
            {
              path: '/home/fenlei/meishi',
              name: 'meishi',
              component: Meishi
            },
            {
              path: '/home/fenlei/meizhuang',
              name: 'meizhuang',
              component:Meizhuang
            },
            {
              path: '/home/fenlei/nanzhuang',
              name: 'nanzhuang',
              component:Nanzhuang
            },
            {
              path: '/home/fenlei/neiyi',
              name: 'neiyi',
              component:Neiyi
            },
            {
              path: '/home/fenlei/nvying',
              name: 'nvying',
              component:Nvying
            },
            {
              path: '/home/fenlei/nvzhuang',
              name: 'nvzhuang',
              component:Nvzhuang
            },
            {
              path: '/home/fenlei/tongxun',
              name: 'tongxun',
              component:Tongxun
            },
            {
              path: '/home/fenlei/xiangbao',
              name: 'xiangbao',
              component:Xiangbao
            },
            {
              path: '/home/fenlei/xiezi',
              name: 'xiezi',
              component:Xiezi
            },
            {
              path: '/home/fenlei/yundong',
              name: 'yundong',
              component:Yundong
            },
            {
              path: '/home/fenlei/muying',
              name: 'muying',
              component:Muying,
              // children:[
              //   {
              //     path: '/home/fenlei/xiangqingyemian:id',
              //     name: 'xiangqingyemian',
              //     component:Xiangqingyemian
              //   }
              // ]
            },
            
          ]
         
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
