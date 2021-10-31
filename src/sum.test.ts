import sumTwoElements from './index'

describe('test suite for gitflow', () => {
    test('should sum 2 values correct', () => {
        expect(sumTwoElements([2,3])).toBe(5)
    })
    
})
