import { createRouter, createWebHistory } from 'vue-router'

import ventaRouter from '../modules/venta/router'
import productoRouter from '../modules/productos/router'
import reporteRouter from '../modules/reportes/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reporte',
      ...reporteRouter
    },
    {
      path: '/venta',
      ...ventaRouter
    },
    {
      path: '/producto',
      ...productoRouter
    }
  ]
})

export default router
