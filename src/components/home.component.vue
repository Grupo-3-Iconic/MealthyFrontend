<template>
  <ToolbarJoinUp/>
    <img class="img-fluid" src="../assets/home-image.jpg"/>
    <div class="text-center1">

      <p class="text-centered1" style="font-size:70px">Bienvenido a Mealthy</p>
      <p class="text-centered ">¡Descubre cómo alimentarse saludablemente puede ser rápido y delicioso con nuestras recestas saludables</p>
      <router-link to="/mealthy/login">
        <pv-button class="text-white absolute md justify-content-center" style="top:65%;right:42%; width:200px; ">Unete </pv-button>
      </router-link>
    </div>
     <p class="final-text absolute ">Mealthy 2023 | Todos los derechos reservados</p>

</template>

<script>

import ToolbarJoinUp from "@/components/toolbar-join-up.component.vue";
export default {
  name: "home.component.vue",
  components: {ToolbarJoinUp}
}
</script>

<style >
.text-center1{
  padding-left:5.0rem;
  padding-right:5.0rem;
}
.text-centered1{
  transform: translate(-50%, -50%);
  position:absolute;
  top:30%;
  left:50%;

}
.text-centered{
  transform: translate(-50%, -50%);
  position:absolute;
  font-size: 40px;
  text-align: center;
  width:1000px;
  top:50%;
  left:50%;
}
.final-text{
  top:90%;
}
.img-fluid{
  width: 100%;
  height: 85vh;
}

</style>