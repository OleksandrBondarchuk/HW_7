//-Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

let courency = 27;
let i = 0;
let money = 0;
for (i = 0; money < 100; i++) {
  money = money + 10;
  total = courency * money;
  document.write("This is money = " + total + "<br>");
}
console.log(i);
