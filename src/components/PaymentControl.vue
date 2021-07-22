<template>

  <v-container class="pt-8 pb-3 pl-4 pr-4"

               white>
    <v-row>
      <v-btn
          class="mb-4"
          elevation="3"
          v-show="!editOpen"
          @click="openEdit(payment)"
      >Edit
      </v-btn>
    </v-row>

    <v-row v-if="editOpen"
    >
      <div>
        <v-text-field
            label="Date"
            required
            v-model="changeDate"

        >
        </v-text-field>


        <v-select
            :items="$store.getters.getCategories"
            label="Category"
            v-model="changeCategory"
            required
        >
        </v-select>


        <v-text-field
            label="Value"
            required
            v-model="changeValue"
        >
        </v-text-field>

        <v-btn
            class="mr-5 mb-4"
            elevation="3"
            @click="editPayment(payment)"
        >Send Edit
        </v-btn>
      </div>
    </v-row>
    <v-row>
      <v-btn
          class="mr-5 mb-5"
          elevation="3"
          @click="deletePayment"
      >Delete
      </v-btn>
    </v-row>

  </v-container>
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
    openEdit(payment) {
      this.editOpen = !this.editOpen
      this.changeCategory = payment.category
      this.changeDate = payment.date
      this.changeValue = payment.value

    },
    editPayment(payment) {
      let data = {
        id: payment.id,
        date: this.changeDate,
        category: this.changeCategory,
        value: this.changeValue
      }
      this.setEditPayment(data)
    },
    deletePayment() {
      this.setDeletePayment({id: this.payment.id})
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