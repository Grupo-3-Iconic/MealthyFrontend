<template>
    <ToolbarJoinUpComponent/>
        <div class="container">
            <div class="card">
                <pv-card>
                    <template #title>Create your culinary beginner account</template>
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
                        <div class="formgrid grid">
                            <div class="field col">
                                <label for="firstname2">Genre</label>
                                <input id="firstname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="ej. female">
                            </div>
                            <div class="field col">
                                <label for="lastname2">Birthday</label>
                                <input id="lastname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="dd/mm/yy">
                            </div>
                        </div>


                        <div class="form grid grid">
                            <div class="field col">
                                <label for="firstname2">Email</label>
                                <input id="firstname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="example@gmail.com">
                            </div>
                            <div class="field col">
                                <label for="lastname2">Phone</label>
                                <input id="lastname2" type="text" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="+51">
                            </div>
                        </div>
                        <div class="formgrid grid border-orange-400">
                            <div class="field col border-orange-400">
                                <label for="firstname2">Password</label>
                                <input type="password" v-model="password1" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="Password"/>
                                <i class="fa fa-eye" v-show="!showPassword" @click="showPassword = true"></i>
                                <i class="fa fa-eye-slash" v-show="showPassword" @click="showPassword = false"></i>
                            </div>
                            <div class="field col">
                                <label for="firstname2">Repeat Password</label>
                                <input type="password" v-model="password2" class="border-orange-400 border-solid p-3 border-round w-full" placeholder="Repeat password"/>
                                <i class="fa fa-eye" v-show="!showPassword" @click="showPassword = true"></i>
                                <i class="fa fa-eye-slash" v-show="showPassword" @click="showPassword = false"></i>
                            </div>
                        </div>

                        <div class="formgrid grid border-orange-400">
                            <div class="field col">
                                <router-link to="/mealthy/products">
                                <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Submit</pv-button>
                                </router-link>
                            </div>
                            <div class="field col">
                                <router-link to="/mealthy/join-up">
                                <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Cancel</pv-button>
                                </router-link>
                            </div>
                        </div>

                          <template>
                        </template>
                    </template>
                </pv-card>
            </div>
        </div>
</template>



<script>
import ToolbarJoinUpComponent from "@/components/toolbar-join-up.component.vue";


export default {
    name: "login-beginner.component.vue",
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
    height: 100%;
}


</style>