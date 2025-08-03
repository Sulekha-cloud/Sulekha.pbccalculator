function display(value) {
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function backspace() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

function calculate() {
  let resultBox = document.getElementById("result");
  try {
    resultBox.value = eval(resultBox.value);
  } catch (e) {
    alert("Invalid Expression");
  }
}

