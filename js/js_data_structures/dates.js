function checkDateDifference() {
    'use strict';

    var firstDate = new Date(2017, 4, 24, 11, 30, 0);
    var secondDate = new Date(2017, 1, 28, 12, 30, 0);
    var difference = firstDate - secondDate;

    difference /= 3600000; //to hours
    difference /= 24; //to days
    difference = Math.floor(difference);

    console.log('-------first-task------');
    console.log('First date: ' + firstDate.toString());
    console.log('Second date: ' + secondDate.toString());
    console.log('Difference between dates in days: ' + difference);
}

function checkCurrentDate() {
    'use strict';

    var currentDate = new Date();

    console.log('------second-task------');
    console.log('Current date:');
    console.log(currentDate.toLocaleString());
}

function checkDateInFormat() {
    console.log('-----third-task------');
    console.log(formatDate(new Date()));
}

function formatDate(date) {
    var formattingArray = date.toString().split(' ');
    var time = formattingArray[4].toString().split(':');
    var formattedDate = formattingArray[1] + ' ' + formattingArray[2] + ' ' + formattingArray[3] + ', ' + time[0] + ':' + time[1];

    return formattedDate;
}

function main() {
    'use strict';

    console.log('---------dates---------');
    checkDateDifference();
    checkCurrentDate();
    checkDateInFormat();
}


main();