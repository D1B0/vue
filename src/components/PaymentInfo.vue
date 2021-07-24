<template>

  <v-container>
    <v-row>
      <v-col cols="1">{{ payment.id }}</v-col>
      <v-col cols="2">{{ payment.date }}</v-col>
      <v-col cols="2">{{ payment.category }}</v-col>
      <v-col cols="2">{{ payment.value }}</v-col>
      <v-col cols="1">
        <v-menu
          :offset-x="offset"
           bottom
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on }">
            <v-btn
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <PaymentControl :payment="payment"/>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import PaymentControl from "./PaymentControl";

export default {
  components: {PaymentControl},
  props: {
    payment: {
      type: Object,
      required: true
    },

  },
  data() {
    return {
      offset:true
    }
  },
  methods: {},
  mounted() {
  },
}
</script>
