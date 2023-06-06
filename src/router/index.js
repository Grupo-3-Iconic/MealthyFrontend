import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/mealthy/products' },
        { path: '/mealthy/products', name: 'products', component: () => import('../components/product-list.component.vue') },
        //{ path: '/mealthy/settings', name: 'settings', component: () => import('../components/settings.component.vue') }
    ]
})

export default router