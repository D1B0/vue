<template>
  <div>
    <button  type="button" @click="openEdit">Edit</button>
    <div v-if="editOpen" class="changes">
      <input type="text" v-model="changeDate">
      <select type="text" v-model="changeCategory">
        <option v-for="(categories,idx) in $store.getters.getCategories" :key="idx">{{ categories }}</option>
      </select>
      <input type="text" v-model="changeValue">
      <button type="button" @click="editPayment">Edit</button>
    </div>
    <button type="button" @click="deletePayment">Delete</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editOpen: false,
      changeCategory: '',
      changeDate: '',
      changeValue: ''
    }
  },
  methods: {
    ...mapMutations([
      'setEditPayment',
        'setDeletePayment'
    ]),
    openEdit() {

      this.changeCategory = this.payment.category
      this.changeDate = this.payment.date
      this.changeValue = this.payment.value
      this.editOpen = !this.editOpen
    },
    editPayment() {
      let data = {
        id: this.payment.id,
        date: this.changeDate,
        category: this.changeCategory,
        value: this.changeValue}
      this.setEditPayment(data)
    },
    deletePayment(){
      this.setDeletePayment({id:this.payment.id})
    }
  },

}
</script>

<style scoped>
.changes {
  display: flex;
  flex-direction: column;
}

</style>