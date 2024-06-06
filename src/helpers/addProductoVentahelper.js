import axios from 'axios'

const addProductoVentaHelper = (idventa, dataToSave) => {
  return axios.post(
    import.meta.env.VITE_BASE_API_URL + 'venta/' + idventa + '/agregar_producto',
    dataToSave
  )
}

export default addProductoVentaHelper
