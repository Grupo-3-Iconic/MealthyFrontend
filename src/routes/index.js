import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/mealthy/recipes' },
    { path: '/mealthy/recipes', name: 'recipes', component: () => import('../components/recipes.component.vue') },
    { path: '/mealthy/recipes/:id', name: 'recipe-details', component: () => import('../components/recipe-details.component.vue') },
    { path: '/mealthy/pantry', name: 'pantry', component: () => import('../components/pantry.component.vue') },
    { path: '/mealthy/market', name: 'market', component: () => import('../components/market.component.vue') },
    { path: '/mealthy/settings', name: 'settings', component: () => import('../components/settings.component.vue') },
    { path: '/:catchAll(.*)', name: 'not-found', component: () => import('../components/not-found-page.component.vue') }
  ]
})

export default router
