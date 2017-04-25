function isString(check) {
    'use strict';

    if (typeof check === 'string') {
        return true;
    }
    return false;
}

function printResult(val, flag) {
    'use strict';

    if (flag)
        console.log('The value of \'' + val + '\' is a string');
    else
        console.log('The value of ' + val + ' isn\'t a string');
}

function checkResult(val) {
    'use strict';

    if (isString(val))
        printResult(val, true);
    else
        printResult(val, false);
}

function checkOnStrings() {
    'use strict';

    console.log('-------first-task------');

    var str = 'String';

    checkResult(str);

    var number = 2;

    checkResult(number);
}

function canParseToNumber(check) {
    'use strict';

    if (isString(check)){

        var number = parseInt(check);

        if(isNumber(number)){
            console.log(number);
            return true;
        }
        return false;
    }
    return false;
}


function printParseResult(check, str) {
    'use strict';

    if (check){
        console.log('String \'' + str + '\' can be casted to number');
    }
    else
        console.log('String \'' + str + '\' can\'t be casted to number');
}

function checkForParse() {
    'use strict';

    var checkableString = 'efwef';
    var result = canParseToNumber(checkableString);

    console.log('------second-task------');
    printParseResult(result, checkableString);
    checkableString = '234';
    result = canParseToNumber(checkableString);
    printParseResult(result, checkableString);
}

function getStringLength(string) {
    'use strict';

    checkResult(string);

    console.log('Entered string: \'' + string + '\'');
    console.log('The length of entered string = ' + string.length);
}

function checkStringsLengths() {
    'use strict';

    var str = 'sfergvfdvef';

    console.log('-------third-task------');
    getStringLength(str);

    var s1 = '2233123134';

    getStringLength(s1);

}

function checkCamelize() {
    'use strict';

    var str = 'java script';

    console.log('------fourth-task------');
    console.log('Initial string: ' + str);
    str = camelize(str);
    console.log('Camelized string: ' + str);
}


function camelize(str) {
    'use strict';

    var strings = str.split(' ');

    for (var string in strings){
        var newStr = strings[string].replace(
            strings[string].charAt(0),
            strings[string].charAt(0).toUpperCase()
        );
        strings[string] = newStr;
    }

    var newString = strings[0].replace(strings[0].charAt(0),strings[0].charAt(0).toLowerCase());
    strings[0] = newString;
    var newStr = strings.join('');
    return newStr;
}

function checkCapitalize() {
    'use strict';

    var str = 'JavaScript';

    console.log('-------fifth-task------');
    console.log('Initial string: ' + str);
    str = capitalize(str);
    console.log('Capitalized string: ' + str);
}

function capitalize(string){
    'use strict';

    var newString = string.replace(string.charAt(0),string.charAt(0).toLowerCase());
    return newString;
}

function checkOccuriencies() {
    'use strict';

    var someString = 'JavaScript';

    console.log('-------sixth-task------');
    console.log('Count of a: ' + findOccuriencies('a', someString));;
    console.log('Count of ja: ' + findOccuriencies('ja', someString));;
    console.log('Count of \'\': ' + findOccuriencies('', someString));
    console.log('Count of b: ' + findOccuriencies('b', someString));;
}

function findOccuriencies(substr,string) {
    'use strict';

    if (substr === '')
        return 0;
    return (string.split(substr).length - 1);
}

function main(){
    'use strict';

    console.log('--------strings--------');
    checkOnStrings();
    checkForParse();
    checkStringsLengths();
    checkCamelize();
    checkCapitalize();
    checkOccuriencies();
}

main();
