<template>
  <div class="w-full">
    <pv-menubar class="sticky bg-primary" >
      <template #start>
        <pv-button >
          <img alt="logo" src="../assets/images/logoMealthy.jpg" class="h-4rem"/>
        </pv-button>
        <pv-button label="Mealthy" class="p-button-lg my-3"/>
      </template>
      <template #end >
        <pv-button class="mx-2 p-button-lg" label="Home" />
        <pv-button class="p-button-lg" label="About Us"/>
      </template>
    </pv-menubar>
  </div>
</template>


<style scoped>

</style>

<script>
export default {
  name: "side-menu"
}
</script>
