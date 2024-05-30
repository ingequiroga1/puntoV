import axios from 'axios'

const getUltimoArticuloHelper = () => {
  return axios.get('http://localhost:3001/producto/ultimoArticulo')
}
export default getUltimoArticuloHelper
