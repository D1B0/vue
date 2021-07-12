<template>
  <div id="Payment">
    <h1>My personal cost</h1>
    <AddPayment v-show="visibleAddPayment"/>
    <button class="btn" @click="openAddPayment">
      <p v-if="visibleAddPayment===false">Add New Cost +</p>
      <p v-else>Close Add New</p></button>
    <PaymentDisplay/>
    <Pagination/>

  </div>
</template>

<script>


import PaymentDisplay from "./components/PaymentDisplay";
import AddPayment from "./components/AddPayment";
import Pagination from "./components/Pagination";
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Pagination,
    AddPayment,
    PaymentDisplay
  },
  data() {
    return {
      visibleAddPayment: false,
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),

    openAddPayment() {
      this.visibleAddPayment = !this.visibleAddPayment
    }
  },
  created() {
    this.fetchData()
  }


}
</script>

<style>


.btn {
  margin-top: 5px;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: lightcoral;
  border-radius: 20px;
  border: none;
  margin-bottom: 20px;
}


</style>
