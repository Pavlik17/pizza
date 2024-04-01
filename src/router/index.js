import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";
import AdminPanelView from "@/views/AdminPanelView/AdminPanelView.vue";
import CartView from "@/views/CartView/CartView.vue";

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
            component:AdminPanelView
        },
        {
            path:'/cart',
            name:'cart',
            component:CartView
        }
    ],
});

export default router;
