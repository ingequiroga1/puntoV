// export const myMutation = (state) =>{

// }

export const setProductos = (state, productos) => {
  state.productos = [...state.productos, ...productos]
  state.isLoading = false
}

export const setProductoActual = (state, producto) => {
  state.productoActual = producto
  state.isLoading = false
}
