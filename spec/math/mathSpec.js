describe('math', function () {
    var add = require('../../lib/math/math.js')
    it('should return the sum of two operands', function () {
        var sum = add(1, 2)
        expect(sum).toEqual(3)
    })

    it('should return subtraction of two operands', function() {
        var subtraction = minus(3, 2)
        expect(subtraction).toEqual(1)
    })
})