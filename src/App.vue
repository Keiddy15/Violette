<template>
  <div id="app">
    <v-app>
    <v-container>
      <v-layout class="mt-5" justify-center align-center style="height:120px"> 
        <v-flex style="height:300px">
          <v-img src="./assets/Logo.jpg" aspect-ratio="4" contain> </v-img>
        </v-flex>
        
      </v-layout>
      <form>
        <v-alert type="error" v-if="ErrorValidacion" dismissible="true">Por favor, verifique los campos.</v-alert>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field 
              label='Nombre:' 
              v-model='Nombre'
              required
            >
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Cédula:" 
              v-model='Cedula'
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Ciudad:" 
              v-model='Ciudad'
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Departamento:" 
              v-model='Departamento'
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="12"> 
            <v-text-field
              label="Barrio:" 
              v-model='Barrio'
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Dirección:"
              v-model='Direccion' 
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Celular:" 
              v-model='Numero'
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <br>
        <div class="text-center">
          <v-alert
            border="bottom"
            color="purple lighten-1"
            dark
          >
            Recuerde rellenar todo el formulario
          </v-alert>
          <v-btn rounded  class="purple  white--text" @click="submit">Enviar</v-btn>
        </div>
      </form>
    </v-container>
    </v-app>
  </div> 
</template>

<script>
import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyC08QhR3Y3hfv3PG8P_jfR4-yjzs77b0Oo",
    authDomain: "violette-8b112.firebaseapp.com",
    databaseURL: "https://violette-8b112.firebaseio.com",
    projectId: "violette-8b112",
    storageBucket: "violette-8b112.appspot.com",
    messagingSenderId: "649191539042",
    appId: "1:649191539042:web:0ce1aa85bf53768ef2ac3b",
    measurementId: "G-LHCE89KCQQ"
  };
  // Initialize Firebase
 
  let app = firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore(app);
export default {
  name: "app",
  data(){
    return{
      Nombre:"",
      Cedula:"",
      Ciudad:"",
      Departamento:"",
      Barrio:"",
      Direccion:"",
      Numero:"",
      ErrorValidacion: false
    }
    
  },
  created: function(){
    
  },
  computed:{
    
  }, 
  methods:{
    buscarUsuario: function(){
      let usuarios = db.collection('usuarios').doc(this.Cedula);
    usuarios.get().then((doc)=>{
      this.Nombre = doc.data().Nombres;
    }).catch((error)=>{
      console.log(error);
    });
    },
    submit: function(){
      let usuarios = db.collection('usuarios');
      let validar = (this.Nombre.length > 0 || this.Cedula.length > 0 ||
             this.Ciudad.length > 0 || this.Barrio.length > 0 ||
             this.Departamento.length > 0 ||
             this.Direccion.length > 0 || this.Numero.length > 0);
             console.log(validar);
      if(validar){
        usuarios.doc(this.Cedula).set({
          Nombres: this.Nombre,
          Ciudad: this.Ciudad,
          Barrio: this.Barrio,
          Departamento: this.Departamento,
          Direccion: this.Direccion,
          Numero: this.Numero
        });
        this.ErrorValidacion = false;
      }else{
          this.ErrorValidacion = true;
      }
    }
  }
}
</script>

<style type="text/css" scoped>
  @import "assets/estilos.css"  
</style>

