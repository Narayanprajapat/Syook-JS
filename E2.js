let fun = Number(prompt(`Choose The Function : \nAABCGDDDSSAASS to convert 2ABCG3D2S2A2S : Press 1\n 2ABCG3D2S2A2S to convert AABCGDDDSSAASS : Press 2`));

if (fun == 1) {
	let char = prompt('AABCGDDDSSAASS Like Enter Here : ');
	shortern(char);
} else if (fun == 2) {
	let char = prompt('2ABCG3D2S2A2S Like Enter Here : ');
	viceVersa(char);
}

function shortern(char) {
	let charCopy = char;
	let temp;
	let a = 0;
	let array = [];
	for (let x = 0; char.length != 0; ) {
		temp = char[x];
		a = 0;
		for (let i = 0; i < char.length + 1; i++) {
			if (temp == char[i]) {
				a++;
			}
			if (temp != char[i]) {
				char = char.substring(a);
				break;
			}
		}
		if (a == 0) {
			array.push(`${temp}`);
		} else if (a == 1) {
			array.push(`${temp}`);
		} else {
			array.push(`${a}${temp}`);
		}
	}
	console.log(`${charCopy} Sort Character Output Is : ${array.join('')}`);
}

function viceVersa(char) {
	let charCopy = char;
	let printChar;
	let str = '';
	let len;
	// debugger;
	while (char != 0) {
		let x = parseInt(char);
		if (Number.isNaN(x)) {
			len = 1;
			x = 1;
			printChar = char[len - 1];
		} else {
			len = x.toString().length;
			printChar = char[Number(len)];
			len = Number(len) + 1;
		}
		for (let i = 0; i < x; i++) {
			str += printChar;
		}
		char = char.substring(len);
	}
	console.log(`${charCopy} is change : ${str}`);
}
