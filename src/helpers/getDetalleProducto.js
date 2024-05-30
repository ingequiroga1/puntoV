import axios from 'axios'

const getDetalleProductohelper = (idproducto) => {
  return axios.get('http://localhost:3001/producto/' + idproducto, {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getDetalleProductohelper
