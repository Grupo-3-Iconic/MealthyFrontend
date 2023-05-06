<template>
  <div class="pantry-content">
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
              <i class="pi pi-thumbs-up"></i>
            </span>
            <pv-input-text placeholder="Nombre de insumo" type="text" v-model="newItemName" required></pv-input-text>
        </div>
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
              <i class="pi pi-shopping-bag"></i>
            </span>
            <pv-input-text placeholder="Cantidad" type="number" v-model="newItemQuantity" required></pv-input-text>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
              <i class="pi pi-question"></i></span>
            <pv-input-text placeholder="Unidad" type="text" v-model="newItemUnit" required></pv-input-text>
        </div>
        <pv-button label="Save" icon="pi pi-check" severity="success" @click="onAddItem" aria-label="add supply"/>
    </div>
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
  data() {
    return {
      items: [], 
      newItemName: '', 
      newItemQuantity: '', 
      newItemUnit: '', 
      editingIndex: null 
    };
  },
  methods: {
    onAddItem() {
      if (!this.newItemName || !this.newItemQuantity || !this.newItemUnit) {
        return;
      }
      const newItem = {
        name: this.newItemName, 
        quantity: this.newItemQuantity, 
        unit: this.newItemUnit
      };
      this.items.push(newItem);
      this.newItemName = '';
      this.newItemQuantity = '';
      this.newItemUnit = '';
    },
    onRemoveItem(index) {
      this.items.splice(index, 1);
    },
    onEditItem(index) {

    }
  }
};


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
.pantry-table th,.pantry-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
