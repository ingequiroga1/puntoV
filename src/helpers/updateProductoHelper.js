import axios from 'axios'

const updateProductoHelper = (producto) => {
  console.log(producto)

  return axios.put('http://localhost:3001/producto/actualizar', producto)
}

export default updateProductoHelper
