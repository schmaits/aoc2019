const fs = require('fs');
const csvParser = require('csv-parser');

const getInput = new Promise((resolve, reject) => {
	const input = [];
	
	fs.createReadStream('./day-2/data.csv')
		.pipe(csvParser({
			newline: ','
		}))
		.on('data', (data) => {
			input.push(+data.input)
		})
		.on('end', () => {
			resolve(input.join(','));
		})
		.on('error', () => {
			reject('Unable to read input file');
		})
});

const processArr = (list) => {
	let arr = list.split(',').map(item => {
		return +item;
	});

	for (let i = 0; i <= arr.length; i += 4) {
		if (arr[i] === 99) break;
		else if (arr[i] === 1) {
			arr[arr[i + 3]] = arr[arr[i + 1]] + arr[arr[i + 2]];
		}
		else if (arr[i] === 2) {
			arr[arr[i + 3]] = arr[arr[i + 1]] * arr[arr[i + 2]];
		}
	}

	return arr.map(number => {
		return number.toString();
	}).join(',');
};

getInput
	.then(input => {
		let inputArr = input.split(',');
		inputArr[1] = 12;
		inputArr[2] = 2;
		console.log(processArr(inputArr.join(',')));
	})
	.catch(console.log)

module.exports = processArr;
