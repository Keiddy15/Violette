<template>
    <v-app class="principal">
        <Toolbar/>
        <v-card class="cardForm2" elevation="10" shaped>
            <v-card-text>
                <p class="black--text" style="font-size: 22px; font-weight: bold;">Usted se ha registrado satisfactoriamente.</p>
                <span class="text-center black--text">Haga click en ingresar, ¡Para acceder a su cuenta y realizar pedidos!</span>
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
