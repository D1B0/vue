<template>
  <div class="payments">
    <div class="table">
      <div class="index">#</div>
      <div class="date">Date</div>
      <div class="category">Category</div>
      <div class="value">Value</div>
    </div>
    <PaymentInfo v-for="(payment,idx) in paymentList.slice((page-1)*5,(page-1)*5+limit)"
                 :key="idx"
                 :payment="payment"
                 :page="page"
                 :idx="idx"
                 :limit="limit"/>
  </div>
</template>

<script>

import PaymentInfo from "./PaymentInfo";

export default {
  name: "PaymentDisplay",
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      },
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 5
    },
  },
  components: {PaymentInfo},
  data() {
    return {
      paymentList: this.items
    }
  },
  methods: {}
}
</script>

<style scoped>
.payments{
  height: 180px;
}
.table {
  width: 300px;
  height: 30px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
}

.index {
  font-family: Arial, sans-serif;
  font-size: 18px;
  height: 25px;
  width: 30px;

  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.date {
  font-family: Arial, sans-serif;
  font-size: 18px;
  height: 25px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.category {
  font-family: Arial, sans-serif;
  font-size: 18px;
  height: 25px;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.value {
  font-family: Arial, sans-serif;
  font-size: 18px;
  height: 25px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>