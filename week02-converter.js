/*
  Week 2 — Unit Converter
  Submission by Philip Selasi

  Exchange rate: 1 Ghana cedi ≈ $0.085 USD.
  I used the exchange rate given.
*/

// 1. Cedis to US dollars
function cedisToDollars(cedis) {
  const exchangeRate = 0.085;
  return cedis * exchangeRate;
}

// 2. Kilometres to miles
function kmToMiles(km) {
  const milesPerKm = 0.621371;
  return km * milesPerKm;
}

// 3. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Test the conversions
const cedis = 100;
const kilometres = 10;
const celsius = 25;

console.log(
  `GH₵${cedis} = $${cedisToDollars(cedis).toFixed(2)}`
);

console.log(
  `${kilometres} km = ${kmToMiles(kilometres).toFixed(2)} miles`
);

console.log(
  `${celsius}°C = ${celsiusToFahrenheit(celsius).toFixed(2)}°F`
)