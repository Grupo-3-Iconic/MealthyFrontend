
<template>
    <ToolbarJoinUpComponent/>
    <div class="card flex align-items-center justify-content-center" style="gap: 40px;margin-top: 50px">
        <pv-card style="width: 25em" >
            <template #header>
                <img alt="user header" src="https://img.freepik.com/fotos-premium/concepto-cocinar-mujer-joven-atractiva-cocina_185193-79031.jpg?w=2000" style="width: 400px; height: 400px" />
            </template>
            <template #title>Culinary Beginner </template>
            <template #footer>
                <router-link to="/mealthy/login-beginner">
                <pv-button label="Register"/>
                </router-link>
            </template>

        </pv-card>
        <pv-card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://thumbs.dreamstime.com/b/tienda-mayor-de-selling-vegetables-del-vendedor-36932888.jpg" style="width: 400px; height: 400px"/>
            </template>
            <template #title> Shop owner</template>
            <template #footer style="align-content: center; margin: 0 auto">
                <router-link to="/mealthy/login-store">
                <pv-button label="Register" />
                </router-link>
            </template>
        </pv-card>
    </div>
</template>


<script>

import ToolbarJoinUpComponent from "@/components/toolbar-join-up.component.vue";
export default {
    name: "join-up.component.vue",
    components: {ToolbarJoinUpComponent},

}
</script>

<style scoped>

</style>
