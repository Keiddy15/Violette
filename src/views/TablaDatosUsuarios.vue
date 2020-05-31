<template>
    <div id="app">
        <v-btn color="primary" :disabled="loadingData" @click="loadDataTable">Recargar datos</v-btn>
        <v-data-table :no-data-text="noData" mobile-breakpoint="320" :loading-text="loadingText" :loading="loadingData"
                      :items="data" :headers="headers">
            <template v-slot:item.enviado="{ item }">
                <v-simple-checkbox v-model="item.enviado" disabled></v-simple-checkbox>
            </template>
            <template v-slot:item.entregado="{ item }">
                <v-simple-checkbox v-model="item.entregado"></v-simple-checkbox>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import firebase from '../firebase/libFirebase'

    let db = firebase.firestore();
    export default {
        name: "TablaDatosUsuarios",
        data() {
            return {
                user: [],
                loadingText: 'Obteniendo datos, por favor espere...',
                loadingData: true,
                noData: 'No has realizado ningún pedido, ¿Que esperas para ser parte del team #Violette?',
                headers: [{text: 'Fecha de Pedido', value: 'fechaCompra'}, {
                    text: 'Fecha de Entrega: ',
                    value: 'fechaEntrega'
                }, {text: 'Enviado', value: 'enviado'}, {
                    text: '¿Entregado?',
                    value: 'entregado'
                }],
                data: []
            }
        },
        created() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
            if (localStorage.getItem('userExtraData')) {
                let objectJSON = JSON.parse(JSON.parse(localStorage.getItem('userExtraData')));
                this.barrio = objectJSON.barrio;
                this.ciudad = objectJSON.ciudad;
                this.direccion = objectJSON.direccion;
                this.departamento = objectJSON.departamento;
            } else {
                db.collection('usuarios').doc(this.user.uid).get().then((doc) => {
                    this.barrio = doc.data().barrio;
                    this.ciudad = doc.data().ciudad;
                    this.direccion = doc.data().direccion;
                    this.departamento = doc.data().departamento;
                })
            }
        },
        mounted() {
            this.loadDataTable();
        },
        methods: {
            formatDate: function (date) {
                let dayName = date.toLocaleString('es-MX', {weekday: 'long'});
                let day = date.getDate();
                let month = date.toLocaleString('es-MX', {month: 'long'});
                let year = date.getFullYear();
                return `${dayName[0].toUpperCase() + dayName.slice(1)}, ${day} de ${month} de ${year}`;
            },
            loadDataTable() {
                this.loadingData = !this.loadingData;
                this.data = [];
                db.collection("pedidos").where("idUser", "==", this.user.uid).get().then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        this.loadingData = false
                    } else {
                        querySnapshot.forEach((doc) => {
                            if (this.user.uid === doc.data().idUser) {
                                let data = doc.data();
                                if (data.fechaEntrega != null) {
                                    data.fechaEntrega = this.formatDate(new Date(data.fechaEntrega.seconds * 1000));
                                }
                                data.fechaCompra = this.formatDate(new Date(data.fechaCompra.seconds * 1000));
                                this.data.push(data);
                                this.loadingData = false;
                            }
                        });
                    }

                })
            }
        }
    }
</script>
