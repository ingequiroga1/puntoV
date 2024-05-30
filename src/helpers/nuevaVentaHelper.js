import axios from 'axios'

const nuevaVenta = () => {
  return axios.get('http://localhost:3001/venta/create', {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default nuevaVenta
