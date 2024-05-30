import axios from 'axios'

const getVentas = () => {
   return axios.get('http://localhost:3001/venta/lista',
{headers: {
    'content-Type': 'aplication/json'
}}) 
}

export default getVentas