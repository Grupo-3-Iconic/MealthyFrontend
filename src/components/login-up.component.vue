
<template>
    <ToolbarJoinUpComponent/>
    <div class="card flex align-items-center justify-content-center" style="gap: 40px;margin-top: 50px">

      <pv-card style="width: 25em" >
            <template #header>
                <img alt="user header" src="https://img.freepik.com/fotos-premium/concepto-cocinar-mujer-joven-atractiva-cocina_185193-79031.jpg?w=2000" style="width: 400px; height: 400px" />
            </template>
            <template #title>Culinary Beginner </template>
            <template #footer>
                <pv-button @click="sendRole1(), $router.push('/mealthy/login')" label="Login"/>
            </template>

        </pv-card>
        <pv-card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://thumbs.dreamstime.com/b/tienda-mayor-de-selling-vegetables-del-vendedor-36932888.jpg" style="width: 400px; height: 400px"/>
            </template>
            <template #title> Shop owner</template>
            <template #footer style="align-content: center; margin: 0 auto">
                <pv-button  @click="sendRole2(), $router.push('/mealthy/login')" label="Login" />
            </template>
        </pv-card>
    </div>
</template>


<script>
import ToolbarJoinUpComponent from "@/components/toolbar-join-up.component.vue";

export default {
    name: "join-up.component.vue",
    components: {
      ToolbarJoinUpComponent
    },
  data(){
      return{
      };
  },
  methods:{
      sendRole2(){
        localStorage.setItem('role',"1");
      },
      sendRole1(){
        localStorage.setItem('role',"2");
      }
  }

}
</script>

<style scoped>

</style>
