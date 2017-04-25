function checkObjectLength() {
    'use strict';

    var obj = {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254};

    console.log('-------first-task------');
    console.log('We have an object');
    console.log(obj);
    console.log('Length of object: ' + getLength(obj));
}

function getLength(obj) {
    'use strict';

    var size = 0, key;

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
}

function getProperties(obj) {
    'use strict';

    var key;
    var propArray = [];

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            propArray.splice(propArray.length - 1, 0, key);
        }
    }
    return propArray;
}

function checkObjectProperties() {
    'use strict';

    var obj = {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254};

    console.log('------second-task------');
    console.log('We have an object');
    console.log(obj);
    console.log('List of properties: ' + getProperties(obj));
}


function main() {
    'use strict';

    console.log('--------objects--------');
    checkObjectLength();
    checkObjectProperties();

}

main();