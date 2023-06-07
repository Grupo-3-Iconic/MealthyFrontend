
<template>
    <pv-toast/>
    <header>
        <pv-toolbar class="bg-primary">
            <template #start>
                <pv-button class="sidebar-button" @click="drawer = !drawer">
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
</template>
<script>

export default {
    name: "toolbar-join-up.component.vue",
    data() {
        return {
            drawer: false,
            items: [
                { label: "Home", to: "join-up" },
                { label: "Login", to: "login-beginner" },
            ],
        };
    },
    methods: {
        getIconClass(label) {
            switch (label) {
                case "Home":
                    return "pi pi-book";
                case "Login":
                    return "pi pi-user-edit";
                default:
                    return "";
            }
        }
    }
}
</script>

<style scoped>

</style>