let hasDecimal = false;
let toCalculate = "";
const toCalculateElement = document.querySelector("#toCalculate");

let answer = "";
const answerElement = document.querySelector("#answer");

const deleteOne = document.querySelector("#delete");
deleteOne.addEventListener("click", () => {
  toCalculate = toCalculate.slice(0, toCalculate.length - 1);
  toCalculateElement.innerHTML = toCalculate;
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    switch (this.innerHTML) {
      case "0":
        changeCalculate(this.innerHTML);
        break;
      case "1":
        changeCalculate(this.innerHTML);
        break;
      case "2":
        changeCalculate(this.innerHTML);
        break;
      case "3":
        changeCalculate(this.innerHTML);
        break;
      case "4":
        changeCalculate(this.innerHTML);
        break;
      case "5":
        changeCalculate(this.innerHTML);
        break;
      case "6":
        changeCalculate(this.innerHTML);
        break;
      case "7":
        changeCalculate(this.innerHTML);
        break;
      case "8":
        changeCalculate(this.innerHTML);
        break;
      case "9":
        changeCalculate(this.innerHTML);
        break;
      case "+":
        addOperator(this.innerHTML);
        break;
      case "-":
        addOperator(this.innerHTML);
        break;
      case "/":
        addOperator(this.innerHTML);
        break;
      case "*":
        addOperator(this.innerHTML);
        break;
      case "%":
        addOperator(this.innerHTML);
        break;
      case "=":
        calculateAnswer(this.innerHTML);
        break;
      case "C":
        clear();
        break;
      case "AC":
        clearAll();
        break;
      case ".":
        addDecimalPoint();
        break;
    }
  });
});

const changeCalculate = (value) => {
  toCalculate += value;
  toCalculateElement.innerHTML = toCalculate;
};

const addOperator = (value) => {
  const lastChar = toCalculate.charAt(toCalculate.length - 1);
  if (
    lastChar !== "+" &&
    lastChar !== "-" &&
    lastChar !== "*" &&
    lastChar !== "/" &&
    lastChar !== "%" &&
    toCalculate
  ) {
    toCalculate += value;
    toCalculateElement.innerHTML = toCalculate;
    hasDecimal = false;
  }
};

const calculateAnswer = () => {
  if (toCalculate) {
    const lastChar = toCalculate.charAt(toCalculate.length - 1);
    if (
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "*" &&
      lastChar !== "/" &&
      lastChar !== "%"
    ) {
      answer = eval(toCalculate);
      answerElement.innerHTML = answer;
    }
  }
};

const clear = () => {
  answer = "0";
  answerElement.innerHTML = answer;
};

const clearAll = () => {
  answer = "0";
  answerElement.innerHTML = answer;
  toCalculate = "";
  toCalculateElement.innerHTML = toCalculate;
  hasDecimal = false;
};

const addDecimalPoint = () => {
  if (!hasDecimal && toCalculate) {
    toCalculate += ".";
    console.log(toCalculate);
    toCalculateElement.innerHTML = toCalculate;
    hasDecimal = true;
  }
};
