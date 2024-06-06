import axios from 'axios'

const cambiarExisProdHelper = (dataModificar) => {
  console.log(dataModificar)
  return axios.post(import.meta.env.VITE_BASE_API_URL + 'producto/cambiarExistencia', dataModificar)
}

export default cambiarExisProdHelper
