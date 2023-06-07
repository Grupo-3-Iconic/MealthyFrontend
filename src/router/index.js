import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //{ path: '/', redirect: '/mealthy/recipes' },
        //{ path: '/mealthy/recipes', name: 'recipes', component: () => import('../components/recipes.component.vue') },
        { path: '/', redirect: '/mealthy/products' },
        { path: '/mealthy/products', name: 'products', component: () => import('../components/product-list.component.vue') },
        //{ path: '/mealthy/settings', name: 'settings', component: () => import('../components/settings.component.vue') }
        { path: '/mealthy/join-up', name: 'join-up', component: () => import('../components/join-up.component.vue') },
        { path: '/mealthy/login-beginner', name: 'login-beginner', component: () => import('../components/login-beginner.component.vue') },
        { path: '/mealthy/login-store', name: 'login-store', component: () => import('../components/login-store.component.vue') },
        //{ path: '/mealthy/recipes/:id', name: 'recipe-details', component: () => import('../components/recipe-details.component.vue') },
        //{ path: '/mealthy/pantry', name: 'pantry', component: () => import('../components/pantry.component.vue') },
        //{ path: '/mealthy/market', name: 'market', component: () => import('../components/market.component.vue') },
        //{ path: '/mealthy/settings', name: 'settings', component: () => import('../components/settings.component.vue') },
        //{ path: '/:catchAll(.*)', name: 'not-found', component: () => import('../components/not-found-page.component.vue') }
    ]
})

export default router