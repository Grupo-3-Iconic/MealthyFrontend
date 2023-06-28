<template>
  <ToolbarComponent/>
  <div>
    <div class="markets-toolbar">
      <pv-toolbar style="max-height: 80px;">
        <template #start>
          <h1>Markets</h1>
        </template>
        <template #end>
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <pv-input-text v-model="productName" placeholder="Buscar" @input="searchStoreId" />
                </span>
        </template>
      </pv-toolbar>
      <pv-divider />
    </div>
    <div class="row">
      <div v-for="market in markets" :key="market.id" class="col">
        <pv-card>
          <template #header>
            <img :src="market.photo" alt="Market Photo" class="market-image">
          </template>
          <template #title>{{ market.storeName }}</template>
          <template #content>
            <p>{{ market.description }}</p>
            <pv-button @click="viewMarket(market.id)">Ver más</pv-button>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarComponent from "@/components/toolbar.component.vue";
import {MarketApiService} from "@/services/market-api.service";
import {ProductApiService} from "@/services/product-api.service";

export default {
  name: "market.component.vue",
  components: {ToolbarComponent},

  data() {
    return {
      productName: '',
      markets: []
    };
  },
  created() {
    this.productApiService = new ProductApiService();
    this.marketApiService = new MarketApiService();
  },
  methods: {
    searchStoreId(){
      this.productApiService.findByName(this.productName)
          .then(response => {
            const products = response.data;
            const product = products.find(product => product.name.toLowerCase().equals(this.productName.toLowerCase()));

            if(product){
              const storeId = product.storeId;
              this.searchMarkets(storeId);
            }else {
              this.markets=[];
            }
          })
          .catch(error=>{
            console.error(error);
            this.markets=[];
          });
    },
    searchMarkets(storeId){
      this.marketApiService.getAll()
          .then(response=>{
            const markets = response.data;
            this.markets = markets.filter(market=>market.id === storeId);
          })
          .catch(error=>{
            console.error(error);
            this.markets=[];
          });
    },
    viewMarket(id) {
      this.$router.push({ name: 'see-market', params: { id } });
    },
  }
}
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
.market-image {
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
=======
<template>
  <ToolbarComponent/>
  <div>
    <div class="markets-toolbar">
      <pv-toolbar style="max-height: 80px;">
        <template #start>
          <h1>Markets</h1>
        </template>
        <template #end>
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <pv-input-text v-model="productName" placeholder="Buscar" @input="searchStoreId" />
                </span>
        </template>
      </pv-toolbar>
      <pv-divider />
    </div>
    <div class="row">
      <div v-for="market in markets" :key="market.id" class="col">
        <pv-card>
          <template #header>
            <img :src="market.photo" alt="Market Photo" class="market-image">
          </template>
          <template #title>{{ market.storeName }}</template>
          <template #content>
            <p>{{ market.description }}</p>
            <pv-button @click="viewMarket(market.id)">Ver más</pv-button>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>
import ToolbarComponent from "@/components/toolbar.component.vue";
import {MarketApiService} from "@/services/market-api.service";
import {ProductApiService} from "@/services/product-api.service";

export default {
  name: "market.component.vue",
  components: {ToolbarComponent},

  data() {
    return {
      productName: '',
      markets: []
    };
  },
  created() {
    this.productApiService = new ProductApiService();
    this.marketApiService = new MarketApiService();
  },
  methods: {
    searchStoreId(){
      this.productApiService.findByName(this.productName)
          .then(response => {
            const products = response.data;
            const product = products.find(product => product.name === this.productName);

            if(product){
              const storeId = product.storeId;
              this.searchMarkets(storeId);
            }else {
              this.markets=[];
            }
          })
          .catch(error=>{
            console.error(error);
            this.markets=[];
          });
    },
    searchMarkets(storeId){
      this.marketApiService.getAll()
          .then(response=>{
            const markets = response.data;
            this.markets = markets.filter(market=>market.id === storeId);
          })
          .catch(error=>{
            console.error(error);
            this.markets=[];
          });
    },
    viewMarket(id) {
      this.$router.push({ name: 'see-market', params: { id } });
    },
  }
}
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
.market-image {
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