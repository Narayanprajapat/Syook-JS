// var decimal = 19;
var decimal = Number(prompt('Enter Decimal Number : '));

decToBin(decimal);

function decToBin(decimal) {
	var binary = '';

	var temp = 1;
	var checker = 0;
	var remain = 0;

	while (1) {
		if (decimal >= temp && decimal < temp + temp) {
			break;
		}
		temp += temp;
		checker = temp;
	}
	remain = decimal;
	while (checker > 0) {
		binary += parseInt(remain / checker);
		remain %= checker;
		checker = parseInt(checker / 2);
	}

	binary = +binary;
	const array = [];
	var temp = binary;
	while (temp > 0) {
		for (let i = 1; i <= temp.toString().length; i++) {
			let length = temp.toString().length;
			var minus = '1';
			for (let j = 1; j < length; j++) {
				minus += '0';
			}
			// console.log(minus);
			array.push(+minus);
			temp -= +minus;
		}
	}
	const resultArray = [];
	array.reverse().forEach((ele) => {
		switch (ele) {
			case 1:
				resultArray.push('pop');
				break;
			case 10:
				resultArray.push('double rip');
				break;
			case 100:
				resultArray.push('hide your mints');
				break;
			case 1000:
				resultArray.push('fall');
				break;
			case 10000:
				resultArray.reverse();
				break;
		}
	});
	console.log(`${decimal} to binary conversion ${binary}`);
	console.log('Hide that pin');
	console.log(resultArray);
}
