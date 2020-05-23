<template>
    <v-app class="principal">
        <v-container>
            <v-card height="auto" class="ma-2 pa-8">
                <v-toolbar class="toolbar">
                    <v-toolbar-title class="ma-6" >
                        <v-img src="https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/LogoBienvenida.png?alt=media&token=24f4386d-1211-4d9c-a4c3-9c6ebd97f14e" width="70" height="70" aspect-ratio="6"
                               contain></v-img>
                    </v-toolbar-title>
                    <v-toolbar-title class="tituloBienvenida">¡Bienvenidos a Violette!</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <div class="conjuntoBotones">
                        <v-btn text x-large class="white--text" @click="inicio">
                            Inicio
                        </v-btn>|
                        <v-btn text x-large class="white--text" @click="submit">
                            Realizar Pedido
                        </v-btn>|
                        <v-btn text x-large class="white--text" @click="usuario">
                            Ingresar
                        </v-btn>|
                        <v-btn text x-large class="white--text">
                            Acerca de
                        </v-btn>
                    </div>
                </v-toolbar>
                <v-container>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                                height = "auto"
                                contain
                        ></v-carousel-item>
                    </v-carousel>
                </v-container>
                <v-container>
                    <v-textarea
                            label="Comentarios:"
                            auto-grow
                            outlined
                            rows="3"
                            row-height="25"
                            shaped
                    ></v-textarea>
                </v-container>
                <v-footer class="footer">
                    <v-card-text class="text-center">
                        <v-btn
                                class="mx-4"
                                icon>
                            <v-icon size="24px" @click="facebook"> mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn
                                class="mx-4"
                                icon>
                            <v-icon size="24px" dark @click="instagram"> mdi-instagram</v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-card-text class="white--text pt-0">

                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="text-center">
                        <v-rating
                                v-model="rating"
                                background-color=""
                                color="white"
                                size="30"
                        ></v-rating>
                    </v-card-text>
                    <v-card-text class="text-center tituloFooter">
                        <strong>VioletteSportWear</strong>
                    </v-card-text>
                </v-footer>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "Bienvenida",
        data () {
            return{
                items: [
                    {
                        src: '',
                    },
                    {
                        src: '',
                    },
                    {
                        src: '',
                    },
                    {
                        src: '',
                    },
                ],

                rating: 4,
            }
        },

        methods: {
            submit: function () {
                this.$router.push({name: 'app'});
            },
            inicio: function () {
                this.$router.push({name: 'Bienvenida'});
            },
            facebook: function () {
                window.open("https://www.facebook.com/Violettesports-2058307800941507/?hc_ref=ARS-0nqij9qzQSd-FtTQnql2GVgPtQfu9UmJngwai7PpFqv5fJOWOkMDE6rUyNlFRWE&fref=nf&__tn__=kC-R"
)
            },
            instagram: function () {
                window.open("https://www.instagram.com/violette24_/?hl=es-la", "_blank")
            },
            usuario: function () {
                this.$router.push({name: 'Usuario'});
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>