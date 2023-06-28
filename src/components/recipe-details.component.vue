<template>
  <div>
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
                <li v-for="ingredient in ingredients" :key="ingredient.id">
                  {{ ingredient.quantity }} {{ ingredient.name }} 
                </li>
              </ul>
              <h3>Preparación</h3>
              <ul>
                <li v-for="step in steps" :key="step.id">
                  {{ step.description }}
                </li>
              </ul>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import { RecipeApiService } from '@/services/recipe-api.service';
import ToolbarComponent from "@/components/toolbar.component.vue";

export default {
  name: 'RecipeDetailsComponent',
  components: { ToolbarComponent },
  data() {
    return {
      recipe: null,
      ingredients: [],
      steps: [],
      recipeService: new RecipeApiService()
    };
  },
  created() {
    this.getRecipeDetails();
  },
  methods: {
    getRecipeDetails() {
      const recipeId = this.$route.params.id;
      this.recipeService.getById(recipeId)
        .then(response => {
          this.recipe = response.data;
          this.getIngredientsByRecipeId(recipeId);
          this.getStepsByRecipeId(recipeId);
        })
        .catch(error => {
          console.error('Error fetching recipe:', error);
        });
    },
    getIngredientsByRecipeId(recipeId) {
      this.recipeService.getIngredientByRecipeId(recipeId)
        .then(response => {
          this.ingredients = response.data;
        })
        .catch(error => {
          console.error('Error fetching ingredients:', error);
        });
    },
    getStepsByRecipeId(recipeId) {
      this.recipeService.getStepByRecipeId(recipeId)
        .then(response => {
          this.steps = response.data;
        })
        .catch(error => {
          console.error('Error fetching steps:', error);
        });
    },
  },
};
</script>
  
<style scoped>

</style>
