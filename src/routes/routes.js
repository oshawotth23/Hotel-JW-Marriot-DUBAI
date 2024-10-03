import Inicio from "../components/Inicio.vue"
import Servicios from "../components/Servicios.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Actividades from "../components/Actividades.vue"
import Contacto from "../components/Contacto.vue"
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"


const routes = [
    {path:"/", component:Inicio},
    {path:"/servicios", component:Servicios},
    {path:"/habitaciones", component:Habitaciones},
    {path:"/actividades", component:Actividades},
    {path:"/contacto", component:Contacto},
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})