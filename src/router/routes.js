const routes = [
  {
    path: '/system',
    component: () => import('layouts/system/MainLayout.vue'),
    children: [
      {path: '/Dashboard', component: () => import('src/pages/system/Dashboard.vue')},
      {path: '/Dashboard2', component: () => import('src/pages/system/Dashboard2.vue')},
      {path: '/Profile', component: () => import('src/pages/system/UserProfile.vue')},
      {path: '/Map', component: () => import('src/pages/system/Map.vue')},
      {path: '/MapMarker', component: () => import('src/pages/system/MapMarker.vue')},
      {path: '/TreeTable', component: () => import('src/pages/system/TreeTable.vue')},
      {path: '/StreetView', component: () => import('src/pages/system/StreetView.vue')},
      {path: '/Cards', component: () => import('src/pages/system/Cards.vue')},
      {path: '/Tables', component: () => import('src/pages/system/Tables.vue')},
      {path: '/Contact', component: () => import('src/pages/system/Contact.vue')},
      {path: '/Checkout', component: () => import('src/pages/system/Checkout.vue')},
      {path: '/Ecommerce', component: () => import('src/pages/system/ProductCatalogues.vue')},
      {path: '/Pagination', component: () => import('src/pages/system/Pagination.vue')},
      {path: '/Charts', component: () => import('src/pages/system/Charts.vue')},
      {path: '/Calendar', component: () => import('src/pages/system/Calendar.vue')},
      {path: '/Directory', component: () => import('src/pages/system/Directory.vue')},
      {path: '/Footer', component: () => import('src/pages/system/Footer.vue')},
      {path: '/CardHeader', component: () => import('src/pages/system/CardHeader.vue')},

      // Not completed yet
      // {path: '/Taskboard', component: () => import('pages/TaskBoard.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/system/Error404.vue')
  },
  {
    path: '/Mail',
    component: () => import('src/layouts/system/Mail.vue')
  },
  {
    path: '/Maintenance',
    component: () => import('src/pages/system/Maintenance.vue')
  },
  {
    path: '/Pricing',
    component: () => import('src/pages/system/Pricing.vue')
  },
  {
    path: '/Login-1',
    component: () => import('src/pages/system/Login-1.vue')
  },
  {
    path: '/Lock',
    component: () => import('src/pages/system/LockScreen.vue')
  },
  {
    path: '/Lock-2',
    component: () => import('src/pages/system/LockScreen-2.vue')
  },
  
  // Routers Site
  {
    path: '/',
    component: () => import('layouts/site/MainLayout.vue'),
    children: [
      { path : '', component: () => import('src/pages/site/Home.vue') },
    ]
    
  }
]

export default routes
