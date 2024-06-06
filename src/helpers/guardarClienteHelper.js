import axios from 'axios'

const saveClienteHelper = (datoscliente) => {
  let clienteGuardar = {
    capturista: datoscliente.cliente
  }
  console.log(clienteGuardar)
  return axios.post(
    import.meta.env.VITE_BASE_API_URL + 'venta/api/' + datoscliente.idventa + '/capturista',
    clienteGuardar
  )
}

export default saveClienteHelper
