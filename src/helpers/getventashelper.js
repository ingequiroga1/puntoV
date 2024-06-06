import axios from 'axios'

const getVentas = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL + 'venta/lista'
  return axios.get(baseApiUrl, {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getVentas
