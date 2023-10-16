function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let celsius = parseFloat(prompt("Введите температуру в градусах Цельсия:"));

let fahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + "C =", fahrenheit + "F");
