<template>
  <div id="Payment">
    <h1>My personal cost</h1>
    <AddPayment v-if="visibleAddPayment" @addNewPayment="addPayment"/>
    <button class="btn" v-if="visibleAddPayment===false" @click="openAddPayment">Add New Cost +</button>
    <button class="btn" v-else @click="openAddPayment">Close Add New</button>
    <PaymentDisplay :items="paymentList"
                    :page="page"
                    :limit="limit"/>
    <Pagination
        :pages="pages"
        :page="page"
        @afterBtn="afterButton"
        @beforeBtn="beforeButton"
        @setPages="setPage"
    />

  </div>
</template>

<script>


import PaymentDisplay from "./components/PaymentDisplay";
import AddPayment from "./components/AddPayment";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
  components: {
    Pagination,
    AddPayment,
    PaymentDisplay
  },
  data() {
    return {
      paymentList: [],
      visibleAddPayment: false,
      pages: 1,
      limit: 5,
      page: 1
    }
  },
  methods: {
    addPayment(data) {
      this.paymentList.push(data)
    },
    openAddPayment() {
      this.visibleAddPayment = !this.visibleAddPayment
    },
    fetchData() {
      return [
        {
          date: '01.07.2021',
          category: 'Food',
          value: 500
        },
        {
          date: '01.07.2021',
          category: 'Transport',
          value: 650
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
        {
          date: '01.07.2021',
          category: 'Jacket',
          value: 800
        },
      ]
    },
    setPage(page) {
      this.page = page
    },
    beforeButton() {
      if (this.page === 1) {
        return false
      } else {
        this.page--
      }
    },
    afterButton() {
      if (this.page === this.pages) {
        return false
      } else {
        this.page++
      }
    }
  },
  created() {
    this.paymentList = this.fetchData()
    this.pages = Math.ceil((this.paymentList.length / this.limit))
  },
  updated() {
    this.pages = Math.ceil((this.paymentList.length / this.limit))
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
}


</style>
