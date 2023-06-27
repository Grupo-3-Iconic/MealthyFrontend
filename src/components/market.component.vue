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

    <pv-divider/>
    <div class="card flex">
      <div>
        <img :src="store.photoUrl" alt="store-image" class="  store-image">
      </div>
      <pv-divider layout="vertical" style="padding-left:50px;"/>
      <div v-for="product in products">
 
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
.store-image{
  height: 500px;
  padding-left: 40px;
  width: 550px;
  display: flex;
}
ul{
  display: flex;

}
.nav-market li{
  list-style: none;
  margin-right: 40px;

}
</style>