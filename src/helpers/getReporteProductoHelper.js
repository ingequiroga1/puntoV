import axios from 'axios'

const getReporteProductoHelper = (fechas) => {
  return axios.get(
    'http://localhost:3001/venta/productos/reporte/' + fechas.inicio + '/' + fechas.fin
  )
}
export default getReporteProductoHelper
