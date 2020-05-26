<template>
    <div id="app">
        <v-toolbar class="toolbar">
            <v-toolbar-title class="ma-6 tituloLogo">
                <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoBienvenida.png?alt=media&token=24f4386d-1211-4d9c-a4c3-9c6ebd97f14e"
                       width="70" height="70" aspect-ratio="6"
                       contain></v-img>
            </v-toolbar-title>
            <v-toolbar-title class="tituloBienvenida" style="letter-spacing: 2px">Violette - Sports Wear
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text menuHamburger"></v-app-bar-nav-icon>
            <div class="conjuntoBotones">
                <v-btn text x-large class="white--text" @click="inicio">
                    Inicio
                </v-btn>
                |
                <v-btn text x-large class="white--text" @click="registrar">
                    ¡Registrate!
                </v-btn>
                |
                <v-btn text x-large class="white--text" @click="login">
                    Ingresar
                </v-btn>
            </div>
        </v-toolbar>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                color="purple"
                class="navigationDrawer"
        >
            <v-container>
                <v-container class="ma-2 tituloLogo d-flex">
                    <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoBienvenida.png?alt=media&token=24f4386d-1211-4d9c-a4c3-9c6ebd97f14e"
                           width="70" height="70" aspect-ratio="6"
                           contain></v-img>
                </v-container>
                <span class="tituloBienvenida">Menú</span>
            </v-container>


            <v-list
                    nav
            >
                <v-list-item-group
                        active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title class="white--text ma-1" @click="inicio">Inicio</v-list-item-title>
                    </v-list-item>
                    <v-divider class="white ma-1"></v-divider>
                    <v-list-item>
                        <v-list-item-title class="white--text" @click="login">Ingresar</v-list-item-title>
                    </v-list-item>
                    <v-divider class="white ma-1"></v-divider>
                    <v-list-item>
                        <v-list-item-title class="white--text" @click="registrar">Registrate</v-list-item-title>
                    </v-list-item>
                    <v-divider class="white ma-1"></v-divider>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "Toolbar",
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            registrar: function () {
                this.$router.push({name: 'Registro'})
            },
            realizar: function () {
                this.$router.push({name: 'app'});
            },
            inicio: function () {
                this.$router.push({name: 'Bienvenida'});
            },
            login: function () {
                this.$router.push({name: 'Login'});
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>