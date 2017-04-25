function isArray(variable) {
    'use strict';

    if (Array.isArray(variable)) {
        return true;
    }
    return false;
}

function printResult(val, flag) {
    'use strict';

    if (flag) {
        console.log('The value of ' + val + ' is an array');
    } else {
        console.log('The value of ' + val + ' isn\'t an array');
    }

}

function checkResult(val) {
    'use strict';

    if (isArray(val)) {
        printResult(val, true);
    } else {
        printResult(val, false);
    }
}

function checkOnArrays() {
    'use strict';

    console.log('-------first-task------');

    var arr = [1, 2];

    checkResult(arr);

    var number = 2;

    checkResult(number);
}

function deleteFromArray(element, array) {
    'use strict';

    if (isNaN(element)) {
        array.forEach(findAndDeleteNaN);
    } else {
        array.splice(array.indexOf(element), 1);
    }
}

function findAndDeleteNaN(element, index, arr) {
    if (isNaN(element)) {
        arr.splice(index, 1);
    }
}

function checkOnDeleteFromArray() {
    'use strict';

    var obj = null;
    var neg = false;
    var notNumber = NaN;
    var undef = undefined;
    var array = ['', undef, obj, neg, 0, notNumber, 'simple string', 2340];

    console.log('------second-task------');
    console.log('Initial array');
    console.log(array);
    deleteFromArray('', array);
    deleteFromArray(undefined, array);
    deleteFromArray(null, array);
    deleteFromArray(false, array);
    deleteFromArray(NaN, array);
    deleteFromArray(0, array);
    console.log('Modernised array');
    console.log(array);
}

function checkHighestLowestFrequentValue() {
    'use strict';

    var array = [1, 4, 6, 1, 5, 128, 6, 9, 1];
    var highest = findHighestValue(array);
    var lowest = findLowestValue(array);
    var frequent = findMostFrequent(array);

    console.log('-------third-task------');
    console.log('----and-fourth-task----');
    console.log('----and-sixth-task-----');
    console.log('Initial array');
    console.log(array);
    console.log('Highest value of initial array: ' + highest);
    console.log('Lowest value of initial array: ' + lowest);
    console.log('Most frequent value of initial array: ' + frequent);
}

function findHighestValue(array) {
    'use strict';

    var highest = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > highest)
            highest = array[i];
    }

    return highest;
}

function findLowestValue(array) {
    'use strict';

    var lowest = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < lowest)
            lowest = array[i];
    }

    return lowest;
}


function findMostFrequent(array) {
    'use strict';

    var frequent = array[0];
    var frequency = 0;
    var mostFrequent = 0;

    for (var i = 0; i < arguments.length; i++) {
        for (var j = i; j < arguments.length; j++) {
            if (array[i] === array[j])
                frequency++;
            if (mostFrequent < frequency) {
                mostFrequent = frequency;
                frequent = array[i];
            }
        }
        frequency = 0;
    }

    return mostFrequent;
}

function checkSplit() {
    'use strict';

    var string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit';

    console.log('-------fifth-task------');
    console.log('Initial string: \'' + string + '\'');
    console.log(splitString(string));

}

function splitString(string) {
    'use strict';

    return string.split(' ');
}

function clone(array) {
    'use strict';
    return array.slice(0);
}

function checkClone() {
    'use strict';

    var myArray = [1, 4, 6, 1, 5, 128, 6, 9, 1];
    var newArray = clone(myArray);

    console.log('-----seventh-task------');
    console.log('Initial array');
    console.log(myArray);
    console.log('Cloned Array');
    console.log(newArray);
}

function checkRemoveDuplicate() {
    'use strict';

    var stringArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'sit', 'ipsum'];

    console.log('-----eighth-task-------');
    console.log('Initial array of strings');
    console.log(stringArray);
    if (checkStringArray(stringArray)) {
        stringArray = removeDuplicate(stringArray);
    }

    console.log('Modernised array');
    console.log(stringArray);

}

function checkStringArray(array) {
    'use strict';

    for (var i = 0; i < array.length - 1; i++) {
        if (!isString(array[i])) {
            return false;
        }
    }
    return true;
}

function removeDuplicate(array) {
    'use strict';

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length; j++) {
            if ((array[i].toLowerCase() === array[j].toLowerCase()) && (i !== j)) {
                array = remove(array[j], array);
            }
        }
    }
    return array;
}

function remove(element, array) {
    'use strict';

    array.splice(array.indexOf(element), 1);
    return array;
}

function checkMerge() {
    'use strict';

    var firstStrArray = ['Lorem', 'quasi', 'dolor', 'sit', 'amet'];
    var secondStrArray = ['Eligendi', 'dolor', 'neque', 'amet', 'quasi', 'quis', 'quos'];
    var mergedArray = merge(firstStrArray, secondStrArray);

    console.log('-----nineth-task-------');
    console.log('First array');
    console.log(firstStrArray);
    console.log('Second array');
    console.log(secondStrArray);
    console.log('Merged array');
    console.log(mergedArray);
}

function merge(array1, array2) {
    'use strict';

    var newArray = array1.concat(array2);

    newArray = removeDuplicate(newArray);
    return newArray;
}

function checkRemove() {
    'use strict';

    var firstStrArray = ['Lorem', 'quasi', 'dolor', 'sit', 'amet'];

    console.log('-----tenth-task-------');
    console.log('Initial string array');
    console.log(firstStrArray);
    console.log('Let\'s remove \'dolor\'');
    firstStrArray = remove('dolor', firstStrArray);
    console.log(firstStrArray);
    console.log('\'dolor\' removed');
}

function checkObjectsSort() {
    var library = [

        {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

        {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

        {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

    ];
    console.log('----eleventh-task-----');
    console.log('Initial array of objects');
    console.log(library);
    library.sort(compareByTitle);
    console.log('Sorted array of objects');
    console.log(library);
}

function compareByTitle(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
}

function main() {
    'use strict';

    console.log('--------arrays---------');
    checkOnArrays();
    checkOnDeleteFromArray();
    checkHighestLowestFrequentValue();
    checkSplit();
    checkClone();
    checkRemoveDuplicate();
    checkMerge();
    checkRemove();
    checkObjectsSort();
}

main();