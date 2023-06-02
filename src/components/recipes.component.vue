<template>
  <div class="row">
    <div v-for="recipe in recipes" :key="recipe.id" class="col">
      <pv-card>
        <template #header>
          <img :src="recipe.photoUrl" alt="Recipe Photo" class="recipe-image">
        </template>
        <template #title>{{ recipe.title }}</template>
        <template #content>
          <p>{{ recipe.description }}</p>
          <pv-button @click="viewRecipe(recipe.id)">Ver más</pv-button>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import { RecipeApiService } from '@/services/recipe-api.service';

export default {
  name: 'RecipeComponent',
  data() {
    return {
      recipes: [],
      recipeService: new RecipeApiService()
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    getRecipes() {
      this.recipeService.getAll()
        .then(response => {
          this.recipes = response.data;
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    },
    viewRecipe(id) {
      this.$router.push({ name: 'recipe-details', params: { id } });
    },
  },
};
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
}
.col {
  width: 100%;
}
.recipe-image {
  width: 27vw;
  height: 18vw;
  margin: 15px;
}
@media (max-width: 768px) {
  .row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
