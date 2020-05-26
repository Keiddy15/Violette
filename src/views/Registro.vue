<template>
    <v-app class="principal">
        <Toolbar/>
        <v-card class="cardForm2" elevation="20">
            <v-card-title>Registrate</v-card-title>
            <v-card-text>
                <form class="px-3" action="#" @submit.prevent="register">
                    <v-text-field
                            label="Nombre:"
                            v-model="nombre"
                            :rules="nombreRules"
                            required>
                    </v-text-field>
                    <v-text-field
                            label="Apellido:"
                            v-model="apellido"
                            :rules="apellidoRules"
                            required>
                    </v-text-field>
                    <v-text-field
                            type="number"
                            label="Cedula:"
                            v-model="cedula"
                            :rules="cedulaRules"
                            required>
                    </v-text-field>
                    <v-text-field
                            type="number"
                            label="Telefono:"
                            :rules="telefonoRules"
                            v-model="telefono"
                            required>
                    </v-text-field>
                    <v-text-field
                            label="Email:"
                            v-model="email"
                            :rules="emailRules"
                            required>
                    </v-text-field>
                    <v-text-field
                            label="Contraseña:"
                            v-model="password"
                            :rules="contraseñaRules"
                            required
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            id="Contraseña"
                            @click:append="show1 = !show1"
                    >
                    </v-text-field>
                    <v-card-actions class="justify-center">
                        <v-btn type="submit" color="purple white--text" block large>
                            Registrarme
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
    import firebase from "../firebase/libFirebase"
    import Toolbar from "./Toolbar";

    let db = firebase.firestore();

    export default {
        name: "Login",
        components: {Toolbar},
        data() {
            return {
                nombre: "",
                email: "",
                password: "",
                apellido: "",
                cedula: "",
                telefono: '',
                show1: false,
                contraseñaRules: [
                    v => !!v || 'La contraseña es requerida.'
                ],
                cedulaRules: [
                    v => !!v || 'La Cedula es requerida.'
                ],
                telefonoRules: [
                    v => !!v || 'El telefono es requerido.'
                ],
                emailRules: [
                    v => !!v || 'El email es requerido.'
                ],
                nombreRules: [
                    v => !!v || 'El nombre es requerido.'
                ],
                apellidoRules: [
                    v => !!v || 'El apellido es requerido.'
                ]
            }
        },
        methods: {
            register() {
                if (this.nombre && this.email && this.password) {
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then((user) => {
                            db.collection('usuarios').doc(user.user.uid).set({
                                nombre: this.nombre,
                                apellido: this.apellido,
                                cedula: this.cedula,
                                telefono: this.telefono,
                                email: this.email
                            }).then(() => {
                                user.user.sendEmailVerification(null);
                                this.$router.push({name: 'Registrado'});
                            }).catch(error => {
                                console.log(error);
                            });
                        })
                        .catch(function (error) {
                            let errorCode = error.code;
                            let errorMessage = error.message;
                            console.log(errorCode);
                            console.log(errorMessage);
                        })
                }
            },
        }
    }
</script>

