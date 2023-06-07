<template>
  <div class="w-full">
    <pv-menubar class="sticky bg-primary" >
      <template #start>
        <pv-button >
          <img alt="logo" src="../assets/images/logoMealthy.jpg" class="h-4rem"/>
        </pv-button>
        <pv-button label="Mealthy" class="p-button-lg my-3"/>
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
