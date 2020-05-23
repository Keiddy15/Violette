<template>
    <v-app class="principal">
        <Toolbar/>
        <v-card class="cardForm2" elevation="10" shaped>
            <v-card-text>
                <h1 class="text-center black--text">USTED HA SIDO REGISTRADO</h1>
            </v-card-text>
            <v-card-text>
                <h2 class="text-center black--text">Haga click en ingresar</h2>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn text color="purple" @click="ingresar">
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
