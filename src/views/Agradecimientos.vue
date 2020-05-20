<template>
    <v-app>
        <v-card class="mx-auto">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title>Muchas gracias por comprar con nosotros</v-list-item-title>
                    <v-img
                            src="../assets/LogoAgradecimientos.png"
                            height="350"
                            width="30">

                    </v-img>
                    <v-card-actions class="justify-center">
                        <v-btn rounded color="purple white--text" @click="submit">
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