<template>
  <div id="Payment">
    <h1>My personal cost</h1>
    <AddPayment v-if="visibleAddPayment" @addNewPayment="addPayment"/>
    <button class="btn" v-if="visibleAddPayment===false" @click="openAddPayment">Add New Cost +</button>
    <button class="btn" v-else @click="openAddPayment">Close Add New</button>
    <PaymentDisplay :items="paymentList"
                    :page="page"
                    :limit="limit"/>
    <div class="pagination">
      <div class="arrow"
      @click="beforeButton">
        &#60;
      </div>
      <Pages class="pages" v-for="page in pages " :key="page" :page="page" @changePage="setPage"/>
      <div class="arrow"
      @click="afterButton">

        &#62;
      </div>
    </div>

  </div>
</template>

<script>


import PaymentDisplay from "./components/PaymentDisplay";
import AddPayment from "./components/AddPayment";
import Pages from "./components/Pages";

export default {
  name: 'App',
  components: {
    Pages,
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
    beforeButton(){
      if(this.page === 1){
        return false
      }else{
        this.page--
      }
    },
    afterButton(){
      if(this.page === this.pages){
        return false
      }else{
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
.pagination{
  display: flex;
  margin-top:50px;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;

}
.pages{
  margin: 0 10px 0 10px
}
.arrow{
  margin: 0 10px 0 10px
}
.arrow:hover , .pages:hover{
  color: red;

  cursor: pointer;
}
</style>
