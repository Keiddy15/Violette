<template>
    <v-app class="principal">
        <v-card class="cardForm2" shaped elevation="20">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-img
                            src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoAgradecimientos.png?alt=media&token=49b8a018-fd72-4a8e-88d4-9d17e6f9b73b"
                            class="logo2"
                            contain
                    >
                    </v-img>
                    <v-card-text>
                        <div class="text-center"><span class="headline font-weight-bold">¡Pedido terminado!</span></div>
                        <div class="text-center">En las próximas 24 horas estarás recibiendo tu numero de guía.</div>
                        <div class="text-center">ESPERAMOS NOS COMPARTAS UNA FOTO PARA QUE HAGAS PARTE DE NUESTRO <span class="font-weight-bold">#TEAMVIOLETTE.</span></div>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="purple white--text"  block large @click="submit">
                            Inicio
                        </v-btn>
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
                this.$router.push({name: 'Usuario'});
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>