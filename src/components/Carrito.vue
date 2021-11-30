<template>
    <v-card>
        <v-row class="ma-0">
            <v-col cols="12" sm="12" md="4" lg="4" xl="3" v-for="item in carrito" :key="item">
                <v-card class="pb-5 pt-0">
                    <img :src="item.img" width="100%" height="100%">
                    <v-card-text class="py-0">
                        <strong class="black--text">{{item.titulo}}</strong> <br>
                        <strong>Precio: </strong> {{item.valor}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: 'Carrito',
    data: () => ({
        carrito: [
            {
                titulo: 'Conjunto Falda + Top',
                valor: '25.0000',
                img: require('@/assets/faldaTop.jpeg')
            },
            {
                titulo: 'Conjunto Short + Top',
                valor: '25.0000',
                img: require('@/assets/shortTop.jpeg')
            },
            {
                titulo: 'Conjunto Licra + Top',
                valor: '35.0000',
                img: require('@/assets/licraTop.jpeg')
            },
            {
                titulo: 'Conjunto Bicicletero + Top',
                valor: '35.0000',
                img: require('@/assets/bicicleteroTop.jpeg')
            },
            {
                titulo: 'Top',
                valor: '10.0000',
                img: require('@/assets/top.jpeg')
            },
            {
                titulo: 'Falda',
                valor: '20.0000',
                img: require('@/assets/falda.jpeg')
            },
            {
                titulo: 'Short',
                valor: '20.0000',
                img: require('@/assets/short.jpeg')
            },
            {
                titulo: 'Licra',
                valor: '30.0000',
                img: require('@/assets/licra.jpeg')
            },
            
        
        ]
    })
}
</script>

<style>

</style>