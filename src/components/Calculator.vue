<template>
  <div>
    Калькулятор
    <input type="number" v-model.number.trim.lazy="operand1" name="operand1">
    <input type="number" v-model.number.trim.lazy="operand2" name="operand2">
    <p> = {{ result }}</p>
    <button v-for="operation in operations" :key="operation" @click="calculate(operation)" :name="operation">{{ operation }}</button>
    <p v-if="error !== ''">{{ error }}</p>
    <label class="check"><input type="checkbox" name="keyboardBox" v-model="keyboardOn" @click="keyboardOn=!keyboardOn">Показать экранную клавиатуру(нажми на
      чекбокс)</label>
    <div v-show="keyboardOn">
      <button v-for="key in keyNumber" :key="key" @click="keyNumberOn(key)" :name="key">{{ key }}</button>
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
      if (key !== '<<') {
        this[`${this.picked}`]  += `${key}`
      } else {
        this[`${this.picked}`]= this[`${this.picked}`].toString().slice(0, -1)
      }
      this[`${this.picked}`]=Number(this[`${this.picked}`])
    },
  }
}
</script>


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