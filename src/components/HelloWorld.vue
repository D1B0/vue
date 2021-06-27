<template>
  <div>
    Калькулятор
    <input type="number" v-model.number.trim.lazy="operand1">
    <input type="number" v-model.number.trim.lazy="operand2">
    <p> = {{ result }}</p>
    <button v-for="operation in operations" :key="operation" @click="calculate(operation)">{{ operation }}</button>
    <p v-if="error !== ''">{{ error }}</p>
    <label class="check"><input type="checkbox" v-model="keyboardOn">Показать экранную клавиатуру(нажми на
      чекбокс)</label>
    <div v-if="keyboardOn">
      <button v-for="key in keyNumber" :key="key" @click="keyNumberOn(key)">{{ key }}</button>
    </div>

    <input type="radio" id="one" name="operandsChoose" value="operand1" v-model="picked" checked>
    <label for="one">operand 1</label>
    <input type="radio" id="two" name="operandsChoose" value="operand2" v-model="picked">
    <label for="two">operand 2</label>

  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 'operand1',
      keyboardOn: false,
      operand1:0,
      operand2: 0,
      operandNumber:'',
      result: 0,
      operations: ['+', '-', '*', '/', '^', '//'],
      keyNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '<<'],
      error: ''
    }
  },
  methods: {
    calculate(operation) {
      this.error = ''
      switch (operation) {
        case '+':
          this.summary()
          break;
        case '-':
          this.diff()
          break;
        case '*':
          this.multiple()
          break;
        case '/':
          if (this.operand2 === 0) {
            this.error = 'Нельзя делить на 0'
          } else {
            this.division()
          }
          break;
        case '^':
          this.degree()
          break;
        case '//':
          if (this.operand2 === 0) {
            this.error = 'Нельзя делить на 0'
          } else {
            this.divInt()
          }
          break;
      }
    },
    summary() {
      this.result = this.operand1 + this.operand2
    },
    diff() {
      this.result = this.operand1 - this.operand2
    },
    multiple() {
      this.result = this.operand1 * this.operand2
    },
    division() {

      this.result = this.operand1 / this.operand2

    },
    degree() {
      this.result = Math.pow(this.operand1, this.operand2)
    },
    divInt() {
      this.result = Math.floor(this.operand1 / this.operand2)

    },
    keyNumberOn(key) {
      if (this.picked === 'operand1') {
        if (key !== '<<') {
          this.operand1 += `${key}`
        } else {
          this.operand1 = this.operand1.toString().slice(0, -1)
        }
        this.operand1=Number(this.operand1)
      } else {
        if (key !== '<<') {
          this.operand2 += `${key}`
        } else {
          this.operand2 = this.operand2.toString().slice(0, -1)
        }
        this.operand2=Number(this.operand2)
      }


    },

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
