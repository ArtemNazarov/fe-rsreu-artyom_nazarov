var Calculator = (function (Check) {
    'use strict';

    var currentValue = 0;

    function add() {

        for (var i = 0; i < arguments.length; i++) {
            if (!Check.isNumber(arguments[i])) {
                throw new Error('Error! You entered not a number');
            }
            currentValue += arguments[i];
        }
        return add;
    }

    function subtract() {
        for (var i = 0; i < arguments.length; i++) {
            if (!Check.isNumber(arguments[i])) {
                throw new Error('Error! You entered not a number');
            }
            currentValue -= arguments[i];
        }
        return subtract;
    }

    function multiply() {
        for (var i = 0; i < arguments.length; i++) {
            if (!Check.isNumber(arguments[i])) {
                throw new Error('Error! You entered not a number');
            }
            currentValue *= arguments[i];
        }
        return multiply;
    }

    function divide() {
        for (var i = 0; i < arguments.length; i++) {
            if (!Check.isNumber(arguments[i])) {
                throw new Error('Error! You entered not a number');
            }
            currentValue /= arguments[i];
        }
        return divide;
    }

    function getResult() {
        return currentValue;
    }

    function reset() {
        currentValue = 0;
    }

    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        getResult: getResult,
        reset: reset
    };
})(Check);