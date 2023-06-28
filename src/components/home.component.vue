<template>
  <ToolbarJoinUp/>
  <div class="card-home">
    <pv-card class="custom-card">
    <template #title>
      <h1>
        Bienvenido a Mealthy
      </h1>
    </template>
    <template #content>
      <p style="font-size: 20px;">¡Descubre cómo alimentarse saludablemente puede ser rápido y <br/>
        delicioso con nuestras recetas saludables!</p>
    </template>
    <template #footer>
      <router-link to="/mealthy/login">
        <pv-button color="primary">
          <b>UNETE</b>
        </pv-button>
      </router-link>
    </template>
  </pv-card>
  </div>
  <pv-toolbar>
    <template #center>
      <p>
        Mealthy 2023 | Todos los derechos reservados
      </p>
    </template>
  </pv-toolbar>
</template>
<script>
import ToolbarJoinUp from "@/components/toolbar-join-up.component.vue";

export default {
  name: "home.component.vue",
  components: { ToolbarJoinUp }
}
</script>
<style scoped>
.card-home {
  background-image: url('https://media.gq.com.mx/photos/5f317fa2356b187cffb8431b/16:9/w_2560%2Cc_limit/comida%2520saludable.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 2px;
}
.custom-card {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

</style>
