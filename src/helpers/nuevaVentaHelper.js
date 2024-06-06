import axios from 'axios'

const nuevaVenta = () => {
  return axios.get(import.meta.env.VITE_BASE_API_URL + 'venta/create', {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default nuevaVenta
