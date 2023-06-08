<template>
    <ToolbarJoinUpComponent/>
    <div class="container">
        <div class="card">
            <pv-card>
                <template #title>Create your store owner account</template>
                <template #content>

                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="firstname2">Firstname</label>
                            <input id="firstname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full"  placeholder="Firstname">
                        </div>
                        <div class="field col">
                            <label for="lastname2">Lastname</label>
                            <input id="lastname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full"  placeholder="LastName">
                        </div>
                    </div>
                    <div class="formgrid grid border-orange-400">
                        <div class="field col">
                            <router-link to="/mealthy/products">
                            <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">submit</pv-button>
                            </router-link>
                        </div>
                        <div class="field col">
                            <router-link to="/mealthy/join-up">
                            <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Cancel</pv-button>
                            </router-link>
                        </div>
                    </div>
                </template>
            </pv-card>
        </div>
    </div>
</template>



<script>

import ToolbarJoinUpComponent from "@/components/toolbar-join-up.component.vue";

export default {
    name: "login-store.component.vue",
    components: {ToolbarJoinUpComponent},


    data() {
        return {
            password1: '',
            password2:'',
            showPassword: false
        }
    }

}


</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%

}

</style>