<template>
    <div>
        <form>
            <div v-if="producto" class="row mb-3">
                <div>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="productos" class="form-label">Descripcion</label>
                            <input type="text" class="form-control" id="productos" required
                                v-model="producto.descripcion">

                        </div>
                        <div class="col-md-3">
                            <label for="cantidad" class="form-label">Cantidad</label>
                            <input type="text" class="form-control" id="cantidad" required v-model="cantidad">
                        </div>
                        <div class="col-md-3">
                            <label for="precio" class="form-label">Precio</label>
                            <input type="text" class="form-control" id="precio" required v-model="producto.precio">
                        </div>
                        <div class="col-md-2 d-flex align-items-end">
                            <label class="form-label"></label>
                            <button @click="enviarProducto" class="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'


export default {
    props: {
        proFormSel: {},
        id: String
    },
    computed: {
        ...mapGetters('vender', ['getProdIndex'])
    },
    data() {
        return {
            producto: null,
            cantidad: 1

        }
    },
    methods: {
        ...mapActions('vender', { enviarProd: 'addProductoVenta', updateProd: 'updateProductoVenta' }),
        loadProd() {
            this.producto = this.proFormSel
        },
        enviarProducto(e) {
            e.preventDefault()
            let indice = this.prodExiste(this.producto)

            let productoaRegistrar = {
                clave: this.producto.clave,
                descripcion: this.producto.descripcion,
                cantidad: this.cantidad,
                precio: this.producto.precio,
                index: indice,
                idventa: this.id,
                articulo: this.producto.articulo
            }

            if (indice < 0) {
                this.enviarProd(productoaRegistrar)
            }
            else {

                this.updateProd(productoaRegistrar)
            }

        },
        prodExiste(productoValidar) {
            const { clave } = productoValidar
            return this.getProdIndex(clave)
        }
    },
    watch: {
        proFormSel() {
            this.loadProd()
        }
    }
}


</script>