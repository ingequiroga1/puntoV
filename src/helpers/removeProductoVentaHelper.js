import axios from 'axios'

const removeProductoVentaHelper = (dataEliminar) => {
  const { idprod, idventa } = dataEliminar
  return axios.post(
    import.meta.env.VITE_BASE_API_URL + 'venta/' + idventa + '/' + idprod + '/eliminar',
    {}
  )
}

export default removeProductoVentaHelper
