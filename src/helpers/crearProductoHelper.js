import axios from 'axios'

const crearProductoHelper = (datosProducto) => {
  console.log(datosProducto)
  return axios.post(import.meta.env.VITE_BASE_API_URL + 'producto/create', datosProducto)
}

export default crearProductoHelper
