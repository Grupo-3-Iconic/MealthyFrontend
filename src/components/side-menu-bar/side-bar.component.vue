<template>
    <div class="flex gap-2 justify-content-left" style="background-color: white">
        <Sidebar class="p-sidebar w-full md:w-15rem" >
            <div style="padding-top: 25px; padding-bottom: 460px">
                <div>
                    <pv-button icon="pi pi-home" label="Mi Perfil" text/>
                </div>
                <div style="padding-top: 10px">
                    <pv-button icon="pi pi-book" label="Receta" text/>
                </div>
                <div style="padding-top: 10px">
                    <pv-button icon="pi pi-shopping-bag" label="Tienda" text/>
                </div>
                <div style="padding-top: 10px">
                    <pv-button icon="pi pi-shopping-bag" label="Tienda" text/>
                </div>
                <div style="padding-top: 10px">
                    <pv-button icon="pi pi-shopping-cart" label="Carrito" text />
                </div>
                <div style="padding-top: 10px">
                    <pv-button icon="pi pi-calendar" label="Horario" text/>
                </div>
            </div>

        </Sidebar>
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        name: 'side-bar'
    }
</script>