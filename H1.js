var g = 3; // green chai
var b = 2; // black chai
var k = 1; // k times in a row  drinking that same chai
var n = g + b; // n= number of green chai + number of black chai

var text1 = g > b ? 'Green' : 'Black';
var text2 = text1 === 'Green' ? 'Black' : 'Green';

const array = [];
var temp = 0;
var isDrink = false;
if ((!(g < k) && !(b < k)) || g == k || b == k) {
	for (let i = 1; i <= n; i++) {
		if (temp === 0) {
			temp = k;
			isDrink = !isDrink;
		}
		// console.log(isDrink);
		if (isDrink === true && temp > 0) {
			array.push(text1);
		}
		if (isDrink === false && temp > 0) {
			array.push(text2);
		}
		temp--;
	}
}
console.log(`Input Here\n\n`);
console.log(`Number of Black Chai : ${b}\nNumber of Green Chai : ${g}\nTime in a row, drinking that same Chai : ${k}\nTotal Number of Chai : ${n}\n\n`);
console.log(`Output Here `, array);
