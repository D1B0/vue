<template>
  <div class="text-center">
    <v-pagination
        v-model="page"
        :length="$store.getters.getPages"
        @input="getData"
    ></v-pagination>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      page: 1
    }
  },
  components: {},
  methods: {
    ...mapActions([
      'fetchData'
    ]),
    getData() {
      this.fetchData(this.page)
    }
  },

}
</script>
