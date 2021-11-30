<template>
    <v-row justify="center">
        <v-btn
                text
                color="primary"
                dark
                @click.stop="dialog = true"
        >
            ¿Haz olvidado tu contraseña?
        </v-btn>

        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <v-card class="cardForm2" elevation="20">
                <v-alert type="success" v-model="alertNoData"  dismissible>
                    Por favor revise su email, para restablecer su correo.
                </v-alert>
                <v-text-field
                        label="Email:"
                        v-model="email"
                        :rules="emailRules"
                        required>
                </v-text-field>

                <v-card-actions class="justify-center">
                    <v-btn
                            color="primary"
                            text

                            @click="Password"
                    >
                        Enviar email
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import firebase from "../firebase/libFirebase"
    let db = firebase.firestore();
    export default {
        name: "ResetPassword",
        data() {
            return {
                dialog: false,
                email: '',
                emailRules: [
                    v => !!v || 'El email es requerido.'
                ],
                alertNoData: false,
            }
        },
        methods:{
            Password(){
                if(this.email){
                    const auth = firebase.auth();
                    auth.sendPasswordResetEmail(this.email).then(() => {
                    }).catch((error )=> {
                        console.log(error)
                    })
                    this.alertNoData = true;
                }
            }
        }
    }
</script>

<style scoped>
</style>