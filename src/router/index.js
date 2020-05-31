import Vue from 'vue'
import Formulario from '../views/Formulario'
import Agradecimientos from '../views/Agradecimientos'
import Bienvenida from "../views/Bienvenida";
import Usuario from "../views/Usuario";
import Login from "../views/Login"
import VueRouter from 'vue-router'
import Registro from "../views/Registro";
import Registrado from "../views/Registrado";
import Admin from "../views/Admin";

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
        path: '/registro',
        name: 'Registro',
        components: {main: Registro},
    },
    {
        path: '/registrado',
        name: 'Registrado',
        components: {main: Registrado},
    },
    {
        path: '/usuario',
        name: 'Usuario',
        components: {main: Usuario},
    },
    {
        path: '/admin',
        name: 'Admin',
        components: {main: Admin},
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
