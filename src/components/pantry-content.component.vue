<template>
  <div class="pantry-content">
    <form>
      <pv-input-text placeholder="Nombre de insumo" type="text" v-model="newItemName" required></pv-input-text> &nbsp
      <pv-input-text placeholder="Cantidad" type="number" v-model="newItemQuantity" required></pv-input-text> &nbsp
      <pv-input-text placeholder="Unidad" type="text" v-model="newItemUnit" required></pv-input-text> &nbsp
      <pv-button label="Save" icon="pi pi-check" severity="success" @click="onAddItem" aria-label="add supply"/>
    </form>
    <pv-data-table :value="items" :paginator="true" :rows="10" class="pantry-table">
        <pv-column field="name" header="Insumo"></pv-column>
        <pv-column  field="quantity" header="Cantidad"></pv-column>
        <pv-column  field="unit" header="Unidad"></pv-column>
        <pv-column header="Actions">
            <template #body="slotProps">
              <pv-button icon="pi pi-pencil edit-item-button" severity="warning" @click="onEditItem(slotProps.rowIndex)" aria-label="edit item"/> &nbsp
              <pv-button icon="pi pi-trash delete-item-button" severity="danger" @click="onRemoveItem(slotProps.rowIndex)" aria-label="delete item"/> &nbsp
            </template>
        </pv-column>
    </pv-data-table>
  </div>
</template>

<script>
  export default {
    name: 'PantryContent',
    data() {
      return {
        title: 'My Pantry',
        items: [
          { name: 'Papas', quantity: 1, unit: 'kg' },
          { name: 'Zanahoria', quantity: 5, unit: 'kg' },
          { name: 'Arroz', quantity: 7, unit: 'kg' }
        ],
        newItemName: '',
        newItemQuantity: '',
        newItemUnit: ''
      }
    },
    methods: {
      onAddItem() {
        if (this.newItemName && this.newItemQuantity && this.newItemUnit) {
          this.items.push({
            name: this.newItemName,
            quantity: this.newItemQuantity,
            unit: this.newItemUnit
          })
          this.newItemName = ''
          this.newItemQuantity = ''
          this.newItemUnit = ''
        }
      },
      onRemoveItem(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
.pantry-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.pantry-table {
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;
}
.pantry-table th,
.pantry-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
