<template>
  <div class="modal-box">
    <div class="header">{{ settings.name }}</div>
    <div class="content">
      <component :is="settings.settings.compName" :payment="payment"/>
    </div>
    <div v-if="settings.name === 'Add Payment'" class="footer"  @click="closeModal">
      Close
    </div>
    <div v-if="settings.name === 'Payment Control'" class="footer_control" @click="closeModal">Close</div>
  </div>
</template>

<script>
import AddPayment from "./AddPayment";
import PaymentControl from "./PaymentControl";

export default {
  props: {
    settings: {
      type: Object
    },
    payment:{
      type:Object
    }
  },
  name: "ModalWindow",
  components: {
    AddPayment,
    PaymentControl
  },
  methods: {
closeModal(){
  this.$modal.hide()
}
  },
}
</script>

<style scoped>
.modal-box {
  border: 1px solid black;
  background: white;

}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border: 1px solid blue;
  color: white;
  background: blue;
  border-radius: 30px;

}

.footer:hover {
  cursor: pointer;
  background: darkblue;
}
.footer_control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  border: 1px solid blue;
  color: white;
  background: blue;
  border-radius: 30px;

}

.footer_control:hover {
  cursor: pointer;
  background: darkblue;
}
</style>