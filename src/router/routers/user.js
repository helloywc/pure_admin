import Layout from '@/views/layout/Layout'


export const user = {
    path: 'user',
    component: () => import('@/views/user/user'),
    name: 'user',
    meta: {
        title: 'user',
        roles: ['admin'] // or you can only set roles in sub nav
        // if do not set roles, means: this page does not require permission
    }
};

export const users = {
    path: '/user',
    component: Layout,
    redirect: 'noredirect',
    name: 'user',
    meta: {
        title: 'user',
        icon: '404'
    },
    children: [user]
};
