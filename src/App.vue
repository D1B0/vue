<template>
  <v-app>
    <v-row>
      <v-col cols="6">
        <div class="text-h5 text-md-h4 ml-6 pb-4">My personal costs</div>
        <v-dialog
            v-model="dialog"
            max-width="600px"
        >
          <template v-slot:activator="{on}">
            <v-btn
                class="ma-md-4-4 mb-8 ml-6"
                color="teal"
                dark
                v-on="on">
              ADD NEW COST
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <AddPayment/>
          </v-card>

        </v-dialog>

        <PaymentDisplay/>

      </v-col>
      <v-col class="mt-30" cols="4">
        <canvas ref="canvas"></canvas>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <Pagination/>
      </v-col>

    </v-row>
  </v-app>
</template>

<script>
import PaymentDisplay from "./components/PaymentDisplay";
import Pagination from "./components/Pagination";
import {mapActions, mapGetters} from 'vuex'
import AddPayment from "./components/AddPayment";
import {Pie} from 'vue-chartjs'

export default {
  name: 'App',
  extends: Pie,
  components: {
    Pagination,
    PaymentDisplay,
    AddPayment,
  },
  data() {
    return {
      dialog: false,
      payments:[],
      categories:[]
    }
  },
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    ...mapGetters([
      'getAllData',
      'getCategories'
    ]),
    newDiagram(payments,categories){
      this.renderChart({
        labels: categories,
        datasets: [{
          label: 'Payments',
          data: categories.map(c => {
            return payments.reduce((total, r) => {
              if (r.category === c) {
                total += r.value
              }
              return total
            }, 0)
          })
          ,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      })
    }

  },
  async mounted() {
   await this.fetchData()
    this.payments= await this.getAllData()
    this.categories= await this.getCategories()

    this.newDiagram(this.payments,this.categories)
  },


}
</script>




