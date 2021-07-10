<template>

  <form class="form">

    <input placeholder="Date" type="text" v-model="date">
    <select class category v-model="category">
      <option v-for="(categories,idx) in $store.getters.getCategories" :key="idx">{{ categories }}</option>
    </select>
    <input placeholder="Value" type="number" v-model="value" required>
    <button class="btn__payment" type="button" @click="onClick">Send Payment</button>
    <button class="btn__payment" type="button" @click="openFormCategory">Add new category</button>
    <div v-show="addNewCategory" class="category__new">
      <input placeholder="Category" type="text" v-model="newCategory" required>
      <button class="btn__category" type="button" @click="addCategories">Add categories</button>

    </div>

    <p>{{ error }}</p>
  </form>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {

  data() {
    return {
      date: '',
      category: this.$route.params['category'],
      value: this.$route.query["value"],
      error: '',
      newCategory: '',
      addNewCategory: false
    }
  },
  methods: {
    ...mapMutations([
      'setAddPayment',
      'setPages',
      'setCategories',
      'setAddPaymentVisible'
    ]),
    ...mapGetters([
      'getPages',
      'getPaymentList'
    ]),
    takeDateNow() {
      const today = new Date()
      const d = ("0" + today.getDate()).slice(-2)
      const m = ('0' + (today.getMonth() + 1)).slice(-2)
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },

    onClick() {
      // let pageN = this.getPages()
      // let pageLength = this.getPaymentList()[`page${pageN}`].length + 1
      // let id = (this.getPages() - 1) * 5 + pageLength
      this.error = ''
      const {value, category} = this
      if (value === '' || category === '') {
        return this.error = 'Вы не ввели ничего в поля category или value'
      }
      const data = {
        // id: ,
        date: this.date || this.takeDateNow(),
        category,
        value,
      }
      this.setAddPayment(data)
    },
    addCategories() {
      this.setCategories(this.newCategory)
    },
    openFormCategory() {
      this.addNewCategory = !this.addNewCategory
    },
  },
  watch: {
    $route() {
      if (this.$route.params['category']===undefined|| this.$route.query['value']===undefined){
        this.date = this.takeDateNow()
      }else{
        this.category = this.$route.params['category']
        this.value = this.$route.query['value']
        this.date = this.takeDateNow()
        this.onClick()
      }

    }
  },created() {
    if((this.$route.params['category']===undefined || this.$route.query['value']===undefined) && this.$route.path !== '/'){
      this.setAddPaymentVisible()
    }
  }
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

select {
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

.btn__category {
  width: 100px;
  height: 40px;
  color: white;
  background: aqua;
  border: none;
  border-radius: 20px;
  margin-top: 5px;
}

.category__new {
  display: flex;
  flex-direction: column;
}


</style>