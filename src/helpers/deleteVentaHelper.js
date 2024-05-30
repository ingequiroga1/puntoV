import axios from 'axios'

const deleteVentaHelper = (idventa) => {
  let ventaEliminar = {
    idventa: idventa
  }
  console.log(ventaEliminar)

  return axios.post('http://localhost:3001/venta/delete', ventaEliminar)
}

export default deleteVentaHelper
