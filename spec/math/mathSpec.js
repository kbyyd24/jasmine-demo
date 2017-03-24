describe('math', function () {
    var math = require('../../lib/math/math.js')
    it('should return the sum of two operands', function () {
        var sum = math.add(1, 2)
        expect(sum).toEqual(3)
    })

    it('should return subtraction of two operands', function() {
        var subtraction = math.minus(3, 2)
        expect(subtraction).toEqual(1)
    })
})