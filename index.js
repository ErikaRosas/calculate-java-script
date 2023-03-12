function validateValues(value1, value2) {
  return (value1 === 0) | (value2 === 0);
}

function calculate(operation, valor1, valor2) {
  let response = 0;
  switch (operation) {
    case "suma":
      response = valor1 + valor2;
      break;
    case "resta":
      response = valor1 - valor2;
      break;
    case "division":
      response = valor1 / valor2;
      break;
    case "multiplicacion":
      response = valor1 * valor2;
      break;
    default:
      response = 0;
  }

  return response;
}
function getValue(value) {
  return value !== "" ? value : 0;
}
function generateCalculate() {
  let num1 = parseFloat(getValue(document.getElementById("num1").value));
  let num2 = parseFloat(getValue(document.getElementById("num2").value));
  let operation = document.getElementById("operation").value;
  let response = document.getElementById("response");
  if (validateValues(num1, num2)) {
    response.innerHTML = "";
    alert("Opss" + "\n" + "Hay algún 0 o falta algún valor");
  } else {
    response.innerHTML = calculate(operation, num1, num2);
  }
}
