<template>
    <div style="display:flex; flex-direction: row;  padding-right: 10%;">
        <div class="flex gap-2 justify-content-left" style="background-color: white;" >
            <Sidebar class="p-sidebar w-full md:w-15rem ">
                <div style="padding-top: 25px; padding-bottom: 320px;">
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
                <div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-user" label="Amy Elsner" text/>
                    </div>
                    <div style="padding-top: 10px;">
                        <pv-button icon="pi pi-cog" label="Ajustes" text />
                    </div>
                    <div style="padding-top: 10px; font-size: 35px; height: 40px; width:160px;">
                        <pv-button icon="pi pi-sign-out" label="Cerrar sesión" text/>
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
            <div style="padding-left: 150px; display: flex; flex-direction: row">
                <img src="../../assets/images/plato1.png" style="width: 250px; height: 250px;"/>
                <div style="padding-left: 100px;">
                    <div>
                        <h2 style="font-family: Lato;">Instrucciones</h2>
                    </div>
                    <div>
                        <ol>
                            <li>
                                En una licuadora, licúa cilantro junto con la espinaca y agua como para hacer una pasta homogénea. Reserva.
                            </li>
                            <li>
                                Seca el pollo con papel toalla y sazona con sal y pimienta. En una olla se calienta el aceite a fuego medio y se
                                fríe el pollo hasta que esté dorado por ambos lados, unos 7 minutos. Retira de la olla y ponlo en un plato.
                            </li>
                            <li>
                                En la misma olla fríe la cebolla, ajo y la pasta de ají amarillo, revolviendo por 5 minutos. Incorpora el
                                cilantro y espinaca licuado, fríe por 3 minutos. Agrega la cerveza, caldo de pollo, y agrega el pollo en la olla
                            </li>
                            <li>
                                Hierve, tapa y baja el fuego. Cuece por 20 minutos. Corrige la sazón con más sal y pimienta si fuera necesario.
                            </li>
                            <li>
                                En otra olla calienta 1 cucharada de aceite. Incorpora el arroz y revuélvelo bien. Agrega las alverjitas,
                                zanahorias, pimiento, maíz, y 3 1/2 tazas del caldo que utilizaste para cocinar el pollo. Deja que rompa
                                hervor, tapa, baja el fuego al mínimo y deja cocer por 20 a 25 minutos. Revuelve con un tenedor y volver a tapar.
                            </li>
                            <li>
                                Cuando el arroz esté a punto, servir en cuatro platos, poner encima una pierna de pollo y Salsa Criolla al
                                costado. Si quieren también un poco del juguito en el que se coció el pollo
                            </li>
                            <li>
                                Para hacer la Salsa Criolla, corta 1/2 cebolla roja en láminas muy delgadas a lo largo, lava bien y escurre.
                                Mezcla con 1/2 tomate cortado en tiras muy finas, hojas de cilantro, sal, pimienta, jugo de 1 limón y 1
                                cucharada de aceite de oliva. Si desean le pueden agregar tiritas de ají.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div style="display: flex; padding-top:25px; flex-wrap: wrap; padding-left: 150px;">
                <div style="flex: 1;">
                    <img src="../../assets/images/plato2.png" style="width: 250px; height: 200px;"/>
                </div>
                <div style="flex: 1;">
                    <img src="../../assets/images/plato3.png" style="width: 250px; height: 200px;"/>
                </div>
                <div style="flex: 1;">
                    <img src="../../assets/images/plato4.png" style="width: 250px; height: 200px;"/>
                </div>
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