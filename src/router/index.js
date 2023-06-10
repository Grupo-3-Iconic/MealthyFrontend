import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/mealthy/join-up' },
        { path: '/mealthy/join-up', name: 'join-up', component: () => import('../components/join-up.component.vue') },
        { path: '/mealthy/recipes', name: 'recipes', component: () => import('../components/recipes.component.vue') },
        { path: '/mealthy/products', name: 'products', component: () => import('../components/product-list.component.vue') },
        {path: '/mealthy/search-ingredient', name: 'search-ingredient', component: () => import('../components/search-ingredient.component.vue') },
        { path: '/mealthy/login-beginner', name: 'login-beginner', component: () => import('../components/login-beginner.component.vue') },
        { path: '/mealthy/login-store', name: 'login-store', component: () => import('../components/login-store.component.vue') },
        {path:'/mealthy/market-products/:id',name:'market-products',component:()=>import('../components/market.component.vue')},

        {path:'/mealthy/login',name:'login',component:()=>import('../components/login.component.vue')},
        {path:'/mealthy/home',name:'home',component:()=>import('../components/home.component.vue')},
        //{ path: '/mealthy/recipes/:id', name: 'recipe-details', component: () => import('../components/recipe-details.component.vue') },
        //{ path: '/mealthy/pantry', name: 'pantry', component: () => import('../components/pantry.component.vue') },
        //{ path: '/mealthy/market', name: 'market', component: () => import('../components/market.component.vue') },
        //{ path: '/mealthy/settings', name: 'settings', component: () => import('../components/settings.component.vue') },
        //{ path: '/:catchAll(.*)', name: 'not-found', component: () => import('../components/not-found-page.component.vue') }

        { path: '/mealthy/recipes/:id', name: 'recipe-details', component: () => import('../components/recipe-details.component.vue') },
        { path: '/mealthy/pantry', name: 'pantry', component: () => import('../components/pantry.component.vue') },
        { path: '/mealthy/beginner-profile', name: 'beginner-profile', component: () => import('../components/beginner-profile.component.vue') },
        { path: '/mealthy/owner-profile', name: 'owner-profile', component: () => import('../components/owner-profile.component.vue') },
        { path: '/:catchAll(.*)', name: 'not-found', component: () => import('../components/not-found-page.component.vue') }

    ]
})

export default router