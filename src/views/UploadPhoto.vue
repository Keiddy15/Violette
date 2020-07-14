<template>
    <div id="app">
        <v-btn color="primary" @click="onUpload = !onUpload" style="width: 30vw;">Cambiar foto de perfil</v-btn>
        <v-dialog width="500" v-model="onUpload">
            <v-card>
                <v-card-title>
                    Subir foto de perfil
                </v-card-title>
                <v-card-text>
                    <v-alert dismissible type="success" v-model="showAlert">¡Tu foto de perfil, ha sido actualizda!</v-alert>
                    <v-file-input
                            v-model="files"
                            :loading="loading"
                            :rules="rules"
                            chips
                            accept="image/png, image/jpeg, image/bmp, image/jpg"
                            placeholder="Selecciona una nueva foto de perfil"
                            prepend-icon="mdi-camera"
                            label="Avatar"
                    ></v-file-input>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="onUpload = false">Cerrar</v-btn>
                    <v-btn color="primary" text @click="cambiarFoto">Cambiar foto</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import firebase from '../firebase/libFirebase'
    let storage = firebase.storage("gs://violette-8b112.appspot.com");
    export default {
        name: "UploadPhoto",
        data() {
            return {
                onUpload: false,
                user: [],
                showAlert: false,
                files: [],
                loading: false,
                rules: [value => !value || value.size < 5000000 || 'El tamaño de tu foto debe ser menos de 5MB!']
            }
        },
        mounted() {
            if (localStorage.getItem('user')) {
                this.user = JSON.parse(JSON.parse(localStorage.getItem('user')));
            }
        },
        methods: {
            cambiarFoto() {
                this.loading = true;
                this.showAlert = false;
                let folder = storage.ref(`profilePhotos/${this.user.uid}`);
                folder.put(this.files).then(snapShot => {
                    this.loading = false;
                    this.showAlert = true;
                    this.$router.go();
                })
            }
        }
    }
</script>

<style scoped>
</style>