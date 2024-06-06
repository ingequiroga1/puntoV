// export const myAction = async ({commit}) =>{

// }
import getVentas from '@/helpers/getventashelper'
import nuevaVenta from '@/helpers/nuevaVentaHelper'
import getDetalleVentas from '@/helpers/getDetalleVenta'
import getProductoshelper from '@/helpers/getProductoshelper'
import addProductoVentaHelper from '@/helpers/addProductoVentahelper'
import deleteVentaHelper from '@/helpers/deleteVentaHelper'
import removeProductoVentaHelper from '@/helpers/removeProductoVentaHelper'
import saveClienteHelper from '@/helpers/guardarClienteHelper'
import cambiarExisProdHelper from '@/helpers/cambiarExisProdHelper'

export const loadVentas = async ({ commit }) => {
  const { data } = await getVentas()
  const ventas = []
  for (let clave of Object.keys(data)) {
    ventas.push({
      clave,
      ...data[clave]
    })
  }
  commit('setVentas', ventas)
}

export const seleccionarProd = async ({ commit }, prodSeleccionado) => {
  commit('setProdSeleccionado', prodSeleccionado)
}

export const addProductoVenta = async ({ commit }, producto) => {
  const { clave, descripcion, precio, cantidad, articulo, idventa, preciobase } = producto
  AgregarProducto(articulo, descripcion, cantidad, idventa, precio)
  let importe = cantidad * precio
  const prodnew = { clave, descripcion, precio: preciobase, cantidad, importe, preciobase }
  commit('setProductoVenta', prodnew)
}

export const updateProductoVenta = async ({ commit }, producto) => {
  const { clave, descripcion, precio, index, cantidad, articulo, idventa, preciobase } = producto
  AgregarProducto(articulo, descripcion, cantidad, idventa, precio)
  let importe = cantidad * precio
  const prodnew = { clave, descripcion, precio, cantidad, index, importe, preciobase }
  commit('updateProdVenta', prodnew)
}

const AgregarProducto = async (articulo, descripcion, cantidad, idventa, precio) => {
  const productoGuardar = {
    prodescripcion: '@' + articulo + '|' + descripcion,
    cantidad: cantidad,
    precio: precio
  }

  const { data } = await addProductoVentaHelper(idventa, productoGuardar)
  if (data) {
    let descontarExistencia = 1
    let dataDescontar = {
      articulo: articulo,
      cantidad: parseFloat(cantidad),
      tipo: descontarExistencia
    }

    const { data: dataDescontarExistencia } = await cambiarExisProdHelper(dataDescontar)
    console.log(dataDescontarExistencia)
  }
}

export const quitarProdVenta = async ({ commit }, dataEliminar) => {
  const { data } = await removeProductoVentaHelper(dataEliminar)
  if (data.exitoso) {
    let devolverExistencia = 2
    let datadevolver = {
      articulo: dataEliminar.articulo,
      cantidad: parseFloat(dataEliminar.cantidad),
      tipo: devolverExistencia
    }
    const { data: datadevolucion } = await cambiarExisProdHelper(datadevolver)
    commit('quitarProductoV', dataEliminar.articulo)
    console.log(datadevolucion)
  }
}

export const agregarVenta = async (/*{commit}*/) => {
  const { data } = await nuevaVenta()
  return data
}

export const getDetalleVenta = async ({ commit }, idventa) => {
  const { data } = await getDetalleVentas(idventa)
  data.productos.forEach((element) => {
    let prodAgregar = {
      clave: element.producto.clave,
      descripcion: element.producto.descripcion,
      precio: element.producto.precio,
      cantidad: element.cantidad,
      articulo: element.producto.articulo,
      id: element.producto._id,
      importe: element.importe
    }
    commit('setProductoVenta', prodAgregar)
  })
  return data
}

export const getProductos = async ({ commit }) => {
  const { data } = await getProductoshelper()
  commit('setProductos', data)
}

export const deleteVenta = async ({ commit }, idventa) => {
  commit('setIsLoading')
  await deleteVentaHelper(idventa)
  commit('quitarVenta', idventa)
}

export const guardarCliente = async ({ commit }, datoscliente) => {
  commit('setIsLoading')
  await saveClienteHelper(datoscliente)
  commit('setOffIsLoading')
}
