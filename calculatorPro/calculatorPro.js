const numbers = [];
const results = [];

const getNumbers = () => {
  let number;
  do {
    number = prompt("introduce number");
    if (number === null) {
      return;
    }
    if (Number.isNaN(+number) || number === "") {
      alert("this is not a number");
    } else {
      numbers.push(+number);
    }
  } while (number !== null);
  return number;
};
getNumbers();

const sumOfNumbers = () => {
  let sumNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i < 1) {
      sumNumbers = numbers[i];
    } else {
      sumNumbers += numbers[i];
    }
  }
  results.push(+sumNumbers);
  return sumNumbers;
};

sumOfNumbers();

const subOfNumbers = () => {
  let subNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i < 1) {
      subNumbers = numbers[i];
    } else {
      subNumbers -= numbers[i];
    }
  }
  results.push(+subNumbers);
  return subNumbers;
};

subOfNumbers();

const multOfNumbers = () => {
  let multNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i < 1) {
      multNumbers = numbers[i];
    } else {
      multNumbers *= numbers[i];
    }
  }
  results.push(+multNumbers);
  return multNumbers;
};
multOfNumbers();

const divOfNumbers = () => {
  let divNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i < 1) {
      divNumbers = numbers[i];
    } else {
      divNumbers /= numbers[i];
    }
  }
  results.push(+divNumbers);
  return divNumbers;
};

divOfNumbers();

const calculatorPro = () => {
  if (numbers.length === 1) {
    alert("la raiz cuadrada del número es " + Math.sqrt(+numbers[0]));
  } else {
    return alert(`the results are:
  SUMMATION = ${Math.floor(results[0] * 1000) / 1000}
  SUBSTRACTION = ${Math.floor(results[1] * 1000) / 1000}
  MULTIPLICATION = ${Math.floor(results[2] * 1000) / 1000}
  DIVISION = ${Math.floor(results[3] * 1000) / 1000}`);
  }
};

calculatorPro();

const repeatCalculator = confirm("do you want a introduce more numbers");
if (repeatCalculator === false) {
  alert("ok, see you");
} else {
  getNumbers();
  calculatorPro();
  alert("see you later aligator");
}
