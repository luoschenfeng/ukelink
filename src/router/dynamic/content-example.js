import createRouter from '@/router/createRouters'
import Layout from '@/components/Layout'

export default createRouter(
  {
    path: '/content-example',
    name: 'ContentExample',
    redirect: {
      name: 'ExampleOne',
    },
    component: Layout,

    meta: {
      roles: [ 2 ],
      title: 'contentExample.title.index',

      icon: 'content-example',
    },
    children: [
      {
        path: 'example-one',
        name: 'ExampleOne',
        component: () => import('@/views/content-example/example-one'),
        meta: {
          roles: [ 2 ],
          title: 'contentExample.title.ExampleOne',

          icon: 'example-one',
        },
      },
      {
        path: 'example-two',
        name: 'ExampleTwo',
        component: () => import('@/views/content-example/example-two'),
        meta: {
          roles: [ 2 ],
          title: 'contentExample.title.ExampleTwo',

          icon: 'example-two',
        },
      },
    ],
  },
)
