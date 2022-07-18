
const { DESCRIBE } = require('sequelize/types/query-types.js')
const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide

} = require ('./functions.js')

test ('expect returnTwo to = 2', ()=> {
    expect (returnTwo()).toBe(2)

}

)

test('expect greeting James', () => {
    expect(greeting('James')).toBe('Hello, James')
})

test('expect greeting Jill', () => {
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('adding test 1+2', () => {
    expect(1+2).toBe(3)

})

test('adding test 5+9', () => {
    expect(5+9).toBe(14)

})
test('result shouljd be differnce of num1 and num2', () => {
    expect(subtract(5,4)).toBe(1)
    expect(subtract(10,5)).toBe(5)
})
test('result should be product of num 1 num 2', () => {
    expect(multiply(5,4)).toBe(20)
    expect(multiply(10,5)).toBe(50)
})

test ('result should be quotient of num 1 and num 2', () => {
    expect(divide(10,5)).toBe(2)
    expect(divide(10,2)).toBe(5)
})

describe ('test for each math function', () => {
    
})