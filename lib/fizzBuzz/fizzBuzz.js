'use strict'

function fizzBuzz(number) {
  if (number % 3 === 0) {
    if (number % 5 === 0) {
      return 'FizzBuzz'
    }
    return 'Fizz'
  } else {
    return 'Buzz'
  }
}

module.exports = fizzBuzz