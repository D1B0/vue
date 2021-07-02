<template>
  <div class="pagination">
    <div class="arrow"
         @click="beforeBtn">
      &#60;
    </div>
    <Pages class="pages" v-for="page in pages " :key="page" :page="page" @changePage="setPages"/>
    <div class="arrow"
         @click="afterBtn">

      &#62;
    </div>
  </div>
</template>

<script>
import Pages from "./Pages";

export default {
  components:{
    Pages
  },
  props: {
    pages: {
      type: Number
    },
    page:{
      type:Number
    }
  },
  methods: {
    beforeBtn() {
      this.$emit('beforeBtn')
    },
    afterBtn() {
      this.$emit('afterBtn')
    },
    setPages(page){
      this.$emit('setPages', page)
    }
  }
}
</script>

<style scoped>

</style>