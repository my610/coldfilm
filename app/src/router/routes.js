import * as guards from './guards'

export default [
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: require('../components/views/home.vue'),
    beforeEnter: guards.restrictToAuthenticated
  },
  {
    path: '/auth',
    component: require('../components/views/auth.vue'),
    name: 'auth',
    children: [
      {
        path: 'logout',
        alias: '/logout',
        name: 'logout',
        component: require('../components/views/auth/logout.vue')
      },
      {
        path: 'login',
        alias: '/login',
        name: 'login',
        component: require('../components/views/auth/login.vue'),
        beforeEnter: guards.restrictToUnauthenticated
      },
      {
        path: '/register',
        name: 'register',
        component: require('../components/views/auth/register.vue'),
        beforeEnter: guards.restrictToUnauthenticated
      }
    ]
  },
  {
    path: '/deactivated',
    name: 'deactivated',
    component: require('../components/views/deactivated.vue'),
    beforeEnter: guards.restrictToAuthenticated
  },
  {
    path: '/monitored',
    name: 'monitored',
    component: require('../components/views/monitored.vue'),
    beforeEnter: guards.restrictToAuthenticated
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: require('../components/views/tasks.vue'),
    beforeEnter: guards.restrictToAuthenticated
  },
  {
    path: '*',
    name: 'not-found',
    component: require('../components/views/404.vue')
  }
]
