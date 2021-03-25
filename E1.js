let number = Number(prompt('Check number is perfect or not'));
let check = 0;
let factor = [];
for (let i = 1; i < number; i++) {
	if (number % i == 0) {
		factor.push(i);
	}
}
for (let i = 0; i < factor.length; i++) {
	check += factor[i];
}

if (check == number) {
	console.log(`${number} is perfect number`);
} else if (check > number) {
	console.log(`${number} is abundant number`);
} else if (check < number) {
	console.log(`${number} is deficient number`);
}
