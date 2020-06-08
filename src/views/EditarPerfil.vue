<template>
    <div id="slot">
        <div class="container">
            <v-btn color="primary" style="width: 30vw;" @click="dialog = !dialog">Editar</v-btn>
            <UploadPhoto/>
        </div>
        <v-dialog v-model="dialog" fullscreen hide-overlay
                  transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn style="margin-left: 20px" icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Editar Usuario</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="guardarDataExtra">Guardar</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader>
                    <v-card-text>
                        <v-container>
                            <v-alert type="success"
                                     v-model="alertGuardar"
                                     dismissible>
                                ¡Tus datos han sido actualizados correctamente!.
                            </v-alert>
                            <v-row style="margin: 0 10px">
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Nombres:" readonly
                                                  v-model="user.nombre"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Apellidos:" readonly
                                                  v-model="user.apellido"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Cédula" readonly type="number"
                                                  v-model="user.cedula"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Teléfono:"
                                                  type="number"
                                                  v-model="user.telefono"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Email:" readonly
                                                  v-model="user.email"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Ciudad:" v-model="ciudad"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Departamento:" v-model="departamento"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field
                                            label="Dirección"
                                            v-model="direccion"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field label="Barrio:" v-model="barrio"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-list>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import UploadPhoto from './UploadPhoto'
    import firebase from "../firebase/libFirebase";

    let db = firebase.firestore();
    export default {
        name: "EditarPerfil",
        components: {
            UploadPhoto
        },
        data() {
            return {
                dialog: false,
                user: null,
                barrio: '',
                ciudad: '',
                direccion: '',
                departamento: '',
                alertGuardar: false
            }
        },
        mounted() {
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
        methods: {
            guardarDataExtra() {
                db.collection('usuarios').doc(this.user.uid).update({
                    barrio: this.barrio,
                    ciudad: this.ciudad,
                    direccion: this.direccion,
                    departamento: this.departamento
                }).then((doc) => {
                    this.guardarDatosExtras();
                });
                this.alertGuardar = true;
            },
            guardarDatosExtras() {
                let objectJSON = '{ "barrio": "' + this.barrio + '" ,' +
                    '"ciudad":"' + this.ciudad + '" , ' +
                    '"direccion":"' + this.direccion + '", ' +
                    '"departamento": "' + this.departamento + '"}';
                const parse = JSON.stringify(objectJSON);
                localStorage.setItem('userExtraData', parse);
            }
        }
    }
</script>

<style scoped>

</style>