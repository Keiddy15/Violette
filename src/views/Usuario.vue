<template>
    <v-app class="principal">
        <v-card class="cardForm2" elevation="20">
            <v-card-title>USUARIO</v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoAgradecimientos.png?alt=media&token=49b8a018-fd72-4a8e-88d4-9d17e6f9b73b" width="70" height="70" aspect-ratio="6"
                           contain></v-img>
                    <v-text-field
                    label="Email:"
                    v-model="nombre, email">
                    </v-text-field>
                    <v-text-field
                    label="Contraseña:"
                    v-model="password, pass"
                    :rules="contraseñaRules"
                    required
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    id="Contraseña"
                    @click:append="show1 = !show1"
                    >
                    </v-text-field>
                    <v-card-actions class="justify-center">
                    <v-btn color="purple white--text"  block large @click="ingreso" id="Login">
                        Ingresar
                    </v-btn>
                </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-app>

</template>

<script>
    import firebase from 'firebase';


    export default {
        name: "Usuario",
        data(){
            return{
                nombre: "",
                password:"",
                show1: false,
                contraseñaRules: [
                    v => !!v || 'La contraseña es requerida.'
                ],
                email:"",
                pass:""
            }
        },
        methods:{
            ingreso: function (e) {
                const txtEmail = email.value;
                const txtPass = pass.value;
                const auth = firebase.auth();

                const promise = auth.signInWithEmailAndPassword(email, pss);
                promise.catch(e => console.log(e.message));
            }
        }
    }
</script>
