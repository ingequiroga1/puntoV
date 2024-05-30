export default {
  name: 'venta',
  component: () => import(/*webpackChunkName: "venta */ '@/modules/venta/layouts/VentaLayout.vue'),
  children: [
    {
      path: '',
      name: 'ventamain',
      component: () =>
        import(/*webpackChunkName: "ventadetalle */ '@/modules/venta/pages/ventaMainPage.vue')
    },
    {
      path: 'detalle/:id',
      name: 'ventadetalle',
      component: () =>
        import(/*webpackChunkName: "ventadetalle */ '@/modules/venta/pages/ventaDetallePage.vue'),
      props: (route) => {
        const id = String(route.params.id)
        return { id }
      }
    }
  ]
}
