class Test {

    resultado: Operator;
    counter = new Operator();


    constructor(){
        this.ngOnInit();
    }

    ngOnInit(): void {
        console.log('inicia');
        this.resultado = this.counter;
    }

    setCounter(num: number): void{
        this.counter.sum(num);
    }
}


class Operator {

    private number:number = 0;

    constructor() {}

    sum(num: number): void{
        this.number += num;

        console.log('sum:' + this.number);
    }

    printNumber():void {
        console.log('printNumber:' +this.number);
    }
}




// inicializo el objeto
var test = new Test();

test.setCounter(1);
test.setCounter(5);

test.resultado.printNumber();
