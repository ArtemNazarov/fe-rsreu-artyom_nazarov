function isNumber(numberToCheck) {
    'use strict';

    return Boolean((typeof numberToCheck === 'number') && (!isNaN(numberToCheck)) && (isFinite(numberToCheck)));
}

function isZero(numberToCheck) {
    'use strict';

    return Boolean(isNumber(numberToCheck) && numberToCheck === 0);
}

function isPositive(numberToCheck) {
    'use strict';

    return Boolean(isNumber(numberToCheck) && numberToCheck > 0);
}

function declareVariables() {
    'use strict';

    var firstVar = 'String variable';
    var secondVar = 5;

    console.log(firstVar);
    console.log(secondVar);
}

var sideA = parseInt(
    document.getElementById('numberA').getAttribute('value')
);
var sideB = parseInt(
    document.getElementById('numberB').getAttribute('value')
);
var sideC = parseInt(
    document.getElementById('numberC').getAttribute('value')
);

function calculateTriangleArea(sideA, sideB, sideC) {
    'use strict';

    if (checkTriangle(sideA, sideB, sideC)) {
        var half_perimeter = (sideA + sideB + sideC) / 2;
        var area = Math.sqrt(
            (half_perimeter - sideA)
            * (half_perimeter - sideB)
            * (half_perimeter - sideC)
            * half_perimeter
        );
        document.getElementById('result').innerHTML = area;
    } else {
        throw new Error(
            'Error in triangle area calculating! Two sides of triangle can\'t be less than third!'
        );
    }
}

function checkTriangle(aside, bside, cside) {
    'use strict';

    if (isNumber(aside)
        && isNumber(bside)
        && isNumber(cside)
        && isPositive(aside)
        && isPositive(bside)
        && isPositive(cside)
    ) {
        return (((aside + bside) > cside) || ((bside + cside) > aside) || ((aside + cside) > bside))
    } else {
        throw new Error('Error in sides check! You entered not numbers or not positive numbers');
    }

    return false;
}

function reverseArray() {
    'use strict';

    var items = [1, 2, 3, 4, 5, 6];

    console.log('Initial array');

    items.forEach(writeArrayToLog);

    var reverseItems = reverseFor(items);

    console.log('Reversed array by for loop');

    reverseItems.forEach(writeReverseArrayToLog);
    reverseItems = items;
    reverseItems = reverseWhile(items);

    console.log('Reversed array by while loop');

    reverseItems.forEach(writeReverseArrayToLog);
    reverseItems = items;
    reverseItems = reverseDoWhile(items);

    console.log('Reversed array by do-while loop');

    reverseItems.forEach(writeReverseArrayToLog)
}

function writeArrayToLog(element, index) {
    'use strict';

    console.log('items[' + index + '] = ' + element);
}

function writeReverseArrayToLog(element, index) {
    'use strict';

    console.log('reverse_items[' + index + '] = ' + element);
}

function reverseFor(array) {
    'use strict';

    var reverseArray = [];

    for (var i = 0, j = array.length - 1; i < array.length, j > -1; i++, j--) {
        reverseArray[i] = array[j];
    }

    return reverseArray;
}

function reverseDoWhile(array) {
    'use strict';

    var reverseArray = [];
    var counter = 0;
    var reverseCounter = array.length - 1;

    do {
        reverseArray[counter] = array[reverseCounter];
        counter++;
        reverseCounter--;
    } while ((counter < array.length) && (reverseCounter > -1));

    return reverseArray;
}

function reverseWhile(array) {
    'use strict';

    var reverseArray = [];
    var counter = 0;
    var reverseCounter = array.length - 1;

    while ((counter < array.length) && (reverseCounter > -1)) {
        reverseArray[counter] = array[reverseCounter];
        counter++;
        reverseCounter--;
    }

    return reverseArray;
}

function postfixAndPrefix() {
    'use strict';

    var a = 0;

    console.log('a = ' + a + ' - initial value'); // initial value
    console.log('++a = ' + ++a + ' - after preincrement operation value of the a incremented before printing'); // preincrement operation
    console.log('a++ = ' + a++ + ' - after postincrement operation value of the a will increment after printing'); // postincrement operation
    console.log('a = ' + a + ' - i.e. now'); //final value of a vatiation after postincrement operation
}

function checkSign(value) {
    'use strict';

    if (isNaN(value)) {
        throw new Error('Error! You entered undefined or NaN!')
    } else if (value < 0) {
            return 'negative';
        } else if (value > 0) {
            return 'positive';
        } else if (value === 0) {
            return 'zero';
        }
    }

}

function checkNumberSign() {
    'use strict';

    var a = 0;
    var str = 'Value of this variable is ';

    console.log('variable = ' + a);
    console.log(str + checkSign(a));
    a = 1;

    console.log('variable = ' + a);
    console.log(str + checkSign(a));
    a = -1;

    console.log('variable = ' + a);
    console.log(str + checkSign(a));

    a = NaN;
    console.log('variable = ' + a);
    console.log(str + checkSign(a));
}

function showPrompt() {
    'use strict';

    var name = prompt('Enter your name');

    alert('Your name is ' + name + '.');
}

function calculateFactorial() {
    'use strict';

    var a = 10;

    printFactorial(a);

    a = 0;
    printFactorial(a);

    a = 1;
    printFactorial(a);
}

function printFactorial(a) {
    console.log('variable = ' + a);
    console.log(a + '! = ' + factorial(a));
}

function factorial(n) {
    'use strict';

    if (isNumber(n) && (isPositive(n) || (isZero(n)))) {
        return (n === 0) ? 1 : n * factorial(n - 1);
    } else {
        throw new Error('Error in factorial calculating! You entered not numbers or not positive numbers');
    }
}

function main() {
    'use strict';

    declareVariables();
    calculateTriangleArea(sideA, sideB, sideC);
    reverseArray();
    postfixAndPrefix();
    checkNumberSign();
    showPrompt();
    calculateFactorial();
}

main();
