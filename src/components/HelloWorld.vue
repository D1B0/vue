<template>
  <div>
    Калькулятор
    <input type="number" v-model.number.trim="operand1">
    <input type="number" v-model.number.trim="operand2">
    <p> = {{ sum }}</p>
    <button @click="summary">+</button>
    <button @click="diff">-</button>
    <button @click="multiple">*</button>
    <button @click="division">/</button>
    <button @click="degree">^</button>
    <button @click="divInt">%</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      operand1: '',
      operand2: '',
      sum: ''
    }
  },
  methods: {
    summary() {
      this.sum = this.operand1 + this.operand2
      console.log(this.sum)
    },
    diff() {
      this.sum = this.operand1 - this.operand2
    },
    multiple() {
      this.sum = this.operand1 * this.operand2

    },
    division() {
      if (this.operand2 === 0) {
        return false
      } else {
        this.sum = this.operand1 / this.operand2
      }

    },
    degree() {
      this.sum = Math.pow(this.operand1, this.operand2)

    },
    divInt() {
      if (this.operand2 === 0) {
        return false
      } else {
        this.sum = Math.floor(this.operand1 / this.operand2)
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
