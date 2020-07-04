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
                                    v-model='user.nombre'
                                    :rules="namesRules"
                                    required
                                    outlined
                                    clearable
                                    class="fields"
                            >
                            </v-text-field>
                            <v-text-field
                                    label='Apellidos:'
                                    v-model='user.apellido'
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
                                    v-model='user.cedula'
                                    type="number"
                                    :rules="cedulaRules"
                                    required
                                    outlined
                                    class="fields"
                                    clearable
                            ></v-text-field>
                            <v-text-field
                                    label="Ciudad:"
                                    v-model='ciudad'
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
                                    v-model='departamento'
                                    required
                                    :rules="depRules"
                                    outlined
                                    class="fields"
                                    clearable
                            ></v-text-field>
                            <v-text-field
                                    label="Barrio:"
                                    v-model='barrio'
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
                                    v-model='direccion'
                                    required
                                    outlined
                                    :rules="direccionRules"
                                    clearable
                                    class="fields"
                            ></v-text-field>
                            <v-text-field
                                    label="Celular:"
                                    v-model='telefono'
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
    import Toolbar from './ToolbarUser'
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
                user: [],
                ciudad: "",
                departamento: "",
                barrio: "",
                direccion: "",
                telefono: "",
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
        mounted() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
            if (localStorage.getItem('userExtraData')) {
                let objectJSON = JSON.parse(JSON.parse(localStorage.getItem('userExtraData')));
                this.barrio = objectJSON.barrio;
                this.ciudad = objectJSON.ciudad;
                this.direccion = objectJSON.direccion;
                this.departamento = objectJSON.departamento;
                this.telefono = objectJSON.telefono;
            } else {
                db.collection('pedidos').doc(this.user.uid).get().then((doc) => {
                    this.barrio = doc.data().barrio;
                    this.ciudad = doc.data().ciudad;
                    this.direccion = doc.data().direccion;
                    this.departamento = doc.data().departamento;
                    this.telefono = doc.data().telefono;
                })
            }
        },
        computed: {

        },
        methods: {
            sumarDias (fecha) {
                if (fecha.getDay() === 6) {
                    fecha.setDate(fecha.getDate() + 2);
                    fecha.setDate(fecha.getDate() + Math.floor(Math.random() * (5 - 2)) + 2)
                } else if (fecha.getDay() === 0) {
                    fecha.setDate(fecha.getDate() + 1);
                    fecha.setDate(fecha.getDate() + Math.floor(Math.random() * (5 - 2)) + 2)
                } else {
                    fecha.setDate(fecha.getDate() + 1);
                    this.sumarDias(fecha)
                }
                return fecha
            },
            buscarUsuario: function () {
                let usuarios = db.collection('usuarios').doc(this.Cedula);
                usuarios.get().then((doc) => {
                    this.Nombre = doc.data().Nombres;
                }).catch((error) => {
                    console.log(error);
                });
            }
            ,
            submit: function () {
                this.ErrorEnviando = false;
                this.ErrorValidacion = false;
                let pedidos = db.collection('pedidos');
                let validar = (this.user.nombre !== '' && this.user.cedula !== '' &&
                    this.ciudad !== '' && this.Barrio !== '' &&
                    this.departamento !== '' &&
                    this.direccion !== '' && this.numero !== '' && this.apellidos !== '');
                if (validar) {
                    this.loadingEnviar = true;
                    pedidos.add({
                        idUser: this.user.uid,
                        entregado: false,
                        enviado: false,
                        fechaCompra: new Date(),
                        fechaEntrega: this.sumarDias(new Date()),
                        direccion: this.direccion,
                        barrio: this.barrio,
                        departamento: this.departamento,
                        ciudad: this.ciudad,
                        telefono: this.telefono
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

