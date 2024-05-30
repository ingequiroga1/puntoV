import axios from 'axios'

const crearProductoHelper = (datosProducto) => {
  console.log(datosProducto)
  return axios.post('http://localhost:3001/producto/create', datosProducto)
}

export default crearProductoHelper
