//-Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)

let a = 20;
let i = 0;
for (i = 0; a < 30; i++) {
  a = a + 0.5;
  document.write("This is a = " + a + "<br>");
}
console.log(i);
