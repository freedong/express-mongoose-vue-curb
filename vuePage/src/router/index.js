import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'          //首页数据列表
import Details from '@/components/Details'    //图片详情页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path:'/details/:id',
      name:Details,
      component:Details
    }
  ]
})
