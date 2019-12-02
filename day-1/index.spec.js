const { calculateFuel, calculateFuelWithFuelMass } = require('./index');

describe('calculateFuel', () => {
	test('should output the correct amount of fuel', () => {
		expect(calculateFuel(12)).toBe(2);
		expect(calculateFuel(14)).toBe(2);
		expect(calculateFuel(1969)).toBe(654);
		expect(calculateFuel(100756)).toBe(33583);
	})
});

describe('calculateFuelWithFuelMass', () => {
	test('should output the correct amount of fuel accounting for fuel mass', () => {
		expect(calculateFuelWithFuelMass(14)).toBe(2);
		expect(calculateFuelWithFuelMass(1969)).toBe(966);
		expect(calculateFuelWithFuelMass(100756)).toBe(50346);
	})
})