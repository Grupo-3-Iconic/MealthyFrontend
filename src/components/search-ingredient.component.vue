<template>
  <div class="container">
    <h1>Tienda</h1>
    <div class="search-container">
      <input type="text" v-model="searchTerm" placeholder="Buscar..." class="search-input" />
      <button class="search-button" @click="getProductIdBySearch(searchTerm)">
        <i class="pi pi-search"></i>
      </button>
    </div>
    <div>
      <h3>Estas tiendas están cerca de ti y tienen disponibles los ingredientes que necesitas</h3>
    </div>
    <div class="card-container">
      <pv-card v-for="storeResult in storeResults" :key="storeResult.id" class="card-item">
        <div class="card-content">
          <img :src="storeResult.photoUrl" alt="Imagen de la tienda {{storeResult.name}}" class="image" />
          <div class="store-info">
            <h4 class="store-name">{{storeResult.name}}</h4>
            <p class="store-description">{{storeResult.description}}</p>
          </div>
          <div>
            <button class="ver-button">Ver</button>
          </div>
        </div>
      </pv-card>
    </div>
  </div>
</template>

<script>
import {ProductApiService} from "../services/product-api.service";
import {StoreApiService} from "../services/store-api.service";
export default{
  name:'SearchIngredientComponent',
  data(){
    return{
      searchTerm:'',
      product: null,
      storeResults:[],
      productService: new ProductApiService(),
      storeService: new StoreApiService()
    };
  },
  methods:{
    getProductIdBySearch(searchText) {
      this.productService.findByName(searchText)
          .then(response => {
            const foundProduct = response.data.find(product => product.name.toLowerCase() === searchText.toLowerCase());
            if (foundProduct) {
              const productId = foundProduct.id;
              this.getStoreByProductId(productId);
            } else {
              console.log('Product not found');
            }
          })
          .catch(error => {
            console.log(error);
          });
    },
    getStoreByProductId(productId) {
      this.storeService.getAll()
          .then(response => {
            const filteredStores = response.data.filter(store => {
              return store.product.some(product => product.productId === productId);
            });

            this.storeResults = filteredStores;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}

</script>

<style scoped>

.container{
  margin-left:5%;
}

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
  font-size: 25px;
  width: 25px;
  height: 25px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left:5%;
  gap: 2.5%;
}

.card-item {
  width: 25%;
  margin-bottom: 20px;
}

.card-content {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.image {
  width: 80%;
  height: auto;
  margin-bottom: 10px;
}

.store-info {
  text-align: center;
}

.store-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.store-description {
  font-size: 1rem;
}

.ver-button {
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .card-item {
    width: calc(100% / 2); /* Para mostrar máximo 2 cartas en una fila en dispositivos más pequeños */
  }
}

@media (max-width: 480px) {
  .search-container {
    flex-direction: column;
    margin-top: 10px;
  }

  .search-input {
    margin-bottom: 10px;
  }

  .image {
    width: 30%; /* Tamaño de imagen más pequeño en dispositivos móviles */
  }
}
</style>