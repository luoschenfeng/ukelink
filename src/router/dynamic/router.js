import createRouter from '@/router/createRouters'
import Layout from '@/components/Layout'

export default createRouter(
  {
    path: '/router',
    name: 'Router',
    redirect: {
      name: 'MiddleRouter',
    },
    component: Layout,

    meta: {
      roles: [ 2 ],
      title: 'router.title.index',

      // icon: 'router',
    },
    children: [
      {
        path: 'middle-router',
        name: 'MiddleRouter',
        redirect: {
          name: 'LasterRouterOne',
        },
        component: () => import('@/views/router'),

        meta: {
          roles: [ 2 ],
          title: 'router.title.middleRouter',

          // icon: 'middle-router',
        },
        children: [
          {
            path: 'laster-router-one',
            name: 'LasterRouterOne',
            component: () => import('@/views/router/middle-router/laster-router-one'),
            meta: {
              roles: [ 2 ],
              title: 'router.title.lasterRouterOne',

              // icon: 'laster-router-one',
            },
          },
          {
            path: 'laster-router-two',
            name: 'LasterRouterTwo',
            component: () => import('@/views/router/middle-router/laster-router-two'),
            meta: {
              roles: [ 2 ],
              title: 'router.title.lasterRouterTwo',

              // icon: 'laster-router-two',
            },
          },
        ],
      },
    ],
  },
)
