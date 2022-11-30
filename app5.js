//-Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)

let addNumber = +prompt("Please add number");
let b = 3;
let i;
for (i = 0; i < 100; i++) {
  b = b * 3;
  document.write("Число в степени: " + b + "<br>");

  if (addNumber <= b) {
    break;
  }
}
addNumber === b
  ? console.log("Yes, you need to raise 3 to the power: " + (i + 2))
  : console.log("Сan't get");
