export default {
  name: 'producto',
  component: () =>
    import(/*webpackChunkName: "venta */ '@/modules/productos/layouts/ProductoLayout.vue'),
  children: [
    {
      path: '',
      name: 'productoadmin',
      component: () =>
        import(
          /*webpackChunkName: "productoAdmin */ '@/modules/productos/pages/productoMainPage.vue'
        )
    },
    {
      path: 'nuevo',
      name: 'nuevoproducto',
      component: () =>
        import(
          /*webpackChunkName: "nuevoproducto */ '@/modules/productos/pages/productoNuevoPage.vue'
        )
    },
    {
      path: 'reporte',
      name: 'reportes',
      component: () =>
        import(
          /*webpackChunkName: "generarReporte */ '@/modules/productos/pages/productoReportes.vue'
        )
    },
    {
      path: 'editar/:id',
      name: 'editarproducto',
      component: () =>
        import(
          /*webpackChunkName: "editarproducto */ '@/modules/productos/pages/productoEditarPage.vue'
        ),
      props: (route) => {
        const id = String(route.params.id)
        return { id }
      }
    }
  ]
}
