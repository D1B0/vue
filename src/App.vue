<template>
  <div id="Payment">
    <h1>My personal cost</h1>
<transition name="fade">
    <ModalWindow
        class="modal"
        v-if="modalName"
        :settings="settings"/>
</transition>
    <button class="btn" @click="openAddPayment">
      <p>Add New Cost +</p></button>
    <PaymentDisplay/>
    <Pagination/>
    <Calculator/>
  </div>

</template>

<script>


import PaymentDisplay from "./components/PaymentDisplay";

import Pagination from "./components/Pagination";
import {mapActions} from 'vuex'
import ModalWindow from "./components/ModalWindow";
import Calculator from "@/components/Calculator";

export default {
  name: 'App',
  components: {
    Pagination,
    PaymentDisplay,
    ModalWindow,
    Calculator
  },
  data() {
    return {
      visibleAddPayment: false,
      modalName: '',
      settings:{}
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),

    openAddPayment() {
      this.$modal.hide()
      this.$modal.show('Add Payment', {header: 'Add Payment', compName: 'AddPayment'})
      this.modalName = 'Add Payment'


    },

    onShow(settings) {
      this.modalName = this.settings.name
      this.settings = settings
    },
    onHide() {
      this.modalName = ''
      this.settings = {}
    }
  },
  created() {
    this.fetchData()
  },
 mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },



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


.modal {
  position: absolute;
  top: 150px;
  right: 50vw;
}
</style>
<style lang="scss">
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.3s ;
}
.fade-enter, .fade-leave{
  opacity: 0;
}
</style>
