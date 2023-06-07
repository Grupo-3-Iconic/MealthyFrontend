<template>
    <ToolbarComponent/>
  <div v-if="recipe" class="col">
    <pv-card>
      <template #title>
        <pv-toolbar style="max-height: 65px; display: flex; align-items: center;">
          <template #start>
            <h1>{{ recipe.title }}</h1>
          </template>
          <template #end>
            <router-link to="/mealthy/recipes">
              <pv-button color="primary">Go Back</pv-button>
            </router-link>
          </template>
        </pv-toolbar>
        <pv-divider/>
      </template>
      <template #content>
        <div class="card flex">
          <div>
            <p>{{ recipe.description }}</p>
            <img :src="recipe.photoUrl" alt="Recipe Photo" class="recipe-image"  style="margin-top: 15px; width: 40vw;">
          </div>
          <pv-divider layout="vertical"/>
          <div>
            <h3>Ingredientes</h3>
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                {{ ingredient.quantity }} {{ ingredient.name }} 
              </li>
            </ul>
            <h3>Preparación</h3>
            <ul>
              <li v-for="step in recipe.preparation" :key="step">
                {{ step }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>
  
<script>
import { RecipeApiService } from '@/services/recipe-api.service';
import ToolbarComponent from "@/components/toolbar.component.vue";
  
export default {
  name: 'RecipeDetailsComponent',
    components: {ToolbarComponent},
  data() {
    return {
      recipe: null,
      recipeService: new RecipeApiService()
    };
  },
  created() {
    this.getRecipe();
  },
  methods: {
    getRecipe() {
      const recipeId = this.$route.params.id;
      this.recipeService.getById(recipeId)
        .then(response => {
          this.recipe = response.data;
        })
        .catch(error => {
          console.error('Error fetching recipe:', error);
        });
    },
  },
}
</script>
  
<style scoped>

</style>  