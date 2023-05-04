const coffeeMenu = require("./coffee_data");

// Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map((item) => item.name);
console.log(allDrinks);

//Print an array of drinks that cost 5 and under.
const fiveUnder = coffeeMenu.filter((item) => item.price <= 5).map((item) => item.name);
console.log(fiveUnder);

// Print an array of drinks that are priced at an even number.
const evenPrice = coffeeMenu.filter((item) => item.price % 2 === 0).map((item) => item.name);
console.log(evenPrice);

//Print the total if you were to order one of every drink.
const oneEverything = coffeeMenu.reduce((accumulator, item) => accumulator + item.price, 0);
console.log ("$"+ oneEverything);

//Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((item) => item.seasonal).map((item) => item.name);
console.log(seasonalDrinks);

//Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
const seasonalBeans = coffeeMenu.filter((item) => item.seasonal).map((item) => item.name + " with imported beans");
console.log(seasonalBeans);