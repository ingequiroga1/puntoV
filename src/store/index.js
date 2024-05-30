import { createStore } from 'vuex'

import vender from '@/modules/venta/store/vender'
import producto from '@/modules/productos/store/producto'

const store = createStore({
  modules: {
    vender,
    producto
  }
})

export default store
