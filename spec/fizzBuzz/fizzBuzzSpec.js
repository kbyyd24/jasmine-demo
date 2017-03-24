describe('FizzBuzz', function () {
  let fizzBuzz = require('../../lib/fizzBuzz.js')
  it('should return Fizz', function () {
    let fizz = fizzBuzz(3)
    expect(fizz).toEqual('Fizz')
  })
})