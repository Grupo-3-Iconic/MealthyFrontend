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
                        <img :src="market.photo" alt="Market Photo" class="market-image"  style="margin-top: 20px; width: 40vw;">
                    </div>
                    <pv-divider layout="vertical"/>

                </div>
            </template>
        </pv-card>
    </div>
</template>

<script>
import ToolbarComponent from "@/components/toolbar.component.vue";
import {MarketApiService} from "@/services/market-api.service";

export default {
    name: "see-market.component.vue",
    components: {ToolbarComponent},

    data() {
        return {
            market: null,
            marketService: new MarketApiService()
        };
    },
    created() {
        this.getMarket();
    },
    methods: {
        getMarket() {
            const marketId = this.$route.params.id;
            this.marketService.getById(marketId)
                .then(response => {
                    this.market = response.data;
                })
                .catch(error => {
                    console.error('Error fetching market:', error);
                });
        },

    },
}
</script>

<style scoped>

</style>