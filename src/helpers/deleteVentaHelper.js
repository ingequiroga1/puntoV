import axios from 'axios'

const deleteVentaHelper = (idventa) => {
  let ventaEliminar = {
    idventa: idventa
  }
  console.log(ventaEliminar)

  return axios.post(import.meta.env.VITE_BASE_API_URL + 'venta/delete', ventaEliminar)
}

export default deleteVentaHelper
