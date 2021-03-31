/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [

    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/pages/Dashboard.vue'),
          meta: {
            authRequired: true,
          }
        },
        {
          path: '/reporting-detail/',
          name: 'reporting',
          component: () => import('./views/pages/CampaignDetail.vue'),
          meta: {
            authRequired: true,
            parent: 'reporting'
          }
        },
        {
          path: '/reporting',
          name: 'reporting',
          component: () => import('./views/pages/Reporting.vue'),
          meta: {
            authRequired: true,
            parent: 'reporting'
          }
        }
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue'),
          beforeEnter: (to, from, next) => {
            const loggedIn = store.state.AppActiveUser
            if (loggedIn.logged_in) {
              next(from)
            }
            next()
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.AppActiveUser

  if (to.matched.some(record => record.meta.authRequired)) {
    if (loggedIn.length == 0) {
      next({
        path: '/login'
      })
    }
  }
  next()
})

export default router