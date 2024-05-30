export default {
  name: 'reporte',
  component: () =>
    import(/*webpackChunkName: "reportes */ '@/modules/reportes/layouts/ReportesLayout.vue'),
  children: [
    {
      path: '',
      name: 'reporteproducto',
      component: () =>
        import(
          /*webpackChunkName: "reporteproducto */ '@/modules/reportes/pages/reportesproductoPage.vue'
        )
    }
  ]
}
