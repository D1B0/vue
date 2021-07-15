<template>
  <div class="payment">
    <div class="index">{{ payment.id }}</div>
    <div class="date">{{ payment.date }}</div>
    <div class="category">{{ payment.category }}</div>
    <div class="value">{{ payment.value }}</div>

    <button class="showModal" @click="openControl">
      &#8285;</button>
    <transition name="fade">
    <ModalWindow
        class="modal-control"
        v-if="modalName"
        :settings="settings"
        :payment="payment"/>
    </transition>
  </div>
</template>

<script>
import ModalWindow from "./ModalWindow";

export default {
  components: {
    ModalWindow
  },
  props: {
    payment: {
      type: Object,
      required: true
    },

  },
  data() {
    return {
      modalName: '',
      settings: {}
    }
  },
  methods: {
    openControl() {
      this.$modal.hide()
      this.$modal.show('Payment Control', {header: 'Payment Control', compName: 'PaymentControl'})
      this.modalName = 'Payment Control'
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
  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.payment {
  position: relative;
  display: flex;
  width: 380px;
  height: 30px;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  justify-content: center;
}

.index {
  width: 30px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.date {
  width: 100px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category {
  width: 100px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value {
  width: 50px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-control {
  position: absolute;
  z-index: 2;
  top: 5px;
  right: 95px;

}
.showModal{
  font-size: 10px;
  width: 40px;
  height: 20px;
}
</style>