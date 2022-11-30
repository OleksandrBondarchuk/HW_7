//-Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

let addNumber = parseInt(+prompt("Add number"));

let i;
let numberSquared;

for (i = 0; i < 100; i++) {
  numberSquared = i * i;
  if (numberSquared > addNumber) {
    break;
  }
  document.write("Number " + i + "<br>");
}
