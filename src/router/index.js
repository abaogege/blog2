import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/list'
import BlogList from '@/components/blog/bloglist'
import BlogDetail from '@/components/blog/blogdetails'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '',
        name: 'BlogList',
        component: BlogList,
      },
      {
        path: '/blog-details/:id',
        name: 'Detail',
        component: BlogDetail
      }
    ]
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
   
  ]
})
