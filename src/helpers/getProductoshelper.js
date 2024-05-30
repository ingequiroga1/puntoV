import axios from 'axios'

const getProductoshelper = () => {
  return axios.get('http://localhost:3001/producto/lista', {
    headers: {
      'content-Type': 'aplication/json'
    }
  })
}

export default getProductoshelper
