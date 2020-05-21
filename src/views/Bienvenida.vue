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
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    @import "/src/assets/estilos.css";
</style>