import axios from 'axios'

const getDetalleVentas = (idventa) => {
  return axios.get('http://localhost:3001/venta/' + idventa, {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getDetalleVentas
