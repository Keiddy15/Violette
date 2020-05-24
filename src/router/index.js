import Vue from 'vue'
import Formulario from '../views/App'
import Agradecimientos from '../views/Agradecimientos'
import Bienvenida from "../views/Bienvenida";
import Usuario from "../views/Usuario";
import Login from "../views/Login"
import VueRouter from 'vue-router'
import Registro from "../views/Registro";
import Registrado from "../views/Registrado";
import firebase from '../firebase/libFirebase';

Vue.use(VueRouter);

const routes = [
    {
      path: '*',
      redirect: '/bienvenida'
    },
    {
      path: '/',
        redirect: '/bienvenida'
    },
    {
      path: '/bienvenida',
      name: 'Bienvenida',
      components: {main: Bienvenida}
    },
    {
      path: '/formulario',
      name: 'app',
      components: {main: Formulario}
    },
    {
        path: '/thank-you',
        name: 'Agradecimientos',
        components: {main: Agradecimientos}
    },
    {
        path: '/login',
        name: 'Login',
        components: {main: Login},
        meta:{
            autentificado: true
        }
    },
    {
        path: '/Registro',
        name: 'Registro',
        components: {main: Registro},
    },
    {
        path: '/Registrado',
        name: 'Registrado',
        components: {main: Registrado},
    },
    {
        path: '/Usuario',
        name: 'Usuario',
        components: {main: Usuario},
    },


];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
