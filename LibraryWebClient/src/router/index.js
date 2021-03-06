import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import LivrosList from '@/components/livros/LivrosList'
import LivrosDetails from '@/components/livros/LivrosDetails'
import LivrosCreate from '@/components/livros/LivrosCreate'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/livros/list',
      name: 'LivrosList',
      component: LivrosList
    },
    {
      path: '/livros/create',
      name: 'LivrosCreate',
      component: LivrosCreate
    },
    {
      path: '/livros/:id',
      name: 'LivrosDetails',
      component: LivrosDetails
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
