<template>
    <div class="container">
        <h4>Lista de ventas</h4>
        <div v-if="isLoading" class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
                No se ha generado ninguna venta
                <h3 class="mt-2">
                    <i class="fa fa-spin fa-sync"></i>
                </h3>
            </div>
        </div>
        <div v-else>
            <tabla-ventas-component @BorrarVenta="borrarVenta" />
        </div>
        <button @click="crearVenta" class="btn btn-primary">Nueva venta</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import Swal from 'sweetalert2'
import TablaVentasComponent from '../components/tablaVentasComponent.vue';


export default {
    computed: {
        ...mapState('vender', ['isLoading'])
    },
    methods: {
        ...mapActions('vender', { loadVentas: 'loadVentas', agregarVenta: 'agregarVenta', deleteVenta: 'deleteVenta' }),
        async crearVenta() {
            let venta = await this.agregarVenta()
            this.$router.push('venta/detalle/' + venta._id)
        },
        async borrarVenta(venta) {
            const { _id, productos } = venta
            let _Msg = ''
            let _Icon = 'success'
            let _Title = 'Eliminar Venta'

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()

            if (productos.length > 0) {
                _Icon = 'error'
                _Msg = "Debe borrar primero los producto dentro de la venta"
            }
            else {
                await this.deleteVenta(_id)
                _Msg = "Se elimino la venta"
            }
            Swal.fire(_Title, _Msg, _Icon)

        }

    },
    created() {
        this.loadVentas()
    },
    components: {
        TablaVentasComponent

    },


}
</script>