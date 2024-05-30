<template>
    <div class="container">
        <h4>Lista de Productos</h4>
        <div v-if="isLoading" class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
                Espere por favor..
                <h3 class="mt-2">
                    <i class="fa fa-spin fa-sync"></i>
                </h3>
            </div>
        </div>
        <div v-else>
            <TablaProductosComponent @borrarProducto="borrarProducto" />
        </div>
        <button @click="crearProducto" class="btn btn-primary">Nuevo producto</button>
    </div>
</template>
<script>

import { mapActions, mapState } from 'vuex';
import TablaProductosComponent from '../components/tablaProductosComponent.vue';

export default {
    computed: {
        ...mapState('producto', ['isLoading'])
    },
    methods: {
        ...mapActions('producto', { loadProductos: 'loadProductos' }),
        async crearProducto() {
            this.$router.push('producto/nuevo')
        },
        async borrarProducto(producto) {
            //const { _id } = producto
            console.log(producto);
            //this.deleteVenta(_id)
        }

    },
    created() {

    },
    mounted() {
        this.loadProductos()
    },
    components: {
        TablaProductosComponent
    },


}
</script>