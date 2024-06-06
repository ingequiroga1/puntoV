import axios from 'axios'

const getProductoshelper = () => {
  return axios.get(import.meta.env.VITE_BASE_API_URL + 'producto/lista', {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getProductoshelper
