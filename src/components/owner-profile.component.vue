<template>
    <toolbar-store-component/>
    <h2>Account Settings</h2>
    <div class="flex">
      <div class="photo">
        <h3>{{fullNameUser}}</h3>
        <p>@{{user.username}}</p>
        <Card>
          <img alt="user header" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" style="width: 300px; height: 300px; margin-left:60px" />
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

        <div class="btn-save">
          <pv-button @click="updateUser">Save Changes</pv-button>
        </div>
      </div>

    </div>
</template>
<script>
import ToolbarStoreComponent from "@/components/toolbar-store.component.vue";
import {UserApiService} from "@/services/user-api.service";
export default {
    name: "owner-profile",
    components: {ToolbarStoreComponent},
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
}
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

.btn-save{
  margin-top: 20px;
}

</style>