import axios from 'axios'

const cambiarExisProdHelper = (dataModificar) => {
  console.log(dataModificar)
  return axios.post('http://localhost:3001/producto/cambiarExistencia', dataModificar)
}

export default cambiarExisProdHelper
