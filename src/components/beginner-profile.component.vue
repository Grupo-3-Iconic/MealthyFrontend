<template>
    <ToolbarComponent/>
    <h2>Account Settings</h2>
    <div class="flex">
        <div class="photo">
            <h3>{{fullNameUser}}</h3>
            <p>@{{user.username}}</p>
            <Card>
            <img alt="user header" src="https://img.freepik.com/fotos-premium/concepto-cocinar-mujer-joven-atractiva-cocina_185193-79031.jpg?w=2000" style="width: 300px; height: 300px; margin-left:60px" />
            </Card>
        </div>
        <div class="data flex flex-column">
            <p>Nombre</p>
            <pv-input-text type="text" v-model="user.firstName"/>
            <p>Apellido</p>
            <pv-input-text type="text" v-model="user.lastName"/>
            <p>Usuario</p>
            <pv-input-text type="text" v-model="user.username"/>
            <p>Contraseña</p>
            <pv-input-text type="password" v-model="user.password"/>
            <p>Confirmar contraseña</p>
            <pv-input-text type="password" v-model="user.password"/>
            <p>Correo electrónico</p>
            <pv-input-text type="email" v-model="user.email"/>
            <p>Confirmar correo</p>
            <pv-input-text type="email" v-model="user.email"/>
            <pv-button @click="updateUser">Save Changes</pv-button>
        </div>
    </div>
</template>

<script>
import ToolbarComponent from "@/components/toolbar.component.vue";
import {UserApiService} from "@/services/user-api.service";

export default {
    name: "beginner-profile.component.vue",
    components: {ToolbarComponent},
    data(){
      return{
        userId: localStorage.getItem("userId"),
        user: [],
        fullName: null
      };
    },
  created(){
      this.userApiService = new UserApiService();
      this.getDataOfUserByUserId();
      this.updateUser();
  },
  computed:{
    fullNameUser(){
      return this.user.firstName + " " + this.user.lastName;
    }
  },
  methods:{
      getDataOfUserByUserId(){
        this.userApiService.getById(this.userId)
            .then(response =>{
              this.user = response.data;
            })
            .catch(error=>{
              console.error(error);
            });
      },
      updateUser(){
        this.userApiService.update(this.userId, this.user)
            .then(response=>{
              console.log("Usuario actualizado: ", response.data);
            })
            .catch(error=>{
              console.error("Error al actualizar el usuario: ", error);
            })
      }
  }
};
</script>

<style scoped>
* {
    font-family: 'Ubuntu', sans-serif;
}
h2 {
    padding: 5px;
    border-bottom: solid 1px black;
    font-weight: bolder;
}
.photo {
    width: 40%;
    margin: 10px;
}
.data {
    width: 60%;
}
</style>