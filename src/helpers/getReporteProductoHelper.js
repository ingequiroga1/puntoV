import axios from 'axios'

const getReporteProductoHelper = (fechas) => {
  return axios.get(
    import.meta.env.VITE_BASE_API_URL +
      'venta/productos/reporte/' +
      fechas.inicio +
      '/' +
      fechas.fin
  )
}
export default getReporteProductoHelper
