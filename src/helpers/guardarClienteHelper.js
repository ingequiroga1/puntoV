import axios from 'axios'

const saveClienteHelper = (datoscliente) => {
  let clienteGuardar = {
    capturista: datoscliente.cliente
  }
  console.log(clienteGuardar)
  return axios.post(
    'http://localhost:3001/venta/api/' + datoscliente.idventa + '/capturista',
    clienteGuardar
  )
}

export default saveClienteHelper
