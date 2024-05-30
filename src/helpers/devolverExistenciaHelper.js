import axios from 'axios'

const devolverExistenciasHelper = (dataDevolver) => {
  console.log(dataDevolver)
  return axios.post('http://localhost:3001/producto/devolver', dataDevolver)
}

export default devolverExistenciasHelper
