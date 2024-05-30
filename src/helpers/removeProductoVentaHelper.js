import axios from 'axios'

const removeProductoVentaHelper = (dataEliminar) => {
  const { idprod, idventa } = dataEliminar
  return axios.post('http://localhost:3001/venta/' + idventa + '/' + idprod + '/eliminar', {})
}

export default removeProductoVentaHelper
