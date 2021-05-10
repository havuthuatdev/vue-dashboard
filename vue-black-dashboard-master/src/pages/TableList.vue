<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>

      <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <base-table :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                         :columns="table2.columns">

            </base-table>
          </div>
        </card>
      </div>

    </div>
</template>
<script>
import { BaseTable } from "@/components";
const tableColumns = ["username", "Phone", "Address", "Email"];
const tableData = [
  // {
  //   id: 1,
  //   username: "thuat",
  //   email: "Thuat@gmail.com",
  //   phone: "00000000001",
  //   address: "101B lee huu trac",
  // },
  // {
  //   id: 2,
  //   name: "Minerva Hooper",
  //   salary: "$23,789",
  //   country: "Curaçao",
  //   city: "Sinaai-Waas"
  // },
  // {
  //   id: 3,
  //   name: "Sage Rodriguez",
  //   salary: "$56,142",
  //   country: "Netherlands",
  //   city: "Baileux"
  // },
  // {
  //   id: 4,
  //   name: "Philip Chaney",
  //   salary: "$38,735",
  //   country: "Korea, South",
  //   city: "Overland Park"
  // },
  // {
  //   id: 5,
  //   name: "Doris Greene",
  //   salary: "$63,542",
  //   country: "Malawi",
  //   city: "Feldkirchen in Kärnten"
  // },

];

export default {
  components: {
    BaseTable
  },
  // mounted(){
  //   this.tableData = this.$store.state.customers.customer;
  //   console.log(this.tableData);
  // },
  computed:{
    getCustomer(){
      return this.$store.state.customers.customer;
    }
  },
  data() {
    return {
      table1: {
        title: "Simple Table",
        columns: [...tableColumns],
        data: this.$store.state.customers.customer
      },
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: this.$store.state.customers.customer
      }
    };
  }
};
</script>
<style>
</style>
