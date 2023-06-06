<template>
    <div class="product-table  p-d-flex">

        <div class="products-toolbar p-d-flex p-ai-center">
            <pv-toolbar class="mb-4 p-jc-between">
                <template #start>
                    <pv-button label="Add" icon="pi pi-plus" class="p-button-success mr-2" style="background-color: salmon" @click="openNew"/>
                    <pv-button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length"/>
                </template>
                <template #end>
                    <pv-button label="Export" icon="pi pi-download" class="p-button-help" style="background-color: salmon" @click="exportToCSV($event)"/>
                </template>
            </pv-toolbar>
        </div>

        <div class="products p-d-flex p-ai-center">
            <pv-data-table
                    ref="dt"
                    :value="products"
                    v-model:selection="selectedProducts"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Products"
                    responsiveLayout="scroll"
            >
                <template #header>
                    <div class="table-header flex flex-column md:flex-row md:justify-content-between">
                        <h5 class="mb-2 md:m-0 p-as-md-center text-xl">List of products</h5>
                        <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <pv-input-text v-model="filters['global'].value" placeholder="Search" />
            </span>
                    </div>
                </template>
                <pv-column selectionMode="multiple" style="width: 3rem; background-color: #f9beb1" :exportable="false"></pv-column>
                <pv-column field="id" header="Id" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="name" header="Name" :sortable="true" style="min-width: 8rem;background-color: #f9beb1"></pv-column>
                <pv-column field="category" header="Category" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="price" header="Price" :sortable="true" style="min-width: 8rem; background-color: #f9beb1"></pv-column>
                <pv-column field="unit" header="Unit" :sortable="true" style="min-width: 8rem"></pv-column>
                <pv-column field="quantity" header="Quantity" :sortable="true" style="min-width: 8rem;background-color: #f9beb1"></pv-column>
                <pv-column header="Photo">
                    <template #body="{photoUrl}">
                        <img :src="photoUrl" style="width: 100%; height: auto; min-width: 8rem">
                    </template>
                </pv-column>
                <pv-column :exportable="false" style="min-width: 8rem;background-color: #f9beb1">
                    <template #body="slotProps" >
                        <pv-button label="Edit" raised icon="pi pi-pencil" class="p-button-rounded" @click="editProduct(slotProps.data)"/> &nbsp;
                        <pv-button label="Delete" raised icon="pi pi-trash" class="p-button-rounded" style="background-color: #b00020" @click="confirmDeleteProduct(slotProps.data)"/>
                    </template>
                </pv-column>
            </pv-data-table>
        </div>

    </div>

    <pv-dialog
            v-model:visible="productDialog"
            :style="{ width: '450px' }"
            header="Product Information"
            :modal="true"
            class="p-fluid"
    >
        <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
                  type="text"
                  id="name"
                  v-model.trim="product.name"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !product.name }"
          />
          <label for="name">Name</label>
          <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
        </span>
        </div>

        <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
              type="text"
              id="category"
              v-model.trim="product.category"
              required="true"
              autofocus
              :class="{ 'p-invalid': submitted && !product.category }"
          />
          <label for="category">Category</label>
          <small class="p-error" v-if="submitted && !product.category">Category is required.</small>
        </span>
        </div>

        <div class="field">
        <span class="p-float-label">
          <pv-input-text
              type="text"
              id="price"
              v-model="product.price"
              required="true"
              autofocus
              :class="{'p-invalid': submitted && !product.price}"
          />
          <label for="price">Price</label>
          <small class="p-error" v-if="submitted && !product.price">
            Price is required.
          </small>
        </span>
        </div>

        <div class="field">
        <span class="p-float-label">
          <pv-input-text
                  type="text"
                  id="unit"
                  v-model="product.unit"
                  required="true"
                  autofocus
                  :class="{'p-invalid': submitted && !product.unit}"
          />
          <label for="unit">Unit</label>
          <small class="p-error" v-if="submitted && !product.unit">
            Unit is required.
          </small>
        </span>
        </div>

        <div class="field">
        <span class="p-float-label">
          <pv-input-text
                  type="number"
                  id="quantity"
                  v-model="product.quantity"
                  required="true"
                  autofocus
                  :class="{'p-invalid': submitted && !product.quantity}"
          />
          <label for="quantity">Quantity</label>
          <small class="p-error" v-if="submitted && !product.quantity">Quantity is required.</small>
        </span>
        </div>

        <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
                  type="text"
                  id="photoUrl"
                  v-model.trim="product.photoUrl"
                  required="true"
                  autofocus
                  :class="{ 'p-invalid': submitted && !product.photoUrl }"
          />
          <label for="photoUrl">Photo</label>
          <small class="p-error" v-if="submitted && !product.photoUrl">Photo is required.</small>
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
                    @click="saveProduct"
            />
        </template>
    </pv-dialog>


  <!--Delete Supply Dialog-->
    <pv-dialog
            v-model:visible="deleteProductDialog"
            :style="{ width: '450px' }"
            header="Confirm"
            :modal="true"
    >
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="product">Are you sure you want to delete <b>{{ product.title }}</b>?</span>
        </div>
        <template #footer>
            <pv-button
                    :label="'No'.toUpperCase()"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="deleteProductDialog = false"
            />
            <pv-button
                    :label="'Yes'.toUpperCase()"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="deleteProduct"
            />
        </template>
    </pv-dialog>

  <!--Delete Selected Supplies Dialog-->
    <pv-dialog
            v-model:visible="deleteProductsDialog"
            :style="{ width: '450px' }"
            header="Confirm"
            :modal="true"
    >
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="product">
      Are you sure you want to delete the selected products?
    </span>
        </div>
        <template #footer>
            <pv-button
                    :label="'No'.toUpperCase()"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="deleteProductsDialog = false"
            />
            <pv-button
                    :label="'Yes'.toUpperCase()"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="deleteSelectedProducts"
            />
        </template>
    </pv-dialog>

</template>

<script>
import { FilterMatchMode } from "primevue/api";
import {ProductsApiService} from "@/services/products-api.service";


export default {
    name: 'product-list.component.vue',
    data() {
        return {

            units: [
                { label: 'Kilogramo', value: 'kg' },
                { label: 'Gramo', value: 'g' },
                { label: 'Unidad', value: 'u' },
            ],
            products: [],
            filters: {},
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: {},
            selectedProducts: [],
            submitted: false,
            productService: new ProductsApiService(),
        };
    },
    created() {
        this.initFilters();
        this.loadProducts();
    },
    methods: {
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            };
        },
        loadProducts() {
            this.productService.getAll().then(response => {
                this.products = response.data;
            }).catch(error => {
                console.log(error);
            });
        },
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },
        findIndexById(id) {
            console.log(`current id: ${id}`);
            return this.products.findIndex((supply) => supply.id === id);
        },
        saveProduct() {
            this.submitted = true;
            if (this.product.name.trim() && this.product.category.trim() && this.product.price.trim() && this.product.unit.trim() && this.product.quantity.trim() && this.product.photoUrl.trim()) {
                if (this.product.id) {
                    console.log(this.product);
                    this.productService
                        .update(this.product.id, this.product)
                        .then((response) => {
                            console.log(response.data.id);
                            this.products[this.findIndexById(response.data.id)] = response.data;
                            this.$toast.add({
                                severity: "success",
                                summary: "Successful",
                                detail: "Product Updated",
                                life: 3000,
                            });
                            console.log(response);
                        });
                } else {
                    this.product.id = 0;
                    console.log(this.product);
                    this.productService
                        .create(this.product)
                        .then((response) => {
                            this.products.push(response.data);
                            this.$toast.add({
                                severity: "success",
                                summary: "Successful",
                                detail: "Product Created",
                                life: 3000,
                            });
                            console.log(response);
                        });
                }
                this.productDialog = false;
                this.product = {};
            }
        },
        editProduct(product) {
            console.log(product);
            this.product = { ...product };
            console.log(this.product);
            this.productDialog = true;
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            this.productService.delete(this.product.id).then((response) => {
                this.products = this.products.filter(
                    (t) => t.id !== this.product.id
                );
                this.deleteProductDialog = false;
                this.product = {};
                this.$toast.add({
                    severity: "success",
                    summary: "Successful",
                    detail: "Product Deleted",
                    life: 3000,
                });
                console.log(response);
            });
        },
        exportToCSV() {
            this.$refs.dt.exportCSV();
        },
        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
        deleteSelectedProducts() {
            this.selectedProducts.forEach((product) => {
                this.productService.delete(product.id)
                    .then((response) => {
                        this.products = this.products.filter((t) => t.id !== product.id);
                        console.log(response);
                    });
            });
            this.deleteProductsDialog = false;
        },
    },
};
</script>

<style scoped>
.product-table .products{
    padding-left: 25px;
    padding-right: 25px;
}
.product-table .products-toolbar{
    padding-bottom: -5px;
    margin: 0;

}
</style>