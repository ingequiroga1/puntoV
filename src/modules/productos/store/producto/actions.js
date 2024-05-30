// export const myAction = async ({commit}) =>{

// }
import crearProductoHelper from '@/helpers/crearProductoHelper'
import getDetalleProductohelper from '@/helpers/getDetalleProducto'
import getProductoshelper from '@/helpers/getProductoshelper'
import getReporteProductoHelper from '@/helpers/getReporteProductoHelper'
import getUltimoArticuloHelper from '@/helpers/getUltimoArticulo'
import updateProductoHelper from '@/helpers/updateProductoHelper'

export const loadProductos = async ({ commit }) => {
  const { data } = await getProductoshelper()
  const productos = []
  for (let clave of Object.keys(data)) {
    productos.push({
      clave,
      ...data[clave]
    })
  }
  commit('setProductos', productos)
}

export const createProducto = async ({ commit }, datosProducto) => {
  const { data: dataUltimo } = await getUltimoArticuloHelper()
  datosProducto.articulo = dataUltimo.lastId + 1
  const { data: dataCrearProducto } = await crearProductoHelper(datosProducto)
  let prodArreglo = []
  prodArreglo.push(datosProducto)
  commit('setProductos', prodArreglo)
  return dataCrearProducto
}

export const loadProducto = async ({ commit }, idproducto) => {
  const { data } = await getDetalleProductohelper(idproducto)
  commit('setProductoActual', data.resultado)
  return data
}

export const actualizarProducto = async ({ commit }, dataProducto) => {
  const { data } = await updateProductoHelper(dataProducto)
  commit('setProductoActual', data.resultado)
  return data
}

export const generarReporteProductos = async ({ commit }, fechas) => {
  const { data } = await getReporteProductoHelper(fechas)
  console.log(commit)
  return data
}
