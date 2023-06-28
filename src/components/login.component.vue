<template>
<ToolbarJoinUp/>    


<img src="../assets/healthy-foods.png" class="p-6" style="width: 50%;height: 80vh;">
<div class="container">
        <div class="card border-orange-400 border-solid" >

            <pv-card>

              <join />
                <template #title>Log in</template>
                <template #content>
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="Email">Username</label>
                            <input id="Email"  type="text" v-model="username" required class="border-orange-400 border-solid p-3 border-round w-full"  placeholder="Username">
                        </div>
                    </div>
                    <div class="formgrid grid">
                        <div class="field col">
                            <label for="Password">Password</label>
                            <input id="Password" type="text"  v-model="password" required class="border-orange-400 border-solid p-3 border-round w-full" placeholder="Password">
                        </div>
                    </div>

                    <div class="formgrid grid border-orange-400">
                        
                        <div class="field  col flex justify-content-center">
                            <pv-button @click.prevent="submitForm()" type="button" class=" btn-login text-white text-base border-1 border-solid  border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">Login</pv-button>

                        </div>


                    </div>
                </template>
            </pv-card>
        </div>
    </div>
</template>

<script>
import {AuthUserService} from "../services/AuthUser.service";
import ToolbarJoinUp from "@/components/toolbar-join-up.component.vue";
export default {
  name: "login.component.vue",
  components: {ToolbarJoinUp,
  },
  data(){
    return{
      role:null,
      username:"",
      password:"",
      user:[],
      authService: new AuthUserService(),
      responseData:[],
    };
  },
  methods:{
    submitForm(){
      this.login1();
    },
    async login1(){
      const loginData={
        username:this.username,
        password: this.password,
        role: localStorage.getItem('role'),
      }
      this.role=localStorage.getItem('role');
      try{
        this.responseData = await this.authService.loginUser(loginData);
        localStorage.setItem('userId',this.responseData.data.id);

        if(this.responseData.data.role===this.role){
          this.$router.push('/mealthy/products');
        }
        else{
          this.$router.push('/mealthy/recipes');
        }

      }
      catch (error){
        console.error('Error loggin in: ', error);
      }
    }



  },

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