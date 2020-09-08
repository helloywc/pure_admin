// 功能页面
import Layout from '@/views/layout/Layout'
export const develop  = {
  path: '',
  component: Layout,
  redirect: 'noredirect',
  meta: {
    title: '开发模式',
    icon: '404'
  },
  children: [
    {
      path: 'forms',
      component: () => import('@/views/develop/forms/forms'),
      name: 'Dashboard',
      meta: { title: '表单', icon: 'dashboard', noCache: true, affix: true }
    },
    {
      path: 'icons',
      component: () => import('@/views/develop/icons/icons'),
      name: 'Dashboard',
      meta: { title: '图标', icon: 'dashboard', noCache: true, affix: true }
    }
  ]
}

