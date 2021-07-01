<template>
  <div class="payment">
    <div class="index">{{ (page-1)*limit + (idx+1)}}</div>
    <div class="date">{{ payment.date }}</div>
    <div class="category">{{ payment.category }}</div>
    <div class="value">{{ payment.value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Object,
      required: true
    },
    page:{
      type:Number,
      default:1
    },
    idx:{
      type:Number,

    },
    limit:{
      type:Number,

    }

  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.payment {
  display: flex;
  width: 300px;
  height: 30px;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  justify-content: center;
}

.index {
  width: 30px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.date {
  width: 100px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category {
  width: 100px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value {
  width: 50px;
  font-family: Arial,sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>