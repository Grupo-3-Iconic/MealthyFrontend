<template>
    <ToolbarComponent/>
    <div class="market-toolbar">
      <pv-toolbar style="max-height: 80px;">
        <template #start>
          <h1>{{store.name}}</h1>
        </template>
        <template #end>
          <div class=" flex col-12 text-center  nav-market">
      <ul>
        <li><pv-button >Verduras</pv-button></li>
        <li><pv-button>Abarrotes </pv-button> </li>
        <li><pv-button>Frutas</pv-button></li>
        <li><pv-button > Bebidas</pv-button></li>
      </ul>
    </div>

        </template>
      </pv-toolbar>
    </div>

    <div class="card flex">
      <div>
        <p> {{ store.name}}</p>
      </div>

    </div>


  </template>
  
<script>

import {ProductsApiService} from "@/services/products-api.service";
import {StoreApiService} from '@/services/store-api.service.js';
import ToolbarComponent from "@/components/toolbar.component.vue";
export default {
  name: 'MarketComponent',
  components: {ToolbarComponent},
  data(){
    return{
      store:null,
      products:[],
      productService: new ProductsApiService(),
      storeService: new StoreApiService(), 

    };

  },
  created(){
    this.getStore();
  },
  methods:{
    getStore(){
      const storeId =this.$route.params.id;
      this.storeService.getById(storeId)
        .then(response=>{
          this.store = response.data;
       })
       .catch(error=>{
         console.error('Error fetching store: ', error);
       })
    }
  },
}                     
</script>
  
<style >
ul{
  display: flex;

}

.nav-market li{
  list-style: none;
  margin-right: 40px;

}
</style>