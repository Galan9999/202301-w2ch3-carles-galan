const number1 = prompt("enter number 1");

const number2 = prompt("enter number 2");

if (Number.isNaN(+number1) || Number.isNaN(+number2)) {
  alert("Wrong Input! This is not a number!");
} else if (number1 === null || number2 === null) {
  alert("You have to introduce at least one number");
} else if (Number.isNaN(+number1) || number2 === "") {
  alert("The root of this number");
  console.log([Math.floor(Math.sqrt(+number1) * 1000) / 1000]);
} else {
  alert("Your results are");
  console.log([
    Math.floor(+number1 * 1000 + +number2 * 1000) / 1000,
    Math.floor(+number1 * 1000 - +number2 * 1000) / 1000,
    Math.floor(+number1 * +number2 * 1000) / 1000,
    Math.floor((+number1 * 1000) / +number2) / 1000,
  ]);
}
