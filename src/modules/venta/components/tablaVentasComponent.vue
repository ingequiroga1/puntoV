<template>
    <div>
        <DataTable class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Cliente</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="item in ventasObtener" :key="item">
                    <td>{{ item.secuencia }}</td>
                    <td>{{ formatDate(item.fecha) }}</td>
                    <td>{{ FormatoDinero(item.total) }}</td>
                    <td>{{ item.capturista }}</td>
                    <td><button @click="BorrarVenta(item)" class="btn btn-primary">Borrar</button>
                        <button @click="AbrirVenta(item)" class="btn btn-info" style="margin-left: 5px;">Ver</button>
                    </td>
                </tr>
            </tbody>
        </DataTable>
    </div>
</template>
<script>
import 'datatables.net-select-bs5';
import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net-bs5';
DataTable.use(DataTablesLib);

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    components: {
        DataTable
    },
    computed: {
        ...mapGetters('vender', ['getVentas']),
        ventasObtener() {
            return this.getVentas
        }
    },
    methods: {
        FormatoDinero(valor) {
            return '$ ' + valor.toLocaleString("en-US");
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            // Then specify how you want your dates to be formatted
            return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date);
        },
        BorrarVenta(venta) {
            this.$emit('borrarVenta', venta)
        },
        AbrirVenta(venta) {
            const { _id } = venta
            this.$router.push('venta/detalle/' + _id)
        }
    }
}
</script>
