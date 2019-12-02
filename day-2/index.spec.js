const processArr = require('./index');

describe('processArr', () => {
	test('should return the correct pattern', () => {
		expect(processArr('1,0,0,0,99')).toBe('2,0,0,0,99')
		expect(processArr('2,3,0,3,99')).toBe('2,3,0,6,99')
		expect(processArr('2,4,4,5,99,0')).toBe('2,4,4,5,99,9801')
		expect(processArr('1,1,1,4,99,5,6,0,99')).toBe('30,1,1,4,2,5,6,0,99')
		expect(processArr('1,9,10,3,2,3,11,0,99,30,40,50')).toBe('3500,9,10,70,2,3,11,0,99,30,40,50')
	})
})