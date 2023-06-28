<template>
  <ToolbarComponent/>
  <div v-if="market" class="col">
    <pv-card>
      <template #title>
        <pv-toolbar style="max-height: 65px; display: flex; align-items: center;">
          <template #start>
            <h1>{{ market.storeName }}</h1>
          </template>
          <template #end>
            <router-link to="/mealthy/market">
              <pv-button color="primary">Go Back</pv-button>
            </router-link>
          </template>
        </pv-toolbar>
        <pv-divider/>
      </template>
      <template #content>
        <div class="card flex">
          <div>
            <p>{{ market.description }}</p>
            <img :src="market.photo" alt="Market Photo" class="market-image"  style="margin-top: 20px; width: 40vw; ">
          </div>
          <pv-divider layout="vertical"/>
          <div>
            <h2>Productos:</h2>
            <div class="card-container">
              <div v-for="product in products" :key="product.id" class="card-item">
                <pv-card>
                  <template #header>
                    <img :src="product.photoUrl" alt="Product Photo" class="product-image">
                  </template>
                  <template #title>
                    <h3>{{product.name}}</h3>
                  </template>
                  <template #content>
                    <p>Categoría: {{product.category}}</p>
                    <p>Precio: S/ {{product.price}}</p>
                    <p>Unidad: {{product.unit}}</p>
                    <p>Cantidad: {{product.quantity}}</p>
                  </template>
                </pv-card>
              </div>
            </div>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
import ToolbarComponent from "@/components/toolbar.component.vue";
import {MarketApiService} from "@/services/market-api.service";
import {ProductApiService} from "@/services/product-api.service";

export default {
  name: "see-market.component.vue",
  components: {ToolbarComponent},

  data(){
    return {
      market: null,
      products: []
    };
  },
  created(){
    this.productApiService = new ProductApiService();
    this.marketApiService = new MarketApiService();
    this.getStore();
  },
  methods:{
    getProductByStoreId(storeId){
      this.productApiService.getAll()
          .then(response=>{
            const products = response.data;
            this.products=products.filter(product=>product.storeId === storeId);
          })
          .catch(error=>{
            console.error('Error fetching products:', error);
            this.products=[];
          })
    },
    getStore(){
      const marketId = this.$route.params.id;
      this.marketApiService.getById(marketId)
          .then(response=>{
            this.market = response.data;
            this.getProductByStoreId(this.market.id);
          })
          .catch(error=>{
            console.error('Error fetching market: ', error);
          });
    },
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 6vw;
  height: 6vw;
  margin: 15px;
}
</style>