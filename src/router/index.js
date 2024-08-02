import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";
import AdminPanelView from "@/views/AdminPanelView/AdminPanelView.vue";
import CartView from "@/views/CartView/CartView.vue";
import AboutAs from "@/components/AboutAs/AboutAs.vue";
import AdminLayout from "@/layouts/AdminLayout/AdminLayout.vue";
import AuthWindow from "@/components/AuthWindow/AuthWindow.vue";
import ProductDataStore from "@/store/store.js";
import axios from "axios";
import { nextTick } from "vue";



const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/admin_panel',
            name:'admin_panel',
            component:AdminPanelView,
        },
        {
            path:'/cart',
            name:'cart',
            component:CartView
        },
        {
            path:'/about',
            name:'about',
            component:AboutAs,
        },
        {
            path:'/admin',
            name:'admin',
            component: AdminLayout,
        }
    ],
});

export default router;
