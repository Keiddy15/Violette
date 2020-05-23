<template>
    <v-app class="principal">
        <v-card class="cardForm2" elevation="20">
            <v-card-title>USUARIO</v-card-title>
            <v-card-text>
                <form class="px-3" action="#" @submit.prevent="register">
                    <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoAgradecimientos.png?alt=media&token=49b8a018-fd72-4a8e-88d4-9d17e6f9b73b" width="70" height="70" aspect-ratio="6"
                           contain></v-img>
                    <v-text-field
                            label="Nombre:"
                            v-model="nombre"
                            :rules="nombreRules"
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
                        <v-btn type="submit"  color="purple white--text"  block large>
                            Registrarme
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
    import firebase from "firebase"
    export default {
        name: "Login",
        data(){
            return{
                nombre: "",
                email: "",
                password:"",
                show1: false,
                contraseñaRules: [
                    v => !!v || 'La contraseña es requerida.'
                ],
                emailRules: [
                    v => !!v || 'El email es requerido.'
                ],
                nombreRules: [
                    v => !!v || 'El nombre es requerido.'
                ],
            }
        },
        methods:{
            register(){
                this.error = ""
                if(this.nombre && this.email && this.password){
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                        .then((registro) => {
                            console.log(registro)
                            this.$router.push({name: 'Registrado'});
                        })
                        .catch(function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message
                        console.log(errorCode);
                        console.log(errorMessage);
                    })

                }
            },
        }
    }
</script>

