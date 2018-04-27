const fns = require('./R-functions');

describe('Testing celsius', () => {
    test('Checking freezing', () => {
        expect(fns.toCelsius(32)).toBe(0)
    })
})

describe('Testing evens', () => {
    test('Testing if they are both even', () => {
        expect(fns.areEven(32, 11)).toBe(false)
        expect(fns.areEven(4, 18)).toBe(true)
    })
})

describe('Testing uniq', () => {
    test('Is the new array uniq', () => {
        expect(fns.uniq([1,2,3,1,4,6,5,2])).toEqual([1,2,3,4,6,5])
    })
})
describe('Testing moveVowel', () => {
    test('Are the vowels at the end', () => {
        expect(fns.moveVowel('Hello there')).toEqual('Hll threoee')
    })
})


