<template>
    <v-app class="principal">
        <Toolbar/>
        <v-card class="cardForm2" elevation="15" shaped>
            <v-card-text>
                <p class="black--text" style="font-size: 22px; font-weight: bold;">Usted se ha registrado satisfactoriamente.</p>
               <p></p>
                <p class="text-center black--text" style="font-size: 22px">
                    Para terminar de crear su cuenta,
                    ingrese al link de verificación que se le envío a su correo.</p>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn block color="purple" class="white--text" @click="ingresar">
                    Ingresar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
    import Toolbar from './Toolbar'
    export default {
        name: "Registrado",
        components: {
            Toolbar
        },
        methods:{
            ingresar(){
                this.$router.push({name: 'Login'});
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>
