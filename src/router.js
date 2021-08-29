import Vue from 'vue'
import Router from 'vue-router'


const Inicio = () =>
    import ( /* webpackChunkName: "Home o inicio" */ './components/Inicio')
const SobreMi = () =>
    import ( /* webpackChunkName: "SobreMi" */ './components/SobreMi')
const Contacto = () =>
    import ( /* webpackChunkName: "Contacto" */ './components/Contacto')
const Post = () =>
    import ( /* webpackChunkName: "Post" */ './components/Post')

    
import Articulo from './components/Articulo'
import Administrador from './components/Administrador'
// import Transition from './components/Transition'

import NotFound from './components/NotFound'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/inicio',
            redirect: '/',
          },
          {
            path: '/home',
            redirect: '/',
          },
          {
            path: '/portada',
            redirect: '/',
          },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi,
            alias: ['/contactactame']
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto,
            alias: ['/acerca']
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        {
            path: '/administrador/:tipo',
            component: Administrador,
            props: true
         
        },
       
        {
            path: '*',
            component: NotFound
        }
    ]
})