var Calculator = (function (Check) {
    'use strict';

    var currentValue = 0;

    function add(value) {

        for (var i = 0; i < arguments.length; i++) {
            if (!isNumber(value)) {
                throw new Error('Error! You entered not a number');
            }
            currentValue += arguments[i];
        }
    }

    function subtract(value) {
        for (var i = 0; i < arguments.length; i++) {
            if (!isNumber(value)) {
                throw new Error('Error! You entered not a number');
            }
            currentValue -= arguments[i];
        }
    }

    function multiply(value) {
        for (var i = 0; i < arguments.length; i++) {
            if (!isNumber(value)) {
                throw new Error('Error! You entered not a number');
            }
            currentValue *= arguments[i];
        }
    }

    function divide(value) {
        for (var i = 0; i < arguments.length; i++) {
            if (!isNumber(value)) {
                throw new Error('Error! You entered not a number');
            }
            currentValue /= arguments[i];
        }
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