<template>
    <v-app class="principal">
        <ToolbarUser/>
        <v-card class="cardForm" elevation="20">
            <v-tabs
                    fixed-tabs
                    background-color="primary"
                    dark
            >
                <!--<v-tab>
                    Inicio
                </v-tab>-->
                <v-tab>
                    Gestión de usuarios
                </v-tab>
                <v-tab>
                    Historial de pedidos
                </v-tab>
                <v-tab>
                    Cuenta
                </v-tab>
                <!--<v-tab-item>
                    <v-card
                            class="mx-auto text-center cardForm"
                            color="primary"
                            dark
                            max-width="600"
                    >
                        <v-card-text>
                            <v-sheet color="rgba(0, 0, 0, .12)">
                                <v-sparkline
                                        :value="value"
                                        color="rgba(255, 255, 255, .7)"
                                        height="100"
                                        padding="24"
                                        stroke-linecap="round"
                                        smooth
                                >
                                    <template v-slot:label="item">
                                        ${{ item.value }}
                                    </template>
                                </v-sparkline>
                            </v-sheet>
                        </v-card-text>

                        <v-card-text>
                            <div class="display-1 font-weight-thin">Hoy</div>
                        </v-card-text>
                    </v-card>
                </v-tab-item>-->
                <v-tab-item>
                    <v-card-text>
                        <v-spacer></v-spacer>
                        <GestionUsuario/>
                    </v-card-text>
                </v-tab-item>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="letter-spacing: 2px; line-height: 40px">Revisa el historial de los pedidos</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-spacer></v-spacer>
                            <TablaDatosAdmin/>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="letter-spacing: 2px; line-height: 40px">Tu cuenta</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <v-menu absolute transition="slide-y-transition">
                                <template v-slot:activator="{ on }">
                                    <v-spacer></v-spacer>
                                    <v-avatar style="margin-right: 10px;" size="200" color="primary" v-on="on">
                                        <v-img :src="url"></v-img>
                                    </v-avatar>
                                </template>
                                <v-divider></v-divider>
                            </v-menu>
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
                            <strong> Ultimo inicio de sesión: </strong> {{user.lastLogin}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> Fecha de creación: </strong> {{user.createdAt}}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <EditarPerfil class="container"/>
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
    import TablaDatosAdmin from "./TablaDatosAdmin";
    import EditarPerfil from "./EditarPerfil";
    import GestionUsuario from "./GestionUsuario";

    let db = firebase.firestore();
    let storage = firebase.storage("gs://violette-8b112.appspot.com");

    export default {
        name: "Admin",
        components: {
            ToolbarUser, TablaDatosAdmin, EditarPerfil, GestionUsuario
        },
        data() {
            return {
                user: null,
                alertGuardar: false,
                dialog: false,
                url: '',
                value: [
                    423,
                    446,
                    675,
                    510,
                    590,
                    610,
                    760,
                ],
            }
        },
        created() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
        },
        mounted() {
            let child = storage.ref(`profilePhotos/${this.user.uid}`);
            child.getDownloadURL().then(url => {
                this.url = url;
            });
        },
        methods: {
            formulario: function () {
                this.$router.push({name: 'app'})
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>
