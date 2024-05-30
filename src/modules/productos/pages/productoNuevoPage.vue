<template>
    <div class="container">
        <h3>Alta de productos</h3>
        <p>Datos del producto</p>
        <hr>
        <div class="container mt-3">
            <form @submit.prevent="handleSubmit">
                <div class="row mb-3">
                    <div class="col-md-4">
                        <label for="clave" class="form-label">Clave</label>
                        <input v-model="clave" type="text" class="form-control" id="clave"
                            placeholder="Ingresa clave del producto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input v-model="nombreproducto" type="text" class="form-control" id="nombre"
                            placeholder="Ingresa el nombre del producto">
                    </div>
                    <div class="col-md-4">
                        <label for="categoria" class="form-label">Categoria</label>
                        <input v-model="categoria" type="text" class="form-control" id="categoria"
                            placeholder="Ingresa categoria del producto">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <label for="precio" class="form-label">Precio</label>
                        <input v-model="precio" type="number" class="form-control" id="precio"
                            placeholder="Ingresa precio del producto">
                    </div>
                    <div class="col-md-6">
                        <label for="cantidad" class="form-label">Cantidad</label>
                        <input v-model="cantidad" type="number" class="form-control" id="cantidad"
                            placeholder="Ingresa cantidad a registrar">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
        </div>
        <div class="mt-5">
            <a href="/producto">Salir</a>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            clave: '',
            nombreproducto: '',
            categoria: '',
            precio: 0,
            cantidad: 0
        }

    },
    methods: {
        ...mapActions('producto', { crearProducto: 'createProducto' }),
        async guardarProducto() {
            let _Msg = ''
            let _Icon = 'info'
            let _Title = 'Guardado'

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            let nuevoprod = {
                "clave": this.clave,
                "descripcion": this.nombreproducto,
                "precio": this.precio,
                "linea": this.categoria,
                "existencia": this.cantidad
            }

            Swal.showLoading()

            const { msg } = await this.crearProducto(nuevoprod)
            _Msg = msg

            Swal.fire(_Title, _Msg, _Icon)
            this.$router.push({ name: 'productoadmin' })

        },
        handleSubmit() {
            this.guardarProducto()
        }
    }

}
</script>