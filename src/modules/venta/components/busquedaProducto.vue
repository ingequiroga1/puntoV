<template>
    <div>
        <label for="buscarproducto" class="form-label">Buscar Productos</label>
        <input v-model="term" type="text" class="form-control" id="buscarproducto">
        <div v-for="prod in productosByTerm" :key="prod.clave">
            <span @click="seleccionar(prod)">{{ prod.clave }} | {{ prod.descripcion }} | ${{ prod.precio }}</span>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('vender', ['getProductsByTerm']),
        productosByTerm() {
            return this.getProductsByTerm(this.term)
        }
    },
    data() {
        return {
            term: '',
            prodseleccionado: {}
        }
    },
    methods: {
        ...mapActions('vender', ['seleccionarProd']),
        seleccionar(producto) {
            const { descripcion, clave, precio, cantidad, articulo } = producto
            this.prodseleccionado = { descripcion, clave, precio, cantidad, articulo }
            this.term = ''
            this.seleccionarProd(this.prodseleccionado)
            this.$emit('selProducto', this.prodseleccionado)
        }
    }
}
</script>