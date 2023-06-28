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
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="lastName" v-model="lastName" required/>
                                </div>
                            </div>

                            </div>

                            <div class="field col">

                                <div class="form-group-inline">
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="username" v-model="username" required/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="form grid grid">
                            <div class="field col">
                            <div class="form-group-inline">
                                <div class="form-group">
                                    <label for="genre">Genre</label>
                                    <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="genre" v-model="genre" required/>
                                </div>
                            </div>
                                </div>

                            <div class="field col">
                            <div class="form-group-inline">
                                <div class="form-group">
                                    <label for="birthday">Birthday</label>
                                    <input type="text" class="border-orange-400 border-solid p-3 border-round w-full" id="birthday" v-model="birthday" required/>
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


export default {
    name: "login-beginner.component.vue",
    components: {ToolbarJoinUpComponent},

    data() {
        return {
            username:'',
            firstName: '',
            lastName: '',
            genre:'',
            birthday:'',
            email: '',
            phone:'',
            password: '',
            repeatPassword: '',
            userApiService:new UserApiService(),
        };
    },

    computed:{
        isFormEmpty(){
            return(
                this.username===''||
                this.firstName===''||
                this.lastName===''||
                this.genre===''||
                this.birthday===''||
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
                this.signUp();
            }
        },
        async signUp() {
            const userdata = {
                username:this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                genre: this.genre,
                birthday: this.birthday,
                email: this.email,
                phone: this.phone,
                password: this.password,
                role:2,
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


@media (max-width: 767px) {
    .container {
        flex-direction: column;
    }

}


</style>