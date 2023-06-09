let firstOperand = "";
let secondOperand = "";

let Operator = "";

function calC(Op) {
  switch (Op) {
    case "+":
      return (Number(firstOperand) + Number(secondOperand))
        .toFixed(2)
        .replace(/[.,]00$/, "");
      break;
    case "-":
      return (Number(firstOperand) - Number(secondOperand))
        .toFixed(2)
        .replace(/[.,]00$/, "");
      break;
    case "*":
      return (Number(firstOperand) * Number(secondOperand))
        .toFixed(2)
        .replace(/[.,]00$/, "");
      break;
    case "/":
      return (Number(firstOperand) / Number(secondOperand))
        .toFixed(2)
        .replace(/[.,]00$/, "");
      break;

    default:
      break;
  }
}

// const result = firstOperand + secondOperand;

// console.log(result);
function doCalculations(newEntry) {
  if (newEntry === "c") {
    if (secondOperand) {
      secondOperand = secondOperand.slice(0, -1);
    } else if (firstOperand) {
      console.log(firstOperand.slice(0, -1));
      firstOperand = firstOperand.slice(0, -1);
    }
  } else if (newEntry === "ac") {
    firstOperand = "";
    secondOperand = "";
    Operator = "";
    document.getElementById("result").innerText = "";
    document.getElementById("calculations").innerText = "";
  } else if (newEntry === ".") {
    if (!Operator) {
      if (!firstOperand.includes(".")) {
        firstOperand += newEntry;
      }
    } else {
      if (!secondOperand.includes(".")) {
        secondOperand += newEntry;
      }
    }
  } else if (
    newEntry === "0" ||
    newEntry === "1" ||
    newEntry === "2" ||
    newEntry === "3" ||
    newEntry === "4" ||
    newEntry === "5" ||
    newEntry === "6" ||
    newEntry === "7" ||
    newEntry === "8" ||
    newEntry === "9"
  ) {
    if (!Operator) {
      firstOperand += newEntry;
    } else {
      secondOperand += newEntry;
    }
  } else if (
    newEntry === "+" ||
    newEntry === "-" ||
    newEntry === "*" ||
    newEntry === "/"
  ) {
    if (!firstOperand) {
      return;
    } else {
      if (!Operator) {
        Operator = newEntry;
      } else {
        document.getElementById("result").innerText = calC(Operator);

        firstOperand = calC(Operator);
        secondOperand = "";
        Operator = newEntry;
      }
    }
  } else if (newEntry === "=" || newEntry === "Enter") {
    if (!secondOperand) {
      document.getElementById("result").innerText = firstOperand;
    } else {
      document.getElementById("result").innerText = calC(Operator);
    }
  }

  console.log(`"first operator is" ${firstOperand}`);
  console.log(`"second operator is" ${secondOperand}`);
  console.log(`"Operand is" ${Operator}`);
  document.getElementById(
    "calculations"
  ).innerText = `${firstOperand} ${Operator} ${secondOperand} `;
}
document.querySelector("#calculator").addEventListener("click", (e) => {
  const newEntry = e.target.value;
  doCalculations(newEntry);
});

// Add event listener on keypress
document.addEventListener(
  "keypress",
  (event) => {
    const newEntry = event.key;
    console.log(`Button Pressed ${event.key}`);
    doCalculations(newEntry);
  },
  false
);

document.getElementById("year").innerText = new Date().getFullYear();
