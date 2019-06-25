import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login: () => import('@/components/HelloWorld'),
}


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '登陆',
        keepAlive: false
      },
      component: components.login
    },
  ]
})

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
})


export default router
