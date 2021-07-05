<template>
  <div @click="setPage(page)">
    {{ page }}
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props:{
    page:{
      type:Number
    }
  },

  methods: {
    ...mapMutations([
        'setPage',
    ]),

  },
}
</script>

<style scoped>

</style>