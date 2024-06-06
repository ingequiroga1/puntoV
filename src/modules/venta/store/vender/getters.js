// export const myGetter = (state) =>{

// }

export const getVentas = (state) => {
  return state.ventas
}

export const getProducts = (state) => {
  return state.productos
}

export const getProductsByTerm =
  (state) =>
  (term = '') => {
    if (term.length === 0) {
      return ''
    }
    return state.productos.filter((producto) =>
      (producto.descripcion + producto.clave).toLowerCase().includes(term.toLowerCase())
    )
  }

export const getProductSelect = (state) => {
  return state.prodSeleccionado
}

export const getsProdVenta = (state) => {
  return state.productosVenta
}

export const getProdById = (state) => (clave) => {
  return state.productosVenta.find((producto) => producto.clave == clave)
}

export const getProdIndex = (state) => (clave) => {
  return state.productosVenta.findIndex((producto) => producto.clave == clave)
}

export const getVentaTotal = (state) => {
  let total = 0
  state.productosVenta.forEach((element) => {
    total += element.importe
  })
  return total
}
