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
                            <h1> Bienvenido, {{nombre}} {{apellido}}</h1>
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
                            <strong> Nombre: </strong> {{nombre}} {{apellido}}
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            <strong> Email: </strong> {{user.email}}
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            <strong> Cédula: </strong> {{user.cedula}}
                        </v-card-text>
                        <v-card-actions>
                            <v-row justify="center">
                                <v-dialog v-model="dialog" fullscreen hide-overlay
                                          transition="dialog-bottom-transition">
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" dark v-on="on">Editar</v-btn>
                                    </template>
                                    <v-card>
                                        <v-toolbar dark color="primary">
                                            <v-btn icon dark @click="dialog = false">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                            <v-toolbar-title>EDITAR USUARIO</v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-toolbar-items>
                                                <v-btn dark text @click="dialog = false">Guardar</v-btn>
                                            </v-toolbar-items>
                                        </v-toolbar>
                                        <v-list three-line subheader>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Nombres:"  >  </v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Apellidos:"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Cédula" type="number"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Teléfono:" type="number"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Ciudad:"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Departamento:"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field
                                                                    label="Dirección"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6" md="5">
                                                            <v-text-field label="Barrio:"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>
                                        </v-list>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-app>
</template>

<script>
    import firebase from "../firebase/libFirebase"
    import ToolbarUser from "./ToolbarUser";

    export default {
        name: "Usuario",
        components: {
            ToolbarUser
        },
        data() {
            return {
                user: null,
                id: '',
                nombre: '',
                apellido: '',
                cedula: '',
                dialog: false
            }
        },
        mounted() {
            if (localStorage.getItem('user')) {
                    this.user = JSON.parse(localStorage.getItem('user'));
                    this.nombre = this.user.user.displayName.split('.')[0];
                    this.apellido = this.user.user.displayName.split('.')[1];
            }
        },
        methods: {
            logout() {
                firebase.auth().signOut()
                    .then(() => this.$router.push("Bienvenida"))
            },
            formulario: function () {
                this.$router.push({name: 'app'})
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>