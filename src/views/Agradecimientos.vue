<template>
    <v-app class="principal">
        <v-card class="cardForm2" shaped elevation="20">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-img
                            src="../assets/LogoAgradecimientos.png"
                            class="logo2"
                            contain
                    >

                    </v-img>
                    <v-card-text>
                        <div class="text-center">Pedido terminado.</div>
                        <div class="text-center">En las próximas 24 horas estarás recibiendo tu numero de guía.</div>
                        <div class="text-center">ESPERAMOS NOS COMPARTAS UNA FOTO PARA QUE HAGAS PARTE DE NUESTRO #TEAMVIOLETTE.</div>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn rounded color="purple white--text"  class="pa-5" @click="submit">
                            Regresar al formulario
                        </v-btn>
                        <router-link to="/">
                        </router-link>
                    </v-card-actions>
                </v-list-item-content>

            </v-list-item>
        </v-card>
    </v-app>

</template>

<script>
    export default {
        name: "Agradecimientos",
        data() {
            return {}
        },
        methods: {
            submit: function () {
                this.$router.push({name: 'app'})
            }

        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>