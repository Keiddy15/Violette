<template>
    <v-app class="principal">
        <ToolbarUser/>
        <v-card class="cardForm" elevation="20">
            <v-tabs
                    fixed-tabs
                    background-color="primary"
                    dark
                    icons-and-text
                    centered
                    show-arrows
                    :value="tab"
            >
                <v-tab :href="`#tab-${1}`" @click="moveTab(1)">
                    Inicio
                    <v-icon>mdi-home</v-icon>
                </v-tab>
                <v-tab :href="`#tab-${2}`" @click="moveTab(2)">
                    Rellenar Formulario
                    <v-icon>mdi-file-document-edit-outline</v-icon>
                </v-tab>
                <v-tab :href="`#tab-${3}`" @click="moveTab(3)">
                    Tus pedidos
                    <v-icon>mdi-format-list-numbered</v-icon>
                </v-tab>
                <v-tab :href="`#tab-${4}`" @click="moveTab(4)">
                    Cuenta
                    <v-icon>mdi-account</v-icon>
                </v-tab>
                <v-tabs-slider></v-tabs-slider>
                <v-tab-item :value="'tab-'+1">
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-banner two-line v-if="showBanner">
                            <v-avatar
                                    slot="icon"
                                    color="primary"
                                    size="40">
                                <v-icon color="white">
                                    mdi-cart
                                </v-icon>
                            </v-avatar>
                            Tienes {{pedidos}} pedido<i v-if="pedidos>1">s</i> pendiente<i
                                v-if="pedidos > 1">s</i> de <strong>entrega.</strong> Para saber más, ve
                            a "Tus pedidos"
                            <template v-slot:actions>
                                <v-btn
                                        color="primary"
                                        @click="moveTab(3)"
                                >Ir a tus pedidos
                                </v-btn>
                            </template>
                        </v-banner>
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
                <v-tab-item :value="'tab-'+2">
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="letter-spacing: 2px; line-height: 40px">¡Realiza tu pedido aquí!</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <span>Por favor, diligencie el siguiente <strong>formulario</strong>, para completar su compra.</span>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="purple  white--text" block large @click="formulario">Enviar formulario
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-tab-item>
                <v-tab-item :value="'tab-'+3">
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="letter-spacing: 2px; line-height: 40px">Revisa el historial de tus
                                pedidos</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-spacer></v-spacer>
                            <TablaDatosUsuarios/>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item :value="'tab-'+4">
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1 style="letter-spacing: 2px; line-height: 40px">Tu cuenta</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <v-menu absolute transition="slide-y-transition">
                                <template v-slot:activator="{ on }">
                                    <v-spacer></v-spacer>
                                    <v-avatar style="margin-right: 10px;" size="200"  v-on="on">
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
    import TablaDatosUsuarios from "./TablaDatosUsuarios";
    import UploadPhoto from './UploadPhoto'
    import EditarPerfil from './EditarPerfil'
    import Vuex from 'vuex'

    let db = firebase.firestore();
    let storage = firebase.storage("gs://violette-8b112.appspot.com");

    export default {
        name: "Usuario",
        components: {
            ToolbarUser, TablaDatosUsuarios, UploadPhoto, EditarPerfil
        },
        data() {
            return {
                user: null,
                barrio: '',
                ciudad: '',
                direccion: '',
                departamento: '',
                snackbar: true,
                showBanner: false,
                url: '',
                showMenu: false
            }
        },
        mounted() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
            let child = storage.ref(`profilePhotos/${this.user.uid}`);
            child.getDownloadURL().then(url => {
                this.url = url;
            });
            this.cantidadCompras();
        },
        computed: {
            ...Vuex.mapState(["tab", "pedidos"])
        },
        methods: {
            ...Vuex.mapMutations(["moveTab"]),
            formulario: function () {
                this.$router.push({name: 'app'})
            },
            cantidadCompras() {
                db.collection("pedidos").where("idUser", "==", this.user.uid).get().then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        this.showBanner = false;
                    } else {
                        this.$store.commit('setCountPedidos', querySnapshot.size);
                        this.showBanner = true;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>