<template>
    <div id="app">
        <v-app class="principal">
            <Toolbar/>
            <v-container>
                <v-form v-model="valido">
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-alert
                                border="bottom"
                                color="#E761FF"
                                dismissible
                                class="white--text"
                        >
                            Recuerde rellenar todos los campos del formulario.
                        </v-alert>
                        <v-alert type="error" v-if="ErrorValidacion" dismissible>Por favor, verifique los campos.
                        </v-alert>

                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label='Nombres y Apellidos:'
                                        v-model='Nombre'
                                        :rules="namesRules"
                                        required
                                        outlined
                                        clearable
                                        class="fields"
                                >
                                </v-text-field>
                            </v-col>

                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label="Cédula:"
                                        v-model='Cedula'
                                        type="number"
                                        :rules="cedulaRules"
                                        required
                                        outlined
                                        clearable
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label="Ciudad:"
                                        v-model='Ciudad'
                                        required
                                        outlined
                                        :rules="ciudadRules"
                                        clearable
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label="Departamento:"
                                        v-model='Departamento'
                                        required
                                        :rules="depRules"
                                        outlined
                                        clearable
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label="Barrio:"
                                        v-model='Barrio'
                                        required
                                        outlined
                                        :rules="barrioRules"
                                        clearable
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label="Dirección:"
                                        v-model='Direccion'
                                        required
                                        outlined
                                        :rules="direccionRules"
                                        clearable
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                        label="Celular:"
                                        v-model='Numero'
                                        class="fields"
                                        required
                                        outlined
                                        clearable
                                        :rules="celularRules"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <br>
                        <div class="text-center">
                            <v-btn class="purple  white--text" block :loading="loadingEnviar" large @click="submit">Enviar</v-btn>
                        </div>
                    </v-card>
                </v-form>
            </v-container>
        </v-app>
    </div>
</template>

<script>
    import Toolbar from './Toolbar'
    export default {
        name: "app",
        components:{
            Toolbar
        },
        data() {
            return {
                valido: false,
                loadingEnviar: false,
                Nombre: "",
                Cedula: "",
                Ciudad: "",
                Departamento: "",
                Barrio: "",
                Direccion: "",
                Numero: "",
                ErrorValidacion: false,
                namesRules: [
                    v => !!v || 'Nombres y Apellidos son requeridos.'
                ],
                cedulaRules: [
                    v => !!v || 'La Cedula es requerida.'
                ],
                ciudadRules: [
                    v => !!v || 'La Ciudad es requerida.'
                ],
                depRules: [
                    v => !!v || 'El Departamento es requerido.'
                ],
                barrioRules: [
                    v => !!v || 'El Barrio es requerido.'
                ],
                direccionRules: [
                    v => !!v || 'La Dirección es requerida.'
                ],
                celularRules: [
                    v => !!v || 'El Celular es requerido.'
                ]

            }

        },
        created: function () {

        },
        computed: {},
        methods: {
            buscarUsuario: function () {
                let usuarios = db.collection('usuarios').doc(this.Cedula);
                usuarios.get().then((doc) => {
                    this.Nombre = doc.data().Nombres;
                }).catch((error) => {
                    console.log(error);
                });
            },
            submit: function () {
                this.loadingEnviar = true;
                setTimeout(()=>{
                    this.$router.push({name: 'Agradecimientos'});
                }, 2000)
                /*let usuarios = db.collection('usuarios');
                let validar = (this.Nombre.length > 0 || this.Cedula.length > 0 ||
                    this.Ciudad.length > 0 || this.Barrio.length > 0 ||
                    this.Departamento.length > 0 ||
                    this.Direccion.length > 0 || this.Numero.length > 0);
                console.log(validar);
                if (validar) {
                    usuarios.doc(this.Cedula).set({
                        Nombres: this.Nombre,
                        Ciudad: this.Ciudad,
                        Barrio: this.Barrio,
                        Departamento: this.Departamento,
                        Direccion: this.Direccion,
                        Numero: this.Numero
                    });
                    this.ErrorValidacion = false;
                } else {
                    this.ErrorValidacion = true;
                }
                 */
            }
        }
    }
</script>

<style type="text/css" scoped>
    @import "../assets/estilos.css";
</style>

