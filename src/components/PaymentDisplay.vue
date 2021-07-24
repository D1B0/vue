<template>
  <v-container class="flex 0 0">
    <v-row>

      <v-col cols="1">#</v-col>
      <v-col cols="2">Date</v-col>
      <v-col cols="2">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1"></v-col>

    </v-row>
    <v-row v-for="payment in $store.getters.getPaymentList[`page${$store.getters.getPage}`]"
           :key='payment.id'
    >
      <PaymentInfo :payment="payment"
      />
    </v-row>
  </v-container>
</template>

<script>

import PaymentInfo from "./PaymentInfo";

export default {
  name: "PaymentDisplay",
  components: {PaymentInfo},


}
</script>
