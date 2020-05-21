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
                        <v-btn text x-large class="white--text">
                            Inicio
                        </v-btn>|
                        <v-btn text x-large class="white--text">
                            Realizar Pedido
                        </v-btn>|
                        <v-btn text x-large class="white--text">
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
                        ></v-carousel-item>
                    </v-carousel>
                </v-container>
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
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FKeimmy.jpeg?alt=media&token=9fced5a5-0424-4a4e-99c4-cb9903ecdf28',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FMasiel.jpeg?alt=media&token=fe441ac5-c887-487d-a3e6-942096b6f122',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FKmm2.jpeg?alt=media&token=570a6c2e-6ddf-4d2a-bf40-1f59f66c580d',
                    },
                    {
                        src: 'https://firebasestorage.googleapis.com/v0/b/violette-8b112.appspot.com/o/carrusel%2FMasiel2.jpeg?alt=media&token=94916dbc-e3f4-4e1f-849d-eb47e4565f24',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>