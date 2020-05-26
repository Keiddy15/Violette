<template>
    <v-app class="principal">
        <ToolbarUser/>
        <v-card class="cardForm" elevation="20">
            <v-tabs
                    fixed-tabs
                    background-color="primary"
                    dark
            >
                <v-tab>
                    Inicio
                </v-tab>
                <v-tab>
                    Rellenar Formulario
                </v-tab>
                <v-tab>
                    Cuenta
                </v-tab>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="line-height: 30px;"> Bienvenido, {{user.nombre}} {{user.apellido}}</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> VIOLETTE SPORT SWEAR 💜🏋🏻‍♀ </strong>
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            Somos una marca inspirada en ropa deportiva de excelente calidad.
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            Nuestro objetivo es que te sientas cómoda y segura a la hora de entrenar.
                        </v-card-text>
                        <v-card-text class="textoUsuario">Queremos que seas parte de nuestro #TeamVIOLETTE💜
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="letter-spacing: 2px; line-height: 40px">¡Realiza tu pedido aquí!</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <span>Por favor, diligencie el siguiente <strong>formmulario</strong>, para completar su compra.</span>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="purple  white--text" block large @click="formulario">Enviar formulario</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <strong> Tu identificación: </strong> {{user.uid}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Nombre: </strong> {{user.nombre}} {{user.apellido}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Email: </strong> {{user.email}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Cédula: </strong> {{user.cedula}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Teléfono: </strong> {{user.telefono}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Ultimo inicio de sesión: </strong> {{user.lastLogin}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Fecha de creación: </strong> {{user.createdAt}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                                <v-btn color="primary" block @click="dialog = !dialog">Editar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-tab-item>
            </v-tabs>
            <v-dialog v-model="dialog" fullscreen hide-overlay
                      transition="dialog-bottom-transition">

                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>EDITAR USUARIO</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark text @click="guardarPedido">Guardar</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-card-text>
                            <v-container>
                                <v-alert type="success"
                                         v-model="alertGuardar"
                                         dismissible
                                >
                                    ¡Tus datos han sido actualizados correctamente, inicia sesión de nuevo para que los cambios surtan efecto.

                                </v-alert>
                                <v-row>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Nombres:" readonly
                                                      v-model="user.nombre"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Apellidos:" readonly
                                                      v-model="user.apellido"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Cédula" readonly type="number"
                                                      v-model="user.cedula"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Teléfono:"
                                                      type="number"
                                                      v-model="user.telefono"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Email:" readonly
                                                      v-model="user.email"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Ciudad:" v-model="ciudad"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Departamento:" v-model="departamento"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field
                                                label="Dirección"
                                                v-model="direccion"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="5">
                                        <v-text-field label="Barrio:" v-model="barrio"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-list>
                </v-card>
            </v-dialog>
        </v-card>
    </v-app>
</template>

<script>
    import firebase from "../firebase/libFirebase"
    import ToolbarUser from "./ToolbarUser";
    let db = firebase.firestore();
    export default {
        name: "Usuario",
        components: {
            ToolbarUser
        },
        data() {
            return {
                user: null,
                barrio: '',
                ciudad: '',
                direccion: '',
                departamento: '',
                alertGuardar: false,
                snackbar: true,
                dialog: false
            }
        },
        mounted() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
        },
        methods: {
            logout() {
                firebase.auth().signOut()
                    .then(() => this.$router.push("Bienvenida"))
            },
            formulario: function () {
                this.$router.push({name: 'app'})
            },
            guardarPedido() {
                db.collection('usuarios').doc(this.user.uid).update({
                    barrio: this.barrio,
                    ciudad: this.ciudad,
                    direccion: this.direccion,
                    departamento: this.departamento
                }).then(function (doc) {
                    console.log(doc)
                });
                this.alertGuardar = true;

            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>