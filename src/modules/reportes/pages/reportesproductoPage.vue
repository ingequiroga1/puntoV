<template>
    <div class="container">
        <h1>Pantalla Reportes</h1>
        <form @submit.prevent="handleSubmit">
            <div class="row">
                <div class="col">
                    <label for="inicio" class="form-label">Inicio</label>
                    <input type="date" class="form-control" id="inicio" required v-model="inicio">
                </div>
                <div class="col">
                    <label for="fin" class="form-label">Fin</label>
                    <input type="date" class="form-control" id="fin" required v-model="fin">
                </div>
                <div class="col">
                    <br />
                    <button class="btn btn-primary" @click="generarReporte">Generar</button>
                </div>
            </div>

        </form>
        <tabla-reporte-component-vue :datos=datosReporte />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import tablaReporteComponentVue from '../../productos/components/tablaReporteComponent.vue'
export default {
    data() {
        return {
            inicio: '',
            fin: '',
            datosReporte: null
        }
    },
    methods: {
        ...mapActions('producto', {
            generarReporteProductos: 'generarReporteProductos'
        }),
        async generarReporte() {

            let fechasReporte = {
                inicio: this.inicio,
                fin: this.fin
            }
            this.datosReporte = await this.generarReporteProductos(fechasReporte)
        },
        handleSubmit() {
            this.generarReporte()
        }
    },
    components: {
        tablaReporteComponentVue
    }

}
</script>

<style></style>