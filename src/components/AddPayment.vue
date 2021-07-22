<template>
  <v-container class="pa-8">
    <v-row><v-btn class="mb-5"
        @click="fastAddPayment('Food',200)">Food=200
    </v-btn></v-row>
    <v-row><v-btn class="mb-5"  @click="fastAddPayment('Navigation',50)">
      Navigation=50
    </v-btn>
    </v-row>
    <v-row><v-btn class="mb-5"  @click="fastAddPayment('Entertainment',2000)">
      Entertainment=2000
    </v-btn></v-row>
    <v-row>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            label="Date"
            v-model="date"
            required
        >Date
        </v-text-field>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-select
            :items="$store.getters.getCategories"
            label="Category"
            v-model="category"
            required
        >Category
        </v-select>
      </v-col>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            label="Value"
            required
            v-model="value"
        >Value
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
          class="mr-5"
          elevation="7"
          @click="onClick"
      >Send Payment
      </v-btn>
      <v-btn
          class="ml-6"
          elevation="7"
          @click="showMenu=!showMenu"
      >Add new category
      </v-btn>
    </v-row>
    <v-row class="mt-10" v-if="showMenu" >
      <v-text-field
          label="New Category"
          required
          v-model="newCategory"
          class="mr-4"
      ></v-text-field>
      <v-btn
          elevation="7"
          @click="addCategories"
      >Add new category
      </v-btn>
    </v-row>

  </v-container>


</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {

  data() {
    return {
      date: '',
      category: '',
      value: '',
      error: '',
      newCategory: '',
      showMenu: false
    }
  },
  methods: {
    ...mapMutations([
      'setAddPayment',
      'setPages',
      'setCategories',
    ]),
    ...mapGetters([
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
    fastAddPayment(category, value) {
      this.$router.push(`/add/payment/${category}?value=${value}&time=${new Date().getTime()}`)

    },
  },
  watch: {
    $route() {
      this.category = this.$route.params['category']
      this.value = this.$route.query['value']
      this.date = this.takeDateNow()
      this.onClick()


    }
  },
}
</script>
