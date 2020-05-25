<template>
    <v-app class="principal">
        <v-card class="cardForm2" elevation="20">
            <v-tabs
                    fixed-tabs
                    background-color="primary"
                    dark
            >
                <v-tab>
                    Inicio
                </v-tab>
                <v-tab>
                    Rellenar Formulario
                </v-tab>
                <v-tab>
                    Cuenta
                </v-tab>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1> Bienvenido, {{nombre}} {{apellido}}</h1>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="textoUsuario">
                            <strong> VIOLETTE SPORT SWEAR 💜🏋🏻‍♀ </strong>
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            Somos una marca inspirada en ropa deportiva de excelente calidad.
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            Nuestro objetivo es que te sientas cómoda y segura a la hora de entrenar.
                        </v-card-text>
                        <v-card-text class="textoUsuario">Queremos que seas parte de nuestro #TeamVIOLETTE💜</v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <h1>Por favor, diligencie el siguiente formmulario, para completar su compra.</h1>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn class="purple  white--text" block @click="enviarFormulario">Enviar formulario </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-tab-item>
                <v-tab-item>
                    <v-card elevation="15" color="#FFF" raised class="cardForm">
                        <v-card-text class="textoUsuario">
                            <strong> Nombre: </strong> {{nombre}} {{apellido}}
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            <strong> Email: </strong> {{user.email}}
                        </v-card-text>
                        <v-card-text class="textoUsuario">
                            <strong> Cédula: </strong> {{user.cedula}}
                        </v-card-text>
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
        components:{
            ToolbarUser
        },
        data() {
            return {
                user: null,
                nombre: '',
                apellido: '',
                cedula: '',
            }
        },
        created() {
            this.user = firebase.auth().currentUser;
            this.nombre = this.user.displayName.split('.')[0];
            this.apellido = this.user.displayName.split('.')[1];
            this.cedula = this.user.displayName.split('.')[2];
        },
        methods: {
            enviarFormulario(){
                this.$router.push({name: 'app'})
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>