import axios from 'axios'

const addProductoVentaHelper = (idventa, dataToSave) => {
  return axios.post('http://localhost:3001/venta/' + idventa + '/agregar_producto', dataToSave)
}

export default addProductoVentaHelper
