<template>
    <div class="container">
        <h3>Editar producto</h3>
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
                            placeholder="Ingresa el nombre del producto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="categoria" class="form-label">Categoria</label>
                        <input v-model="categoria" type="text" class="form-control" id="categoria"
                            placeholder="Ingresa categoria del producto">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-4">
                        <label for="marca" class="form-label">Marca</label>
                        <input v-model="marca" type="text" class="form-control" id="marca"
                            placeholder="Ingresa marca del producto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="precio" class="form-label">Precio</label>
                        <input v-model="precio" type="number" step="0.01" class="form-control" id="precio"
                            placeholder="Ingresa precio del producto" required>
                    </div>
                    <div class="col-md-4">
                        <label for="cantidad" class="form-label">Cantidad</label>
                        <input v-model="cantidad" type="number" class="form-control" id="cantidad"
                            placeholder="Ingresa cantidad a registrar" required>
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
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'


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
            clave: '',
            nombreproducto: '',
            categoria: '',
            precio: 0,
            cantidad: 0,
            marca: ''
        }
    },
    methods: {
        ...mapActions('producto', {
            obtenerDataProducto: 'loadProducto', updateProducto: 'actualizarProducto'
        }),
        seleccionarProd(prod) {
            this.prodSelect = prod
        },
        async loadDetalleProducto(idproducto) {
            const { exitoso, resultado } = await this.obtenerDataProducto(idproducto)
            if (exitoso) {
                this.clave = resultado.clave
                this.nombreproducto = resultado.descripcion
                this.categoria = resultado.linea
                this.precio = resultado.precio
                this.cantidad = resultado.existencia
                this.marca = resultado.marca
            }
        },
        async ActualizarProducto() {
            let _Msg = ''
            let _Icon = 'info'
            let _Title = 'Actualizado'

            new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            let datosActualizar = {
                id: this.id,
                clave: this.clave,
                descripcion: this.nombreproducto,
                precio: this.precio,
                linea: this.categoria,
                existencia: this.cantidad
            }
            Swal.showLoading()

            const { exitoso } = await this.updateProducto(datosActualizar)
            console.log(exitoso);
            if (!exitoso) {
                _Msg = "Ocurrio un error al actualizar"
            }

            Swal.fire(_Title, _Msg, _Icon)


        },
        handleSubmit() {
            this.ActualizarProducto()
        }
    },
    mounted() {
        this.loadDetalleProducto(this.id)
    },
}
</script>