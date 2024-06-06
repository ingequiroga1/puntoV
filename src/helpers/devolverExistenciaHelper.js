import axios from 'axios'

const devolverExistenciasHelper = (dataDevolver) => {
  console.log(dataDevolver)
  return axios.post(import.meta.env.VITE_BASE_API_URL + 'producto/devolver', dataDevolver)
}

export default devolverExistenciasHelper
