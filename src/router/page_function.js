// 功能页面
import Layout from '@/views/layout/Layout'
export const dashboard  = {
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
    }
  ]
}

export const permission = {
  path: '/permission',
  component: Layout,
  redirect: '/permission/index',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: '权限测试页',
    icon: 'lock',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'page',
      component: () => import('@/views/permission/page'),
      name: 'PagePermission',
      meta: {
        title: '页面权限',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'directive',
      component: () => import('@/views/permission/directive'),
      name: 'DirectivePermission',
      meta: {
        title: '指令权限'
        // if do not set roles, means: this page does not require permission
      }
    }
  ]
}

export const errorPage = {
  path: '/error',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: '错误页面',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/errorPage/401'),
      name: 'Page401',
      meta: { title: '401', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/errorPage/404'),
      name: 'Page404',
      meta: { title: '404', noCache: true }
    },
  ]
}

export const user = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'ErrorPages',
  meta: {
    title: '用户',
    icon: '404'
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/user/userDetail/userDetail'),
      name: 'Page401',
      meta: { title: '用户列表', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/user/userList/userList'),
      name: 'Page404',
      meta: { title: '用户详情', noCache: true },
      // hidden: true
    },
  ]
}
