// 功能页面
import Layout from '@/views/layout/Layout'
export const develop  = {
  path: '/develop',
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
      name: 'forms',
      meta: { title: '表单', icon: 'dashboard', noCache: true, affix: true }
    },
    {
      path: 'icons',
      component: () => import('@/views/develop/icons/icons'),
      name: 'icons',
      meta: { title: '图标', icon: 'dashboard', noCache: true, affix: true }
    }
  ]
}

