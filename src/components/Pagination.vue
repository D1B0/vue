<template>
  <div class="pagination">
    <div class="arrow"
         @click="beforeBtn">
      &#60;
    </div>
    <Pages class="pages" v-for="page in $store.getters.getPages " :key="page" :page="page"/>
    <div class="arrow"
         @click="afterBtn">

      &#62;
    </div>
  </div>
</template>

<script>
import Pages from "./Pages";

export default {
  components: {
    Pages
  },
  methods: {


    beforeBtn() {
      this.$emit('beforeBtn')
    },
    afterBtn() {
      this.$emit('afterBtn')
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: 50px;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;

}

.pages {
  margin: 0 10px 0 10px
}

.arrow {
  margin: 0 10px 0 10px
}

.arrow:hover, .pages:hover {
  color: red;

  cursor: pointer;
}
</style>