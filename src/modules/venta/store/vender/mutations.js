// export const myMutation = (state) =>{

// }

export const setVentas = (state, ventas) => {
  state.ventas = [...state.ventas, ...ventas]
  state.isLoading = false
}

export const setProdSeleccionado = (state, prodSeleccionado) => {
  state.prodSeleccionado = prodSeleccionado
}

export const setProductoVenta = (state, producto) => {
  state.productosVenta.push(producto)
}

export const updateProdVenta = (state, producto) => {
  state.productosVenta[producto.index].cantidad =
    parseFloat(state.productosVenta[producto.index].cantidad) + parseFloat(producto.cantidad)
}

export const quitarProductoV = (state, idarticulo) => {
  state.productosVenta = state.productosVenta.filter((prod) => prod.articulo !== idarticulo)
}

export const setProductos = (state, productos) => {
  state.productos = [...state.productos, ...productos]
}

export const quitarVenta = (state, idventa) => {
  state.ventas = state.ventas.filter((venta) => venta._id !== idventa)
  state.isLoading = false
}

export const setIsLoading = (state) => {
  state.isLoading = true
}

export const setOffIsLoading = (state) => {
  state.isLoading = false
}
