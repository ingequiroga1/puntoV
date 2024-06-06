<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">clave</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio unitario</th>
                    <th scope="col">Precio total</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prod in productosVenta" :key="prod">
                    <th scope="row">{{ prod.clave }}</th>
                    <td>{{ prod.descripcion }}</td>
                    <td>{{ prod.cantidad }}</td>
                    <td>{{ prod.precio }}</td>
                    <td>{{ prod.importe }} </td>
                    <td><button @click="quitarProducto(prod)" class="btn btn-warning">Borrar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="d-flex flex-row-reverse">
        <p><b>Total Venta:</b> $ {{ totalTabla }}</p>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('vender', ['getsProdVenta', 'getVentaTotal']),
        productosVenta() {
            return this.getsProdVenta
        },
        totalTabla() {
            return this.getVentaTotal
        }
    },
    props: {
        productos: null,
        idventa: String
    },
    methods: {
        ...mapActions('vender', ['quitarProdVenta']),
        quitarProducto(prod) {
            console.log(prod);
            const { id, articulo, cantidad } = prod
            let DataEliminar = {
                idprod: id,
                idventa: this.idventa,
                articulo: articulo,
                cantidad: cantidad
            }
            this.quitarProdVenta(DataEliminar)
        }
    }
}
</script>