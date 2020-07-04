<template>
    <div id="app">
        <v-btn color="primary" :disabled="loadingData" @click="loadDataTable">Recargar datos</v-btn>
        <v-data-table :no-data-text="noData" mobile-breakpoint="320" :loading-text="loadingText" :loading="loadingData"
                      :items="data" :headers="headers"
                      class="elevation-1">
            <template v-slot:item.verMas="{ item }">
                <v-btn icon text color="primary" @click="passingUserSelected({show: true, userSelected: item})">
                    <v-icon color="primary">
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </template>
        </v-data-table>
        <EditarUsuario/>
    </div>

</template>

<script>
    import EditarUsuario from "./EditarUsuario";
    import firebase from '../firebase/libFirebase'
    import vuex from 'vuex'

    let db = firebase.firestore();
    export default {
        name: "GestionUsuario",
        data() {
            return {
                expanded: [],
                singleExpand: false,
                user: [],
                loadingText: 'Obteniendo datos, por favor espere...',
                loadingData: true,
                headers: [
                    {
                        text: 'Email: ',
                        value: 'email'
                    },
                    {
                        text: 'Cédula: ',
                        value: 'cedula'
                    },
                    {
                        text: 'Nombre: ',
                        value: 'nombre',
                    },
                    {
                        text: 'Apellido: ',
                        value: 'apellido'
                    },
                    {
                        text: 'Ciudad:',
                        value: 'ciudad'
                    },
                    {
                        text: 'Departamento: ',
                        value: 'departamento'
                    },
                    {
                        text: 'Teléfono: ',
                        value: 'telefono'
                    },

                    {
                        text: '',
                        value: 'verMas'
                    }],
                noData: 'Aún no hay pedidos :(',
                data: []
            }
        },
        components:{
            EditarUsuario,
        },
        mounted() {
            this.loadDataTable();
        },
        methods: {
            ...vuex.mapMutations(['passingUserSelected']),
            loadDataTable() {
                this.loadingData = !this.loadingData;
                this.data = [];
                db.collection("usuarios").get().then(querySnapshot => {
                    querySnapshot.forEach((doc) => {
                        let data = doc.data();
                        this.data.push(data)
                    });
                })
            }
        }
    }
</script>
