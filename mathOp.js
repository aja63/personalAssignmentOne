
const sum = require('./sum');
const sub = require('./sub');
const mult = require('./mult');
const div = require('./div');

class MathOp {
    static sum(a,b) {
        return sum(a,b);
    }
    static difference(a,b){
        return sub(a,b);
    }
    static product(a,b) {
        return mult(a,b);
    }
    static quotient(a,b) {
        return div(a,b);
    }
    static sumList(myarray = []) {
        let Result = 0;
        myarray.forEach(function (item) {
            Result = sum(Result, item);
        });
        return Result;
    }

}

module.exports = MathOp;