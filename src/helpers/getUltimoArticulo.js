import axios from 'axios'

const getUltimoArticuloHelper = () => {
  return axios.get(import.meta.env.VITE_BASE_API_URL + 'producto/ultimoArticulo')
}
export default getUltimoArticuloHelper
