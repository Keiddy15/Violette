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
                            <!-- <v-text-field
                                     label="Barrio:"
                                     v-model='barrio'
                                     required
                                     outlined
                                     class="fields"
                                     :rules="barrioRules"
                                     clearable
                             ></v-text-field>-->
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
                    <v-col cols="12" sm="12" md="12">
                        <v-row class="rowForm">
                            <div class="radio">
                                <v-label>Tipo de residencia:</v-label>
                                <div class="pl-6 pt-1">
                                    <label class="pr-2">
                                        <input type="radio" v-model="radio.sel" value="CR"> Conjunto residencial
                                    </label>
                                    <label class="pr-2">
                                        <input type="radio" v-model="radio.sel" value="C"> Casa
                                    </label>
                                    <label class="pr-2">
                                        <input type="radio" v-model="radio.sel" value="RT"> Retirar en transportadora
                                    </label>
                                </div>
                            </div>
                            <v-text-field
                                    v-if="radio.sel === 'CR' || radio.sel === 'C'"
                                    label="Dirección:"
                                    v-model='direccion'
                                    required
                                    outlined
                                    :rules="direccionRules"
                                    clearable
                                    class="fields"
                            ></v-text-field>
                            <v-text-field
                                    v-if="radio.sel === 'RT'"
                                    label="lugar de entrega:"
                                    v-model='lugarEntrega'
                                    required
                                    outlined
                                    :rules="lugarEntregaRules"
                                    clearable
                                    class="fields"
                            ></v-text-field>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                        <v-row class="rowForm">
                            <v-text-field
                                    v-if="radio.sel === 'CR'"
                                    label="Número de casa o aparatamento:"
                                    v-model='numeroCasa'
                                    required
                                    outlined
                                    :rules="numeroCasaRules"
                                    clearable
                                    class="fields"
                            ></v-text-field>
                            <v-text-field
                                    v-if="radio.sel === 'CR'"
                                    label="Torre:"
                                    v-model='torre'
                                    required
                                    outlined
                                    clearable
                                    class="fields"
                            ></v-text-field>
                            <v-text-field
                                    v-if="radio.sel === 'C'"
                                    label="Barrio:"
                                    v-model='barrio'
                                    required
                                    outlined
                                    :rules="barrioRules"
                                    clearable
                                    class="fields"
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
                numeroCasa: "",
                torre: "",
                lugarEntrega: "",
                ErrorValidacion: false,
                radio: {
                    sel: ''
                },
                namesRules: [
                    v => !!v || 'Los nombres son requeridos.'
                ],
                apellidosRules: [
                    v => !!v || 'Los apellidos son requeridos.'
                ],
                cedulaRules: [
                    v => !!v || 'La cédula es requerida.'
                ],
                ciudadRules: [
                    v => !!v || 'La ciudad es requerida.'
                ],
                depRules: [
                    v => !!v || 'El departamento es requerido.'
                ],
                barrioRules: [
                    v => !!v || 'El barrio es requerido.'
                ],
                direccionRules: [
                    v => !!v || 'La dirección es requerida.'
                ],
                celularRules: [
                    v => !!v || 'El celular es requerido.'
                ],
                numeroCasaRules: [
                    v => !!v || 'El número de casa es requerido.'
                ],
                lugarEntregaRules: [
                    v => !!v || 'El lugar de entrega es requerido.'
                ]
            }
        },
        components: {
            Toolbar
        },
        mounted() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
            if (localStorage.getItem('userExtraData')) {
                let objectJSON = JSON.parse(JSON.parse(localStorage.getItem('userExtraData')));
                this.ciudad = objectJSON.ciudad;
                this.departamento = objectJSON.departamento;
                this.telefono = objectJSON.telefono;
            } else {
                db.collection('pedidos').doc(this.user.uid).get().then((doc) => {
                    this.barrio = doc.data().barrio;
                    this.ciudad = doc.data().ciudad;
                    this.direccion = doc.data().direccion;
                    this.departamento = doc.data().departamento;
                    this.telefono = doc.data().telefono;
                    this.lugarEntrega = doc.data().lugarEntrega;
                    this.numeroCasa = doc.data().numeroCasa;
                    this.torre = doc.data().torre;
                })
            }
        },
        computed: {},
        methods: {
            /*sumarDias(fecha) {
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
            },*/
            buscarUsuario: function () {
                let usuarios = db.collection('usuarios').doc(this.Cedula);
                usuarios.get().then((doc) => {
                    this.Nombre = doc.data().Nombres;
                    console.log(radio)
                }).catch((error) => {
                    console.log(error);
                });
            }
            ,
            submit: function () {
                let objectJSON = '{ ' +
                    '"ciudad":"' + this.ciudad + '" , ' +
                    '"telefono":"' + this.telefono + '", ' +
                    '"departamento": "' + this.departamento + '"}';
                const parse = JSON.stringify(objectJSON);
                localStorage.setItem('userExtraData', parse);
                this.ErrorEnviando = false;
                this.ErrorValidacion = false;
                let pedidos = db.collection('pedidos');
                let CR =
                    (
                        (
                            this.user.nombre !== '' && this.user.cedula !== '' &&
                            this.ciudad !== '' && this.departamento !== '' &&
                            this.numero !== '' && this.apellido !== '' &&
                            this.direccion !== '' && this.numeroCasa !== '' ||
                            this.torre !== ''
                        )
                    );
                let C =
                    (
                        (
                            this.user.nombre !== '' && this.user.cedula !== '' &&
                            this.ciudad !== '' && this.departamento !== '' &&
                            this.numero !== '' && this.apellido !== '' &&
                            this.direccion !== '' && this.barrio !== ''
                        )
                    );
                let RT =
                    (
                        (
                            this.user.nombre !== '' && this.user.cedula !== '' &&
                            this.ciudad !== '' && this.departamento !== '' &&
                            this.numero !== '' && this.apellido !== '' &&
                            this.lugarEntrega !== ''
                        )
                    );
                if (CR) {
                    this.loadingEnviar = true;
                    pedidos.add({
                        idUser: this.user.uid,
                        fechaCompra: new Date(),
                        //fechaEntrega: this.sumarDias(new Date()),
                        direccion: this.direccion,
                        departamento: this.departamento,
                        ciudad: this.ciudad,
                        telefono: this.telefono,
                        numeroCasa: this.numeroCasa,
                        torre: this.torre,
                    }).then(() => {
                        setTimeout(() => {
                            this.$router.push({name: 'Agradecimientos'});
                        }, 2000);
                    }).catch(() => {
                        this.ErrorEnviando = true;
                        this.loadingEnviar = false;
                    });
                    this.ErrorValidacion = false;
                } else if (C) {
                    this.loadingEnviar = true;
                    pedidos.add({
                        idUser: this.user.uid,
                        fechaCompra: new Date(),
                        //fechaEntrega: this.sumarDias(new Date()),
                        direccion: this.direccion,
                        barrio: this.barrio,
                        departamento: this.departamento,
                        ciudad: this.ciudad,
                        telefono: this.telefono,
                    }).then(() => {
                        setTimeout(() => {
                            this.$router.push({name: 'Agradecimientos'});
                        }, 2000);
                    }).catch(() => {
                        this.ErrorEnviando = true;
                        this.loadingEnviar = false;
                    });
                    this.ErrorValidacion = false;
                } else if (RT) {
                    this.loadingEnviar = true;
                    pedidos.add({
                        idUser: this.user.uid,
                        fechaCompra: new Date(),
                        //fechaEntrega: this.sumarDias(new Date()),
                        departamento: this.departamento,
                        ciudad: this.ciudad,
                        telefono: this.telefono,
                        lugarEntrega: this.lugarEntrega,
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
            },
        }
    }
</script>

<style type="text/css" scoped>
    @import "../assets/estilos.css";
</style>
