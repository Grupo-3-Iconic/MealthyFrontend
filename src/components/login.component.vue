<template>
<ToolbarJoinUp/>    


<img src="../assets/healthy-foods.png" class="p-6" style="width: 50%;height: 80vh;">
<div class="container">
        <div class="card border-orange-400 border-solid" style="height:9000">
            <pv-card>
                <template #title>Log in</template>
                <template #content>

                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="firstname2">Email</label>
                            <input id="firstname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full"  placeholder="Email">
                        </div>
                    </div>
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="firstname2">Password</label>
                            <input id="firstname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="Password">
                        </div>
                    </div>

                    <div class="formgrid grid border-orange-400">
                        
                        <div class="field  col flex justify-content-center">
                            <router-link to="/mealthy/join-up" >
                            <pv-button type="button" class="text-white text-base border-1 border-solid  border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Login</pv-button>
                            </router-link>
                        </div>


                    </div>
                </template>
            </pv-card>
        </div>
    </div>
</template>

<script>

import ToolbarJoinUp from "@/components/toolbar-join-up.component.vue";
export default {
  name: "login.component.vue",
  components: {ToolbarJoinUp}
}
</script>

<style>

.container{

  border-radius: 5px;
  position: absolute;
  padding: 0px;
  margin: 0px;
  display: flex;
    justify-content: center;
    align-items: center;
    top:19%;
    right: 0px;
    width: 800px;
    height: 600px;
}

</style>