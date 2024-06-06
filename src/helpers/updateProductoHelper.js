import axios from 'axios'

const updateProductoHelper = (producto) => {
  console.log(producto)

  return axios.put(import.meta.env.VITE_BASE_API_URL + 'producto/actualizar', producto)
}

export default updateProductoHelper
