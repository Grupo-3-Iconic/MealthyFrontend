<template>
    <ToolbarJoinUpComponent/>
    <div class="container">
        <div class="card">
            <pv-card>
                <template #title>Create your culinary beginner account</template>
                <template #content>
                    <form class="form">


                        <div class="form grid grid">
                            <div class="field col">

                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="firstName">First Name</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="firstName" v-model="firstName" required/>
                                    </div>
                                </div>

                            </div>
                          <div class="field col">

                            <div class="form-group-inline">
                              <div class="form-group">
                                <label for="lastName">Username</label>
                                <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="lastName" v-model="username" required/>
                              </div>
                            </div>

                          </div>
                            <div class="field col">

                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="lastName" v-model="lastName" required/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form grid grid">
                            <div class="field col">

                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="storeName">Store Name</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="storeName" v-model="storeName" required/>
                                    </div>
                                </div>

                            </div>

                            <div class="field col">

                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="ruc">RUC</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="ruc" v-model="ruc" required/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form grid grid">
                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="location">Location</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="location" v-model="location" required/>
                                    </div>
                                </div>
                            </div>

                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="photo">Photo</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="photo" v-model="photo" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form grid grid">
                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="email" v-model="email" required/>
                                    </div>
                                </div>
                            </div>

                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="phone" v-model="phone" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form grid grid">
                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="description" v-model="description" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form grid grid">
                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="border-orange-400 border-solid p-3 border-round w-full" id="password" v-model="password" required/>
                                    </div>
                                </div>
                            </div>

                            <div class="field col">
                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="repeatPassword">Repeat Password</label>
                                        <input type="password" class="border-orange-400 border-solid p-3 border-round w-full" id="repeatPassword" v-model="repeatPassword" required/>
                                        <p v-if="passwordMismatch" class="error-message">Passwords do not match.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form grid grid border-orange-400">
                            <div class="field col">
                                <router-link to="/mealthy/login">
                                    <pv-button @click="submitForm" ::disabled="isFormEmpty || passwordMismatch">Submit</pv-button>
                                </router-link>
                            </div>

                            <div class="field col">
                                <router-link to="/mealthy/join-up">
                                    <pv-button type="button" class="text-white text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Cancel</pv-button>
                                </router-link>
                            </div>
                        </div>

                    </form>

                </template>

            </pv-card>
        </div>


    </div>
</template>



<script>
import ToolbarJoinUpComponent from "@/components/toolbar-join-up.component.vue";
import {UserApiService} from "@/services/user-api.service";
import {MarketApiService} from "@/services/market-api.service";


export default {
    name: "login-beginner.component.vue",
    components: {ToolbarJoinUpComponent},

    data() {
        return {
            username:'',
            storeId:'',
            firstName: '',
            lastName: '',
            storeName:'',
            ruc:'',
            location:'',
            photo:'',
            description:'',
            email: '',
            phone:'',
            password: '',
            repeatPassword:'',
            userApiService:new UserApiService(),
            marketApiService:new MarketApiService(),
        };
    },

    computed:{
        isFormEmpty(){
            return(
                this.firstName===''||
                this.lastName===''||
                this.storeName===''||
                this.ruc===''||
                this.location===''||
                this.photo===''||
                this.description===''||
                this.email===''||
                this.phone===''||
                this.password===''||
                this.repeatPassword===''
            );
        },
        passwordMismatch() {
            return this.password !== this.repeatPassword;
        },
    },

    methods: {
        submitForm() {
            if (!this.isFormEmpty && !this.passwordMismatch) {
                this.addMarket();
            }
        },
        async addMarket() {
            const marketData = {
                storeName: this.storeName,
                photo: this.photo,
                description: this.description,
            };
            try {

                const response=await this.marketApiService.create(marketData);
                console.log("Success:", response.data);
                this.storeId=response.data.id;


            } catch (error) {
                console.error('Error registering beginner:', error);
            }
          const userdata = {
            username:this.username,
            firstName: this.firstName,
            lastName: this.lastName,
            storeName: this.storeName,
            ruc: this.ruc,
            location: this.location,
            photo: this.photo,
            description: this.description,
            email: this.email,
            phone: this.phone,
            role:1,
            storeId:this.storeId,
            password: this.password,
          };
          try {

            const response=await this.userApiService.create(userdata);
            console.log("Success:", response.data);

          } catch (error) {
            console.error('Error registering beginner:', error);
          }
        },
    },


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