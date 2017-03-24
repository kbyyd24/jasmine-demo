describe('FizzBuzz', function () {
  let fizzBuzz = require('../../lib/fizzBuzz/fizzBuzz.js')
  it('should return "Fizz" when given number multiple of 3', function () {
    let fizz = fizzBuzz(3)

    expect(fizz).toEqual('Fizz')
  })
  it('should return "Buzz" when given number multiple of 5', function() {
    let buzz = fizzBuzz(5)

    expect(buzz).toEqual('Buzz')
  })
  it('should return "FizzBuzz" when given number multiple of 3 and 5', function() {
    let result = fizzBuzz(15)

    expect(result).toEqual('FizzBuzz')
  })
  it('should return number to String when given number not multiple of 3 and 5', function() {
    let result = fizzBuzz(1)

    expect(result === '1').toBe(true)
  })
})