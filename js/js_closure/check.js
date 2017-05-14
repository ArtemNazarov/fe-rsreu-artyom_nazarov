var Check = (function () {

    function isNumber(numberToCheck) {
        'use strict';

        return Boolean((typeof numberToCheck === 'number') && (!isNaN(numberToCheck)) && (isFinite(numberToCheck)));
    }

    return {
        isNumber: isNumber
    };

}());