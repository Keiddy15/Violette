<template>
    <v-app>

        <v-toolbar class="toolbar">
            <v-toolbar-title class="ma-6 tituloLogo">
                <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoBienvenida.png?alt=media&token=24f4386d-1211-4d9c-a4c3-9c6ebd97f14e"
                       width="70" height="70" aspect-ratio="6"
                       contain></v-img>
            </v-toolbar-title>
            <v-toolbar-title class="tituloBienvenida">¡Bienvenidos a Violette!</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text menuHamburger"></v-app-bar-nav-icon>
            <div class="conjuntoBotones">
                <v-btn text x-large class="white--text" @click="inicio">
                    Inicio
                </v-btn>
                |
                <v-btn text x-large class="white--text" @click="realizar">
                    Realizar Pedido
                </v-btn>
                |
                <v-btn text x-large class="white--text" @click="usuario">
                    Ingresar
                </v-btn>
                |
                <v-btn text x-large class="white--text">
                    Acerca de
                </v-btn>
            </div>
        </v-toolbar>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                right
                class="navigationDrawer"
        >
            <v-list
                    nav
            >
                <v-list-item-group
                        active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title @click="home">Inicio</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title @click="realizar">Realizar Pedido</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title @click="usuario">Ingresar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Acerca de</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-app>
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
            realizar: function () {
                this.$router.push({name: 'app'});
            },
            inicio: function () {
                this.$router.push({name: 'Bienvenida'});
            },
            usuario: function () {
                this.$router.push({name: 'Usuario'});
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>