<template>
    <v-app class="principal">
        <ToolbarUser/>
        <v-card class="cardForm" elevation="20">
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
                            <h1>Bienvenido, {{nombre}} {{apellido}}</h1>
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
                            <strong> Nombre: </strong> {{nombre}} {{apellido}}
                        </v-card-text>
                        <v-card-text class="text-center">
                            <strong> Email: </strong> {{user.email}}
                        </v-card-text>
                        <v-card-text class="text-center">
                            <strong> Cédula: </strong> {{user.cedula}}
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn block large>Cambiar contraseña</v-btn>
                        </v-card-actions>
                        <v-card-actions class="justify-center">
                            <v-btn color="purple white--text" block large @click="logout">Salir</v-btn>
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
        components:{
            ToolbarUser
        },
        data() {
            return {
                user: null,
                nombre: '',
                apellido: '',
                tab: null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
                tabs: 3
            }
        },
        created() {
            this.user = firebase.auth().currentUser;
            this.nombre = this.user.displayName.split('.')[0];
            this.apellido = this.user.displayName.split('.')[1];
        },
        methods: {
            logout() {
                firebase.auth().signOut()
                    .then(() => this.$router.push("Bienvenida"))
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>