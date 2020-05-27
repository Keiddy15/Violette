<template>
    <v-app class="principal">
        <Toolbar/>
        <v-card class="cardForm2" elevation="10">
            <v-alert type="error" v-model="alertVerified" dismissible>No ha activado su cuenta, por favor, revise su
                correo electronico.
            </v-alert>
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
                        <v-btn type="submit" color="purple white--text" block :loading="loadingBtn" large>
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

    let db = firebase.firestore();
    export default {
        name: "Registro",
        components: {
            Toolbar
        },
        data() {
            return {
                email: "",
                alertVerified: false,
                password: "",
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
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then((user) => {
                            if (!user.user.emailVerified) {
                                this.alertVerified = true;
                                firebase.auth().signOut();
                            } else {
                                this.guardar(user);
                                this.loadingBtn = true;
                                setTimeout(() => {
                                    this.$router.push({name: 'Usuario'});
                                }, 3000);
                            }
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
                db.collection('usuarios').doc(user.user.uid).get().then(function (doc) {
                    let objectJSON = '{ "email": "' + user.user.email + '" ,' +
                        '"createdAt":"' + user.user.metadata.creationTime + '" , ' +
                        '"lastLogin":"' + user.user.metadata.lastSignInTime + '", ' +
                        '"emailVerified": "' + user.user.emailVerified + '", "uid": "' + user.user.uid + '", ' +
                        '"nombre": "' + doc.data().nombre + '",' +
                        '"apellido": "' + doc.data().apellido + '",' +
                        '"cedula": "' + doc.data().cedula + '",' +
                        '"telefono": "' + doc.data().telefono + '"}';
                    const parse = JSON.stringify(objectJSON);
                    localStorage.setItem('user', parse);
                });

            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>