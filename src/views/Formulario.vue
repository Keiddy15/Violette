<template>
    <div id="app">
        <v-app class="principal">
            <Toolbar/>
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
                    <v-alert type="error" v-if="ErrorValidacion">Por favor, verifique los campos.
                    </v-alert>
                    <v-alert type="error" v-if="ErrorEnviando" dismissible>La información del pedido no pudo ser
                        enviada, intetelo de nuevo.
                    </v-alert>
                    <v-col cols="12" sm="12" md="12">
                        <v-row class="rowForm">
                            <v-text-field
                                    label='Nombres:'
                                    v-model='Nombres'
                                    :rules="namesRules"
                                    required
                                    outlined
                                    clearable
                                    class="fields"
                            >
                            </v-text-field>
                            <v-text-field
                                    label='Apellidos:'
                                    v-model='Apellidos'
                                    :rules="apellidosRules"
                                    required
                                    outlined
                                    clearable
                                    class="fields"
                            >
                            </v-text-field>

                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <v-row class="rowForm">
                            <v-text-field
                                    label="Cédula:"
                                    v-model='Cedula'
                                    type="number"
                                    :rules="cedulaRules"
                                    required
                                    outlined
                                    class="fields"
                                    clearable
                            ></v-text-field>
                            <v-text-field
                                    label="Ciudad:"
                                    v-model='Ciudad'
                                    required
                                    outlined
                                    :rules="ciudadRules"
                                    class="fields"
                                    clearable
                            ></v-text-field>

                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <v-row class="rowForm">
                            <v-text-field
                                    label="Departamento:"
                                    v-model='Departamento'
                                    required
                                    :rules="depRules"
                                    outlined
                                    class="fields"
                                    clearable
                            ></v-text-field>
                            <v-text-field
                                    label="Barrio:"
                                    v-model='Barrio'
                                    required
                                    outlined
                                    class="fields"
                                    :rules="barrioRules"
                                    clearable
                            ></v-text-field>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                        <v-row class="rowForm">
                            <v-text-field
                                    label="Dirección:"
                                    v-model='Direccion'
                                    required
                                    outlined
                                    :rules="direccionRules"
                                    clearable
                                    class="fields"
                            ></v-text-field>
                            <v-text-field
                                    label="Celular:"
                                    v-model='Numero'
                                    class="fields"
                                    required
                                    outlined
                                    clearable
                                    :rules="celularRules"
                            ></v-text-field>
                        </v-row>

                    </v-col>
                    <div class="text-center">
                        <v-btn class="purple  white--text" block :loading="loadingEnviar" large @click="submit">Enviar
                        </v-btn>
                    </div>
                </v-card>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    import Toolbar from './Toolbar'
    import firebase from '../firebase/libFirebase'

    let db = firebase.firestore();
    export default {
        name: "app",
        components: {
            Toolbar
        },
        data() {
            return {
                ErrorEnviando: false,
                valido: false,
                loadingEnviar: false,
                Nombres: "",
                Apellidos: "",
                Cedula: "",
                Ciudad: "",
                Departamento: "",
                Barrio: "",
                Direccion: "",
                Numero: "",
                ErrorValidacion: false,
                namesRules: [
                    v => !!v || 'Los Nombres son requeridos.'
                ],
                apellidosRules: [
                    v => !!v || 'Los Apellidos son requeridos.'
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
                this.ErrorEnviando = false;
                this.ErrorValidacion = false;
                let usuarios = db.collection('usuarios');
                let validar = (this.Nombres !== '' && this.Cedula !== '' &&
                    this.Ciudad !== '' && this.Barrio !== '' &&
                    this.Departamento !== '' &&
                    this.Direccion !== '' && this.Numero !== '' && this.Apellidos !== '');
                console.log(validar);
                if (validar) {
                    this.loadingEnviar = true;
                    usuarios.add({
                        Nombres: this.Nombres,
                        Apellidos: this.Apellidos,
                        Ciudad: this.Ciudad,
                        Barrio: this.Barrio,
                        Departamento: this.Departamento,
                        Direccion: this.Direccion,
                        Numero: this.Numero,
                        Cedula: this.Cedula,
                        TimeStamp: new Date()
                    }).then(() => {
                        setTimeout(() => {
                            this.$router.push({name: 'Agradecimientos'});
                        }, 2000);
                    }).catch(() => {
                        this.ErrorEnviando = true;
                        this.loadingEnviar = false;
                    });
                    this.ErrorValidacion = false;
                } else {
                    this.ErrorValidacion = true;
                }
            }
        }
    }
</script>

<style type="text/css" scoped>
    @import "../assets/estilos.css";
</style>

