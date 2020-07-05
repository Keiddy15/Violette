<template>
    <div id="app">
        <v-toolbar class="toolbar">
            <v-toolbar-title class="ma-6 tituloLogo">
                <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoBienvenida.png?alt=media&token=24f4386d-1211-4d9c-a4c3-9c6ebd97f14e"
                       width="70" height="70" aspect-ratio="6"
                       contain @click="inicio"></v-img>
            </v-toolbar-title>
            <v-toolbar-title class="tituloBienvenida" v-if="user" style="letter-spacing: 2px">Tu cuenta
            </v-toolbar-title>
            <v-toolbar-title class="tituloBienvenida" v-if="!user" style="letter-spacing: 2px">Violette - Sports Wear
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu v-if="logueado" bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="white" v-bind="attrs"
                           v-on="on" class="menuHamburger">
                        <v-icon>
                            mdi-menu
                        </v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            :to="item.url"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <div class="conjuntoBotones2" v-if="!user">
                <v-btn text x-large class="white--text" @click="inicio">
                    Inicio
                </v-btn>
                <v-btn text x-large v-if="logueado" class="white--text" @click="registrar">
                    ¡Registrate!
                </v-btn>
                <v-btn text x-large class="white--text" @click="login">
                    {{iniciado}}
                </v-btn>
                <v-btn text x-large v-if="!logueado" class="white--text" @click="logout">
                    Salir
                </v-btn>
            </div>
            <div class="conjuntoBotones" v-if="user">
                <v-menu transition="slide-y-transition" :nudge-bottom="55">
                    <template v-slot:activator="{ on }">
                        <v-spacer></v-spacer>
                        <v-avatar style="margin-right: 10px;" color="white" v-on="on">
                            <img :src="url" alt="John">
                        </v-avatar>
                    </template>
                    <v-card>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <img :src="url" alt="John">
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title>{{user.nombre}} {{user.apellido}}</v-list-item-title>
                                    <v-list-item-subtitle>#Violette</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-badge v-if="pedidos > 0" color="primary" style="right: 10px" :content="pedidos">
                                        <v-icon @click="moverA">mdi-truck</v-icon>
                                    </v-badge>
                                    <v-icon @click="moverA" v-if="pedidos === 0">mdi-truck</v-icon>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list>
                            <v-list-item>
                                <v-btn class="alignMenuButtons" block text @click="inicio">
                                    <v-icon>
                                        mdi-home
                                    </v-icon>
                                    Página principal
                                </v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn block class="alignMenuButtons" text @click="formulario">
                                    <v-icon>
                                        mdi-cart-plus
                                    </v-icon>
                                    Realizar Pedido
                                </v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn block class="alignMenuButtons" v-if="user.admin === 'false'" text @click="cuenta">
                                    <v-icon>
                                        mdi-account
                                    </v-icon>
                                    Tu cuenta
                                </v-btn>
                                <v-btn block class="alignMenuButtons" v-else text @click="cuenta">
                                    <v-icon>
                                        mdi-view-dashboard-outline
                                    </v-icon>
                                    Panel de Administración
                                </v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn block class="alignMenuButtons" text @click="logout">
                                    <v-icon>
                                        mdi-logout
                                    </v-icon>
                                    Salir
                                </v-btn>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </div>
        </v-toolbar>
    </div>
</template>

<script>
    import firebase from '../firebase/libFirebase'
    import Vuex from 'vuex'

    let storage = firebase.storage("gs://violette-8b112.appspot.com");

    export default {
        name: "ToolbarUser",
        data() {
            return {
                user: null,
                drawer: false,
                iniciado: '',
                logueado: false,
                url: '',
                items: [{title: 'Inicio', url: '/'}, {title: 'Registrate', url: '/registro'}, {
                    title: 'Inicia Sesión',
                    url: '/login'
                }]
            }
        },
        mounted() {
            if (localStorage.getItem('user')) {
                this.iniciado = "Tu cuenta";
                this.logueado = false;
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            } else {
                this.iniciado = "Ingresar";
                this.logueado = true;
            }
            let child = storage.ref(`profilePhotos/${this.user.uid}`);
            child.getDownloadURL().then(url => {
                this.url = url;
            });

        },
        computed: {
            ...Vuex.mapState(["tabs", "pedidos"]),
        },
        methods: {
            ...Vuex.mapMutations(["moveTab"]),
            registrar: function () {
                this.$router.push({name: 'Registro'})
            },
            inicio: function () {
                this.$router.push({name: 'Bienvenida'});
            },
            login: function () {
                this.$router.push({name: 'Login'});
            },
            cuenta() {
                console.log(this.user.admin);
                if (this.user.admin === 'true') {
                    this.$router.push({name: 'Admin'});
                } else {
                    this.$router.push({name: 'Usuario'});
                }
            },
            formulario: function () {
                this.$router.push({name: 'app'})
            },
            logout: function () {
                localStorage.removeItem('user');
                localStorage.removeItem('userExtraData');
                firebase.auth().signOut()
                    .then(() => {
                        this.$router.push({name: 'Bienvenida'});
                        this.$router.go();
                    });
            },
            moverA() {
                this.$store.commit('moveTab', 3);
                if (this.$router.currentRoute.path !== '/usuario') {
                    this.$router.push({name: 'Usuario'});
                }
            }

        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>
