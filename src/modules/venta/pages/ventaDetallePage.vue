<template>
    <div class="container">
        <h3>Detalle de Venta</h3>
        <div class="row mb-3">
            <div class="col-md-8">
                Venta: {{ secuencia }} <br>
                Fecha: {{ formatDate(fecha) }}
            </div>
            <div class="col-md-4">
                <label for="nombreCliente" class="form-label">Nombre Cliente</label>
                <div class="row">
                    <div class="col"><input type="text" class="form-control" id="nombreCliente" v-model="cliente"></div>
                    <div class="col"><button @click="GuardarCliente" class="btn btn-primary">Guardar Cliente</button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-3">
                <BusquedaProducto @selProducto="seleccionarProd" />
            </div>
            <div class="col-md-9">
                <FormDetalleVentaComponent :proFormSel="prodSelect" :id="id" />
                <h4>Productos Agregados</h4>
                <hr>
                <tablaProductosVentaVue :idventa="id" />
            </div>
        </div>
        <div class="row">
            <div class="col d-flex flex-row-reverse">
                <button @click="controlModal" class="btn btn-primary">Generar Nota</button>
            </div>
        </div>
        <div class="mt-5">
            <a href="/venta">Salir</a>
        </div>
    </div>
    <modal-pdf v-if="showModalPdf" @close="showModalPdf = false" :secuencia="secuencia" :cliente="cliente" />
</template>
<script>
import FormDetalleVentaComponent from '../components/formDetalleVentaComponent.vue'
import BusquedaProducto from '../components/busquedaProducto.vue'
import tablaProductosVentaVue from '../components/tablaProductosVenta.vue'
import { mapActions } from 'vuex'
import ModalPdf from '../components/modalPdf.vue'
import Swal from 'sweetalert2'

export default {
    props: {
        id: {
            type: String,
            required: true
        }

    },
    data() {
        return {
            prodSelect: {},
            fecha: '',
            secuencia: 0,
            cliente: '',
            showModalPdf: false,
            productosVenta: []
        }
    },
    methods: {
        ...mapActions('vender', {
            obtenerDetalle: 'getDetalleVenta', obtenerProductos: 'getProductos',
            guardarCliente: 'guardarCliente'
        }),
        seleccionarProd(prod) {
            this.prodSelect = prod
        },
        async loadDetalleVenta(idventa) {
            const { fecha, secuencia, capturista, productos } = await this.obtenerDetalle(idventa)

            this.fecha = fecha
            this.secuencia = secuencia
            this.cliente = capturista
            this.productosVenta = productos
        },
        async GuardarCliente() {
            let _Msg = 'Se actualizo el cliente'
            let _Icon = 'info'
            let _Title = 'Guardado'

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            let datosCliente = {
                idventa: this.id,
                cliente: this.cliente
            }

            Swal.showLoading()

            await this.guardarCliente(datosCliente)

            Swal.fire(_Title, _Msg, _Icon)


        },
        controlModal() {
            this.showModalPdf = true
        },
        formatDate(dateString) {
            if (dateString) {
                const date = new Date(dateString);
                // Then specify how you want your dates to be formatted
                return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
            }
        }

    },
    created() {
        this.loadDetalleVenta(this.id)
        this.obtenerProductos()
    },
    components: {
        FormDetalleVentaComponent,
        BusquedaProducto,
        tablaProductosVentaVue,
        ModalPdf
    }
}
</script>