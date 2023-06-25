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
            <pv-input-text v-model="filters['global'].value" placeholder="Buscar" @input="search" />
          </span>
                </template>
            </pv-toolbar>
            <pv-divider />
        </div>
        <div class="row">
            <div v-for="market in filteredMarkets" :key="market.id" class="col">
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

export default {
    name: "market.component.vue",
    components: {ToolbarComponent},

    data() {
        return {
            markets: [],
            filteredMarkets: [],
            marketService: new MarketApiService(),
            filters: {
                global: {
                    value: null,
                }
            }
        };
    },
    created() {
        this.getMarkets();
    },
    methods: {
        getMarkets() {
            this.marketService.getAll()
                .then(response => {
                    this.markets = response.data;
                    this.filteredMarkets = response.data;
                })
                .catch(error => {
                    console.error('Error fetching markets:', error);
                });
        },
        search() {
            const searchValue = this.filters['global'].value;
            this.filteredMarkets = searchValue
                ? this.markets.filter(market => market.storeName.toLowerCase().includes(searchValue.toLowerCase()) || market.description.toLowerCase().includes(searchValue.toLowerCase()))
                : this.markets;
        },
        viewMarket(id) {
            this.$router.push({ name: 'see-market', params: { id } });
        },
    },
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