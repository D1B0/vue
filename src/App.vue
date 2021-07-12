<template>
  <div id="Payment">
    <h1>My personal cost</h1>
    <p class="routine" @click="fastAddPayment('Food',200)">Food=200
    </p>
    <p class="routine" @click="fastAddPayment('Navigation',50)">
      Navigation=50
    </p>
    <p class="routine" @click="fastAddPayment('Entertainment',2000)">
      Entertainment=2000
    </p>
    <AddPayment v-show="$store.getters.getAddPaymentVisible"/>
    <button class="btn" @click="openAddPayment">
      <p v-if="$store.getters.getAddPaymentVisible===false">Add New Cost +</p>
      <p v-else>Close Add New</p></button>
    <PaymentDisplay/>
    <Pagination/>

  </div>
</template>

<script>


import PaymentDisplay from "./components/PaymentDisplay";

import Pagination from "./components/Pagination";
import {mapActions,mapMutations} from 'vuex'
import AddPayment from "./components/AddPayment";

export default {
  name: 'App',
  components: {
    Pagination,
    PaymentDisplay,
    AddPayment
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
    ...mapMutations([
        'setAddPaymentVisible'
    ]),

    openAddPayment() {
      this.setAddPaymentVisible()
    },
    fastAddPayment(category,value){
      if (this.$store.getters.getAddPaymentVisible === false){
      this.setAddPaymentVisible()}
      this.$router.push(`/add/payment/${category}?value=${value}&time=${new Date().getTime()}`)

    }
  },
  created() {
    this.fetchData()
    console.log(this.$route)
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
.routine {
cursor: pointer;

}

</style>
