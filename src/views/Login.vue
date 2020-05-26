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
                </v-form>
            </v-card-text>
            <v-btn text color="purple" block @click="registrar">
                ¿Has olvidado tu contraseña?
            </v-btn>
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
                user: [],
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
                            this.guardar(user);
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
            },
            guardar(user) {
                this.user['displayName'] = user.user.displayName;
                this.user['email'] = user.user.email;
                this.user['additionalInfo'] = user.additionalUserInfo;
                this.user['emailVerified'] = user.user.emailVerified;
                this.user['createdAt'] = user.user.metadata.creationTime;
                this.user['lastLogin'] = user.user.metadata.lastSignInTime;
                this.user['token'] = user.user.refreshToken;
                this.user['uid'] = user.user.uid;
                const parse = JSON.stringify(this.user);
                localStorage.setItem('user', parse);
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>