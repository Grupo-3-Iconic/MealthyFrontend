<template>
  <div class="container">
    <h1>Tienda</h1>
    <div class="search-container">
      <input type="text" v-model="searchTerm" placeholder="Buscar..." class="search-input" />
      <button class="search-button" @click="search">
        <i class="pi pi-search"></i>
      </button>
    </div>
    <div>
      <h3>Estas tiendas estan cerca de ti y tienen disponible los ingredientes que necesitas</h3>
    </div>
    <div>
      <Card :title="store.name" :style="cardStyle" class="card-container">
        <img :src="store.imageUrl" alt="Imagen de la tienda" style="max-width: 100%; height: auto;" />
        <div>{{ store.title }}</div>
      </Card>
    </div>
  </div>


</template>

<script>
import Card from "primevue/card";
export default {
  components: {
    Card
  },
  data() {
    return {
      searchTerm: '',
      store: {
        name: 'Nombre de la tienda',
        imageUrl: 'ruta-de-la-imagen.jpg',
        title: 'Título de la tienda'
      },
      cardStyle: {
        width: '300px',
        margin: '20px'
      }
    };
  },
  methods: {
    search() {
      // Lógica de búsqueda aquí
      console.log('Realizando búsqueda:', this.searchTerm);
    }
  }
};
</script>

<style scoped>

.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.search-input {
  width: 100%;
  max-width: 300px;
  background-color: #e25a4c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
}

.search-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.pi {
  /* Estilos para el icono PrimeIcons */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 480px) {
  .search-container {
    flex-direction: column;
    margin-top: 10px;
  }

  .search-input {
    margin-bottom: 10px;
  }
}
</style>