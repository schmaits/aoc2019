const fs = require('fs');
const csvParser = require('csv-parser');

const getInput = new Promise((resolve, reject) => {
	const input = [];
	
	fs.createReadStream('./day-1/data.csv')
		.pipe(csvParser())
		.on('data', (data) => {
			input.push(+data.input)
		})
		.on('end', () => {
			resolve(input);
		})
		.on('error', () => {
			reject('Unable to read input file');
		})
})

const calculateFuel = (mass) => {
	return (Math.floor(mass / 3)) - 2;
};

const calculateFuelWithFuelMass = (mass) => {
	let totalFuel = 0;
	let additionalFuel = calculateFuel(mass);

	while (additionalFuel > 0) {
		totalFuel += additionalFuel
		additionalFuel = calculateFuel(additionalFuel);
	}

	return totalFuel;
}

getInput
	.then(input => {
		let total = 0;

		input.forEach(mass => {
			total += calculateFuelWithFuelMass(mass);
		});

		console.log(total);
	})
	.catch(console.log)

module.exports = { calculateFuel, calculateFuelWithFuelMass };
