<template>
    <pv-toast/>
    <header>
        <pv-toolbar class="bg-primary">
            <template #start>
                <pv-button>
                    <img alt="logo" src="../assets/logo.jpg" class="h-4rem"/>
                </pv-button>
                <h3><b>Mealthy</b></h3>
            </template>
            <template #end>
                <div class="flex-column">
                    <router-link v-for="item in items" :to="`/mealthy/${item.to}`" custom v-slot="{ navigate, href }" :key="item.label">
                        <pv-button class="p-button-text text-white" :href="href" @click="navigate">
                            <b>{{ item.label }}</b>&nbsp;
                            <i :class="getIconClass(item.label)"></i>
                        </pv-button>
                    </router-link>
                </div>
            </template>
        </pv-toolbar>
    </header>
    <pv-sidebar v-model:visible="drawer"></pv-sidebar>
</template>

<script>
export default {
    name: 'ToolbarComponent',
    data() {
        return {
            drawer: false,
            items: [
                { label: "Recipes", to: "recipes" },
                { label: "Pantry", to: "pantry" },
                { label: "Market", to: "market" },
                { label: "Settings", to: "beginner-profile" },
                {label:"Home", to: "join-up"}
            ],
        };
    },
    methods: {
        getIconClass(label) {
            switch (label) {
                case "Recipes":
                    return "pi pi-book";
                case "Pantry":
                    return "pi pi-th-large";
                case "Market":
                    return "pi pi-shopping-cart";
                case "Settings":
                    return "pi pi-user-edit";
                case "Home":
                    return "pi pi-home";
                default:
                    return "";
            }
        }
    }
};
</script>

<style scoped>
</style>