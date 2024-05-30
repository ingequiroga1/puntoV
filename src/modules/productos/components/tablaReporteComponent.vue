<template>
    <table class="table">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Vendido</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in datos" :key="item">
                <th scope="row">{{ item.producto }}</th>
                <td>{{ FormatoDinero(item.totalQuantity) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        datos: null
    },
    methods: {
        FormatoDinero(valor) {
            return '$ ' + valor.toLocaleString("en-US");
        }
    }

}
</script>

<style></style>