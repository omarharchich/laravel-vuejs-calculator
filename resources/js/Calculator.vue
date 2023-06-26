<template>
  <div class="container">
    <div class="calculator">
      <div class="result">
        <div class="screen-wrapper">
          <div class="final-result">
            {{ result }}
          </div>
          <div class="current-operation">
            {{ expression }}
          </div>
        </div>
        <button class="clear" @click="clear">C</button>
      </div>
      <div class="numbers">
        <button
          v-for="number in numbers"
          :key="number"
          @click="updateExpression(number.toString())"
        >
          {{ number }}
        </button>
      </div>
      <div class="operators">
        <button
          v-for="operator in operators"
          :key="operator"
          @click="updateExpression(operator)"
        >
          {{ operator }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expression: "",
      result: "",
    };
  },
  computed: {
    numbers() {
      return [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];
    },
    operators() {
      return ["+", "-", "*", "/"];
    },
  },
  methods: {
    updateExpression(value) {
      if (value === "=") {
        this.calculate();
      } else {
        this.expression += value;
      }
    },
    calculate() {
      try {
        this.result = eval(this.expression);
        this.expression = this.result;
      } catch (error) {
        this.result = "Syntax Error !!!";
      }
    },
    clear() {
      this.expression = "";
      this.result = "";
    },
  },
};
</script>
<style scoped>
.container {
  background-color: #fff;
  box-shadow: 0 25px 100px rgba(0, 0, 0, 0.25);
  width: 18rem;
  border-radius: 4px;
}

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.result {
  grid-area: 1 / 1 / 2 / 5;
  display: grid;
  grid-template-columns: 75% 25%;
}

.screen-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.625rem;
  text-align: right;
  padding-inline: 4px;
}

.final-result {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff0000;
}

.current-operation {
  font-size: 1.25rem;
}

.numbers {
  grid-area: 2 / 1 / 6 / 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.numbers button:nth-child(10) {
  border-bottom-left-radius: 4px;
}

.operators {
  grid-area: 2 / 4 / 6 / 5;
  display: grid;
}
.operators button {
  background-color: #8d969b;
}
.operators button:last-child {
  border-bottom-right-radius: 4px;
}

button::hover {
  border-color: #000;
}

button {
  width: 100%;
  aspect-ratio: 1 / 1;
  font-size: 1.25rem;
  font-weight: 700;
  transition: border-color 0.3s ease;
}

button.clear {
  background-color: #ff0000;
  color: white;
  font-size: 2rem;
  border-top-right-radius: 4px;
}
</style>