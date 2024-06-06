import axios from 'axios'

const getDetalleProductohelper = (idproducto) => {
  return axios.get(import.meta.env.VITE_BASE_API_URL + 'producto/' + idproducto, {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getDetalleProductohelper
