import Vue from 'vue'
import Formulario from '../views/App'
import Agradecimientos from '../views/Agradecimientos'
import Bienvenida from "../views/Bienvenida";
import Usuario from "../views/Usuario";
import Loggin from "../views/Loggin";
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const routes = [
    {
      path: '/',
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
        path: '/usuario',
        name: 'Usuario',
        components: {main: Usuario}
    },
    {
        path: '/login',
        name: 'Loggin',
        components: {main: Loggin}
    },


];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
