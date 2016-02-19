var calculator = function(operator, num1, num2) {
  if(typeof num1 === "number" && typeof num2 === "number" && num1 && num2) {
    if(operator === "add") {
      return num1 + num2;
    } else if(operator === "subtract") {
      return num1 - num2;
    } else if(operator === "divide") {
      return num1/num2;
    } else if(operator === "multiply") {
      return num1 * num2;
    } else {
      return "Please check your URI and try again.";
    }
  } else {
    return "Please check your URI and try again";
  }
}

module.exports = {
  calculator: calculator
}