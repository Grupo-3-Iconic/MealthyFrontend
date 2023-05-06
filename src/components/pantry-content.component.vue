<template>
  <div class="pantry-content">
    <form @submit.prevent="onAddItem">
      <label for="item-name"> Insumo </label>
      <input id="item-name" type="text" v-model="newItemName" required>
      <label for="item-quantity"> Cantidad </label>
      <input id="item-quantity" type="number" v-model="newItemQuantity" required>
      <label for="item-unit"> Unidad </label>
      <input id="item-unit" type="text" v-model="newItemUnit" required>
      <i class="pi pi-plus add-item-button" @click="onAddItem"></i>
    </form>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
