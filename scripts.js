// scripts.js 8.6

var a = prompt("wpisz a"), b = prompt("wpisz b");
value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) {
  console.log("Wynik ujemny");
} else if (value > 0) {
  console.log("Wynik dodatni");
}

if (value == 0) {
  console.log("Wynik jest rózwny zero");
}

console.log(value)