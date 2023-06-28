<template>
    <ToolbarComponent/>
    <h2>Account Settings</h2>
    <div class="flex">
        <div class="photo">
            <h3>Anna Elsner</h3>
            <p>@annaelsner</p>
            <Card>
            <img alt="user header" src="https://img.freepik.com/fotos-premium/concepto-cocinar-mujer-joven-atractiva-cocina_185193-79031.jpg?w=2000" style="width: 300px; height: 300px; margin-left:60px" />
            <div class="formgrid grid" style="margin-bottom: 20px; margin-left:20px">
            <pv-button label="Upload new photo" />
            <pv-button label="Edit Profile" />
            <pv-button label="Go Premium" />
            </div>
            </Card>
        </div>
        <div class="data flex flex-column">
            <p>Nombre completo</p>
            <pv-input-text type="text" />
            <p>Usuario</p>
            <pv-input-text type="text" />
            <p>Contraseña</p>
            <pv-input-text type="password" />
            <p>Confirmar contraseña</p>
            <pv-input-text type="password" />
            <p>Correo electrónico</p>
            <pv-input-text type="email" />
            <p>Confirmar correo</p>
            <pv-input-text type="email" />
        </div>
    </div>
    <pv-button class="del" label="Delete Account" />
</template>

<script>
import ToolbarComponent from "@/components/toolbar.component.vue";

export default {
    name: "beginner-profile.component.vue",
    components: {ToolbarComponent}
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
.del {
    bottom: 0;
}
</style>