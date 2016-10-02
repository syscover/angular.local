var Test = (function () {
    function Test() {
        this.counter = new Operator();
        this.ngOnInit();
    }
    Test.prototype.ngOnInit = function () {
        console.log('inicia');
        this.resultado = this.counter;
    };
    Test.prototype.setCounter = function (num) {
        this.counter.sum(num);
    };
    return Test;
}());
var Operator = (function () {
    function Operator() {
        this.number = 0;
    }
    Operator.prototype.sum = function (num) {
        this.number += num;
        console.log('sum:' + this.number);
    };
    Operator.prototype.printNumber = function () {
        console.log('printNumber:' + this.number);
    };
    return Operator;
}());
// inicializo el objeto
var test = new Test();
test.setCounter(1);
test.setCounter(5);
test.resultado.printNumber();
//# sourceMappingURL=index.js.map