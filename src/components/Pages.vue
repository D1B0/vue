<template>
  <div @click="setCurrentPage(page)"
 >
    {{ page }}
  </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
export default {
  props:{
    page:{
      type:Number
    }
  },

  methods: {
    ...mapActions([
        "fetchData"
    ]),
    ...mapMutations([
        'setPage'
    ]),
    setCurrentPage(page){
      this.setPage(page)
      this.fetchData(page)
    }

  },
}
</script>

<style scoped>

</style>