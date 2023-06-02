<template>
  <div class="supply-table  p-d-flex">
    <!--Toolbar de edicion-->
    <div class="supplies-toolbar p-d-flex p-ai-center">
      <pv-toolbar class="mb-4 p-jc-between">
        <template #start>
          <pv-button label="Add" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew"/>
          <pv-button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedSupplies || !selectedSupplies.length"/>
        </template>
        <template #end>
          <pv-button label="Export" icon="pi pi-download" class="p-button-help" @click="exportToCSV($event)"/>
        </template>
      </pv-toolbar>
    </div>
    <!--Tabla con filtro y titulo incluido-->
    <div class="supplies p-d-flex p-ai-center">
      <pv-data-table
        ref="dt"
        :value="supplies"
        v-model:selection="selectedSupplies"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} supplies"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="table-header flex flex-column md:flex-row md:justify-content-between">
            <h5 class="mb-2 md:m-0 p-as-md-center text-xl">Supply Manager</h5>
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <pv-input-text v-model="filters['global'].value" placeholder="Search" />
            </span>
          </div>
        </template>
        <pv-column selectionMode="multiple" style="width: 3rem" :exportable="false"></pv-column>
        <pv-column field="id" header="Id" :sortable="true" style="min-width: 8rem"></pv-column>
        <pv-column field="name" header="Name" :sortable="true" style="min-width: 8rem"></pv-column>
        <pv-column field="unit" header="Unit" :sortable="true" style="min-width: 8rem"></pv-column>
        <pv-column field="quantity" header="Quantity" :sortable="true" style="min-width: 8rem"></pv-column>
        <pv-column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <pv-button label="Edit" raised icon="pi pi-pencil" class="p-button-rounded" @click="editSupply(slotProps.data)"/> &nbsp;
            <pv-button label="Delete" severity="warning" raised icon="pi pi-trash" class="p-button-rounded" @click="confirmDeleteSupply(slotProps.data)"/>
          </template>
        </pv-column>
      </pv-data-table>
    </div>
    
  </div>
  <!--Add Supply Dialog-->
    <pv-dialog
      v-model:visible="supplyDialog"
      :style="{ width: '450px' }"
      header="Supply Information"
      :modal="true"
      class="p-fluid"
    >
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
            type="text" 
            id="name"
            v-model.trim="supply.name"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !supply.name }"
          />
          <label for="name">Name</label>
          <small class="p-error" v-if="submitted && !supply.name">Name is required.</small>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
              type="text"
              id="unit"
              v-model="supply.unit"
              required="true"
              autofocus
              :class="{'p-invalid': submitted && !supply.unit}"
          />
          <label for="unit">Unit</label>
          <small class="p-error" v-if="submitted && !supply.unit">
            Unit is required.
          </small>
        </span>
      </div>
      <div class="field">
        <span class="p-float-label">
          <pv-input-text
            type="number"
            id="quantity"
            v-model="supply.quantity"
            required="true"
            autofocus
            :class="{'p-invalid': submitted && !supply.quantity}"
          />
          <label for="quantity">Quantity</label>
          <small class="p-error" v-if="submitted && !supply.quantity">Quantity is required.</small>
        </span>
      </div>
      <template #footer>
        <pv-button
          :label="'Cancel'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <pv-button
          :label="'Save'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveSupply"
        />
      </template>
    </pv-dialog>


  <!--Delete Supply Dialog-->
  <pv-dialog
    v-model:visible="deleteSupplyDialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="supply">Are you sure you want to delete <b>{{ supply.title }}</b>?</span>
    </div>
    <template #footer>
      <pv-button
          :label="'No'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteSupplyDialog = false"
      />
      <pv-button
          :label="'Yes'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteSuppply"
      />
    </template>
  </pv-dialog>

  <!--Delete Selected Supplies Dialog-->
  <pv-dialog
    v-model:visible="deleteSuppliesDialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
  <div class="confirmation-content">
    <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
    <span v-if="supply">
      Are you sure you want to delete the selected supplies?
    </span>
  </div>
  <template #footer>
    <pv-button
      :label="'No'.toUpperCase()"
      icon="pi pi-times"
      class="p-button-text"
      @click="deleteSuppliesDialog = false"
    />
    <pv-button
      :label="'Yes'.toUpperCase()"
      icon="pi pi-check"
      class="p-button-text"
      @click="deleteSelectedSupplies"
    />
  </template>
</pv-dialog>

</template>

<script>
import { FilterMatchMode } from "primevue/api";
import { SupplyApiService } from "../services/supply-api.service";

export default {
  name: 'SupplyComponent',
  data() {
    return {
      supply: {
        unit: null
      },
      units: [
        { label: 'Kilogramo', value: 'kg' },
        { label: 'Gramo', value: 'g' },
        { label: 'Unidad', value: 'u' },
      ],
      supplies: [],
      filters: {},
      supplyDialog: false,
      deleteSupplyDialog: false,
      deleteSuppliesDialog: false,
      supply: {},
      selectedSupplies: [], 
      submitted: false,
      supplyService: new SupplyApiService(),
    };
  },
  created() {
    this.initFilters();
    this.loadSupplies();
  },
  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    loadSupplies() {
      this.supplyService.getAll().then(response => {
        this.supplies = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    openNew() {
      this.supply = {};
      this.submitted = false;
      this.supplyDialog = true;
    },
    hideDialog() {
      this.supplyDialog = false;
      this.submitted = false;
    },
    findIndexById(id) {
      console.log(`current id: ${id}`);
      return this.supplies.findIndex((supply) => supply.id === id);
    },
    saveSupply() {
      this.submitted = true;
      if (this.supply.name.trim() && this.supply.unit.trim() && this.supply.quantity.trim()) {
        if (this.supply.id) {
          console.log(this.supply);
          this.supplyService
            .update(this.supply.id, this.supply)
            .then((response) => {
              console.log(response.data.id);
              this.supplies[this.findIndexById(response.data.id)] = response.data;
              this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Supply Updated",
                life: 3000,
              });
              console.log(response);
            });
        } else {
          this.supply.id = 0;
          console.log(this.supply);
          this.supplyService
            .create(this.supply)
            .then((response) => {
              this.supplies.push(response.data);
              this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Supply Created",
                life: 3000,
              });
              console.log(response);
            });
        }
        this.supplyDialog = false;
        this.supply = {};
      }
    },
    editSupply(supply) {
      console.log(supply);
      this.supply = { ...supply };
      console.log(this.supply);
      this.supplyDialog = true;
    },
    confirmDeleteSupply(supply) {
      this.supply = supply;
      this.deleteSupplyDialog = true;
    },
    deleteSuppply() {
      this.supplyService.delete(this.supply.id).then((response) => {
        this.supplies = this.supplies.filter(
            (t) => t.id !== this.supply.id
        );
        this.deleteSupplyDialog = false;
        this.supply = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Supply Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
    exportToCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteSuppliesDialog = true;
    },
    deleteSelectedSupplies() {
      this.selectedSupplies.forEach((supply) => {
        this.supplyService.delete(supply.id)
          .then((response) => {
            this.supplies = this.supplies.filter((t) => t.id !== supply.id);
            console.log(response);
          });
      });
      this.deleteSuppliesDialog = false;
    },
  },
};
</script>

<style scoped>
.supply-table .supplies{
  padding-left: 25px;
  padding-right: 25px;
}
.supply-table .supplies-toolbar{
  padding-bottom: -5px;
  margin: 0;

}
</style>