<template>
  <form class="form">
    <input placeholder="Date" type="date" v-model="date">
    <input placeholder="Category" type="text" v-model="category">
    <input placeholder="Value" type="number" v-model="value">
    <button class="btn__payment" type="button" @click="onClick">Send Payment</button>

  </form>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      category: '',
      value: ''
    }
  },
  methods: {
    takeDateNow() {
      const today = new Date()
      const d = ("0" + today.getDate()).slice(-2)
      const m = ('0'+(today.getMonth() + 1)).slice(-2)
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    onClick() {
      const {value, category} = this
      const data = {
        date: this.date || this.takeDateNow(),
        category,
        value,
      }
      this.$emit('addNewPayment', data)
    }
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

input {
  padding-left: 25px;
  box-sizing: border-box;
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
  height: 40px;
  border: 1px solid lightblue;
}

.btn__payment {
  width: 100px;
  height: 40px;
  color: white;
  background: aqua;
  border: none;
  margin-top: 10px;
  border-radius: 20px;
}
</style>