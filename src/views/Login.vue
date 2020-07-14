<template>
    <v-app class="principal">
        <Toolbar/>
        <v-card class="cardForm2" elevation="10">
            <v-card-title>¡Ingresa ya a #Violette!</v-card-title>
            <v-card-text>
                <v-alert type="error" v-model="alertVerified" dismissible>No ha activado su cuenta, por favor, revise su
                    correo electronico.
                </v-alert>
                <v-alert type="error" v-model="alertNoData" dismissible>Por favor, rellene los campos
                    correspondientes.
                </v-alert>
                <v-alert type="error" v-model="alertUserPassIncorrect" dismissible>Contraseña incorrecta, por favor,
                    revise de nuevo.
                </v-alert>
                <v-alert type="warning" v-model="alertNotUser" dismissible>El usuario ingresado, no se encuentra en
                    nuestros registros.
                </v-alert>
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
                        <v-btn type="submit" color="purple white--text" block :loading="loadingBtn" large>
                            Ingresar
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
            <ResetPassword/>
        </v-card>
    </v-app>
</template>

<script>
    import firebase from '../firebase/libFirebase';
    import Toolbar from './ToolbarUser'
    import ResetPassword from "./ResetPassword";
    let db = firebase.firestore();
    export default {
        name: "Registro",
        components: {
            Toolbar, ResetPassword
        },
        data() {
            return {
                email: "",
                alertNoData: false,
                alertVerified: false,
                alertNotUser: false,
                password: "",
                alertUserPassIncorrect: false,
                loadingBtn: false,
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
                    this.alertNoData = false;
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then((user) => {
                            console.log(user);
                            if (!user.user.emailVerified) {
                                this.alertVerified = true;
                                firebase.auth().signOut();
                            } else {
                                this.guardar(user);
                                this.loadingBtn = true;
                            }
                        })
                        .catch((error) => {
                            switch (error.code) {
                                case 'auth/wrong-password': {
                                    this.alertUserPassIncorrect = true;
                                    break;
                                }
                                case 'auth/user-not-found': {
                                    this.alertNotUser = true;
                                    break;
                                }
                            }
                        })
                } else {
                    this.alertNoData = true;
                }
            },
            registrar() {
                this.$router.push({name: 'Registro'});
            },
            guardar(user) {
                db.collection('usuarios').doc(user.user.uid).get().then((doc) => {
                    let objectJSON = '{ "email": "' + user.user.email + '" ,' +
                        '"createdAt":"' + user.user.metadata.creationTime + '" , ' +
                        '"lastLogin":"' + user.user.metadata.lastSignInTime + '", ' +
                        '"emailVerified": "' + user.user.emailVerified + '", "uid": "' + user.user.uid + '", ' +
                        '"nombre": "' + doc.data().nombre + '",' +
                        '"apellido": "' + doc.data().apellido + '",' +
                        '"cedula": "' + doc.data().cedula + '",' +
                        '"telefono": "' + doc.data().telefono + '",' +
                        '"admin": "' + doc.data().admin + '"}';
                    const parse = JSON.stringify(objectJSON);
                    localStorage.setItem('user', parse);
                    switch (doc.data().admin) {
                        case true: {
                            setTimeout(() => {
                                this.$router.push({name: 'Admin'});
                            }, 2000);
                            break;
                        }
                        case false: {
                            setTimeout(() => {
                                this.$router.push({name: 'Usuario'});
                            }, 2000);
                            break;
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>