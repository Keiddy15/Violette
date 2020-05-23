<template>
    <v-app class="principal">
        <v-card class="cardForm2" elevation="20">
            <v-tabs
                    fixed-tabs
                    background-color="primary"
                    class="cardForm2"
                    dark
            >
                <v-tab>
                    Inicio
                </v-tab>
                <v-tab>
                    Pedidos
                </v-tab>
                <v-tab>
                    Cuenta
                </v-tab>
                <v-tab-item>
                    <v-card
                            flat
                            tile
                    >
                        <v-card-text>
                            <h1>Bienvenida, Keiddy García</h1>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card
                            flat
                            tile
                    >
                        <v-card-text>
                            <h1>Sus pedidos son:</h1>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card
                            flat
                            tile
                    >
                        <v-card-text class="text-center">
                            <strong> Nombre: </strong>  Keiddy García
                        </v-card-text>
                        <v-card-text class="text-center">
                            <strong> Email: </strong> keiddygarcia@gmail.com
                        </v-card-text>
                        <v-card-text class="text-center">
                            <strong> Cédula: </strong> 100
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn text>Cambiar contraseña</v-btn>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <v-btn color="purple white--text" @click="logout">Salir</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </v-app>
</template>

<script>
    import firebase from "../firebase/libFirebase"
    export default {
        name: "Usuario",
        data(){
            return{
                tab: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                tabs: 3
            }
        },
        methods:{
            logout(){
                firebase.auth().signOut()
                    .then(() => this.$router.push("Bienvenida"))
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>