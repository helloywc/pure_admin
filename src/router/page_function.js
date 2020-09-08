// 功能页面
import Layout from '@/views/layout/Layout'
export  const dashboard  = {
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
    }
  ]
}
