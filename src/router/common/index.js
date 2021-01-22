import Layout from '@/components/Layout'
import createRouter from '@/router/createRouters'

export default [
  createRouter({
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  }),
  createRouter({
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: 'dashboard.title',
        },
      },
    ],
  }),
]
