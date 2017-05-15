function main() {
    'use strict';

    Calculator.add(4);
    Calculator.subtract(5);
    Calculator.add(4,5);
    Calculator.reset();
    Calculator.add(2);
    Calculator.add(4)(5);
    console.log('current result is: ' + Calculator.getResult());
    Calculator.subtract(1,1);
    console.log('current result is: ' + Calculator.getResult());
    Calculator.multiply(2);
    console.log('current result is: ' + Calculator.getResult());
    Calculator.divide(9,2);
    console.log('current result is: ' + Calculator.getResult());

}


main();
