<template>
    <v-app class="principal">
        <Toolbar/>
            <v-card class="cardForm2" elevation="10">
                <v-card-title>Ingreso al Sistema</v-card-title>
                <v-card-text>
                    <v-form class="px-3" @submit.prevent="ingreso">
                        <v-text-field
                                label="Email:"
                                v-model="email"
                                required
                                :rules="emailRules">
                        </v-text-field>
                        <v-text-field
                                label="Contraseña:"
                                v-model="password"
                                :rules="contrasenaRules"
                                required
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
                        >
                        </v-text-field>
                        <v-card-actions class="justify-center">
                            <v-btn type="submit" color="purple white--text" block large>
                                Ingresar
                            </v-btn>
                        </v-card-actions>
                        <v-card-actions>
                            <v-btn text color="purple" @click="registrar">
                                ¿Haz olvidado tu contraseña?
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
    </v-app>
</template>

<script>
    import firebase from '../firebase/libFirebase';
    import Toolbar from './Toolbar'

    export default {
        name: "Registro",
        components: {
            Toolbar
        },
        data() {
            return {
                email: "",
                password: "",
                show1: false,
                contrasenaRules: [
                    v => !!v || 'La contraseña es requerida.'
                ],
                emailRules: [
                    v => !!v || 'El email es requerido.'
                ],
            }
        },
        methods: {
            ingreso() {
                if (this.email && this.password) {
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then((user) => {
                            this.$router.push({name: 'Usuario'});
                        })
                        .catch(function (error) {
                            let errorCode = error.code;
                            let errorMessage = error.message;
                            console.log(errorCode);
                            console.log(errorMessage);
                        })
                } else {
                    console.log("mmd")
                }
            },
            registrar() {
                this.$router.push({name: 'Registro'});
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>