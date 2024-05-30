<template>
    <div>
        <DataTable class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Marca</th>
                    <th>Existencias</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in productosObtener" :key="item">
                    <td>{{ item.clave }}</td>
                    <td>{{ item.descripcion }}</td>
                    <td>{{ FormatoDinero(item.precio) }}</td>
                    <td>{{ item.marca }}</td>
                    <td>{{ item.existencia }}</td>
                    <td><button @click="enviarEditar(item)" class="btn btn-primary">Modificar</button>
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
        ...mapGetters('producto', ['getProductos']),
        productosObtener() {
            return this.getProductos
        }
    },
    methods: {
        FormatoDinero(valor) {
            return '$ ' + valor.toLocaleString("en-US");
        },
        enviarEditar(item) {
            const { _id } = item
            this.$router.push('producto/editar/' + _id)
            console.log(_id);
        }
    }
}
</script>
