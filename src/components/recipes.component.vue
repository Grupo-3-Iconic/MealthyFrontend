<template>
    <ToolbarComponent/>
  <div>
    <div class="recipes-toolbar">
      <pv-toolbar style="max-height: 80px;">
        <template #start>
          <h1>Recipes</h1>
        </template>
        <template #end>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <pv-input-text v-model="filters['global'].value" placeholder="Buscar" @input="search" />
          </span>
        </template>
      </pv-toolbar>
      <pv-divider />
    </div>
    <div class="row">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="col">
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
  </div>
</template>

<script>
import { RecipeApiService } from '@/services/recipe-api.service';
import ToolbarComponent from "@/components/toolbar.component.vue";

export default {
  name: 'RecipeComponent',
    components: {ToolbarComponent},
  data() {
    return {
      recipes: [],
      filteredRecipes: [],
      recipeService: new RecipeApiService(),
      filters: {
        global: {
          value: null,
        }
      }
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    getRecipes() {
      this.recipeService.getAll()
        .then(response => {
          this.filteredRecipes = response.data;
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    },
    search() {
      const searchValue = this.filters['global'].value;
      this.filteredRecipes = searchValue
        ? this.recipes.filter(recipe => recipe.title.toLowerCase().includes(searchValue.toLowerCase()) || recipe.description.toLowerCase().includes(searchValue.toLowerCase()))
        : this.recipes;
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
