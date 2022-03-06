// Iteration 1
const myFavoriteHero = "Hulk";
const x = 50;
const h = 5;
const y = 10;

const z = h + y;

// Iteration 2

const firstName = "Jon";
const lastName = "Snow";
const age = 24;

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

//1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

// Update final price of car1 and car2
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

// Iteration 3

//1.1
alert(10*5);

//1.2
alert(10/2);

//1.3
alert(15%9);

//1.4
const a = 10;
const b = 5;
let c = a + b;

//1.5
c = a * b;

// Iteration 4

//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const getHulk = avengers[0];

console.log(getHulk);

//1.2
avengers[0] = "IRONMAN";

//1.3
alert(avengers.length);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

//1.5
rickAndMortyCharacters.push("Lapiz Lopez");
rickAndMortyCharacters.pop();

//1.6
rickAndMortyCharacters.splice(1,1);

// Iteration 5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number1 / number2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2  === number1 || number1 / 5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
