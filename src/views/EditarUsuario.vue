<template>
    <div id="slot">
        <v-dialog v-model="dialogUserSelected" max-width="800px"
                  transition="dialog-bottom-transition">
            <v-card>
                <v-card-title>
                    <span class="headline">Editar usuario</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row style="margin: 0 10px">
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Nombres:" readonly
                                              v-model="userSelected.nombre"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Apellidos:" readonly
                                              v-model="userSelected.apellido"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Cédula" readonly type="number"
                                              v-model="userSelected.cedula"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Teléfono:"
                                              type="number"
                                              v-model="userSelected.telefono"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Email:"
                                              v-model="userSelected.email"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Ciudad:" v-model="userSelected.ciudad"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Departamento:"
                                              v-model="userSelected.departamento"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                        label="Dirección"
                                        v-model="userSelected.direccion"

                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Barrio:" v-model="userSelected.barrio"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="dialogUserSelected = false" color="primary" block>
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import vuex from 'vuex'
    import {mapFields} from 'vuex-map-fields'
    import libFirebase from "../firebase/libFirebase";

    let db = libFirebase.firestore();
    export default {
        name: "EditarUsuario",
        computed: {
            ...mapFields(['userSelected', 'dialogUserSelected'])
        },
        methods: {
            ...vuex.mapMutations(['passingUserSelected'])
        }
    }
</script>

<style scoped>
</style>