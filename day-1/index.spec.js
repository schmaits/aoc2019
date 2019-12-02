const calculateFuel = require('./index');

describe('calculateFuel', () => {
	test('should output the correct amount of fuel', () => {
		expect(calculateFuel(12)).toBe(2);
		expect(calculateFuel(14)).toBe(2);
		expect(calculateFuel(1969)).toBe(654);
		expect(calculateFuel(100756)).toBe(33583);
	})
})