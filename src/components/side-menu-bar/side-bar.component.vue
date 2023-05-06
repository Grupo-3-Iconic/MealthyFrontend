<template>
    <div style="display:flex; flex-direction: row;  padding-right: 10%;">
        <div class="flex gap-2 justify-content-left" style="background-color: white;" >
            <Sidebar class="p-sidebar w-full md:w-15rem ">
                <div style="padding-top: 25px; padding-bottom: 340px;">
                    <div class="card flex justify-content-center">
                        <Menu :model="items" />
                    </div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-home" label="Mi Perfil" text/>
                    </div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-book" label="Receta" text/>
                    </div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-shopping-bag" label="Tienda" text/>
                    </div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-shopping-bag" label="Tienda" text/>
                    </div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-shopping-cart" label="Carrito" text />
                    </div>
                    <div style="padding-top: 10px; font-size: 40px; height: 40px; width:40px;">
                        <pv-button icon="pi pi-calendar" label="Horario" text/>
                    </div>
                </div>
            </Sidebar>
        </div>
        <div>
            <h1 style="padding-left: 30px; padding-top: 10px"> Recetas </h1>
            <div style="display: flex; flex-direction: row;">
                <div style="padding-top: 10px;">
                    <pv-button style="color: black;" label="Platillo" text/>
                </div>
                <div style="padding-top: 10px;">
                    <pv-button style="color: black;" label="Instrucciones" text/>
                </div>
            </div>
            <div>
                <pv-button style="color:black; font-size:12px;" class="flex-auto" icon="pi pi-angle-left" label="Back" text/>
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>

<script>

export default {
    name:"side-bar"
};
</script>