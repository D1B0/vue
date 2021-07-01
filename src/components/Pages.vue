<template>
  <div @click="pageNow(page)">
    {{ page }}
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
    }
  },
  methods: {
    pageNow(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style scoped>

</style>