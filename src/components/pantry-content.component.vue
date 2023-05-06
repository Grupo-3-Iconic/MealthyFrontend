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
    <table class="pantry-table">
      <thead>
        <tr>
          <th>Insumo</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" class="pantry-item">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <input type="text" v-model="item.unit">
          </td>
          <td>
            <i class="pi pi-trash delete-item-button" @click="onRemoveItem(index)"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
