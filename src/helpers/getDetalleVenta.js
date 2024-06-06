import axios from 'axios'

const getDetalleVentas = (idventa) => {
  return axios.get(import.meta.env.VITE_BASE_API_URL + 'venta/' + idventa, {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getDetalleVentas
