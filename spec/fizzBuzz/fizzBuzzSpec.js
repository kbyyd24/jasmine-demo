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
})