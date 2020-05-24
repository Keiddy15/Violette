<template>
    <v-app class="principal">
        <Toolbar/>
        <v-container>
            <v-card height="auto" class="cardPrincipal">
                <v-container>
                    <v-carousel cycle continuous>
                        <v-carousel-item
                                v-for="(item,i) in items"
                                :key="i"
                                :src="item.src"
                                height="auto"
                                class="carruselImagen"
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
    import Toolbar from './Toolbar'

    export default {
        name: "Bienvenida",
        components: {
            Toolbar
        },
        data() {
            return {
                items: [
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FKeimmy1.png?alt=media&token=dfb02841-0221-40e6-9223-ac7f586dbd4a',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FKeimmy2.png?alt=media&token=fe565745-5514-4bd8-81c5-a80cd1f5167b',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FMasiel1.png?alt=media&token=1434f9c4-da81-4cfb-840b-f1c9abef61b0',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FMasiel2.png?alt=media&token=a9b9a133-e3af-4ca1-8f5a-7553eacf2cd3',
                    },
                ],

                rating: 4,
            }
        },
        methods: {
            facebook: function () {
                window.open("https://www.facebook.com/Violettesports-2058307800941507/?hc_ref=ARS-0nqij9qzQSd-FtTQnql2GVgPtQfu9UmJngwai7PpFqv5fJOWOkMDE6rUyNlFRWE&fref=nf&__tn__=kC-R"
                )
            },
            instagram: function () {
                window.open("https://www.instagram.com/violette24_/?hl=es-la", "_blank")
            },
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>