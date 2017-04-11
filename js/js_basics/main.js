"use strict";

function first_task() {
	var first_var = 'String variable';
	var second_var = 5;
	console.log(first_var);
	console.log(second_var);
}

function second_triangleArea() {
	var sideA = parseInt(document.getElementById("numberA").getAttribute("value"));
	var sideB = parseInt(document.getElementById("numberB").getAttribute("value"));
	var sideC = parseInt(document.getElementById("numberC").getAttribute("value"));
	var half_perimeter = (sideA + sideB + sideC) / 2;
	var area = Math.sqrt((half_perimeter - sideA) * (half_perimeter - sideB) * (half_perimeter - sideC) * half_perimeter);
	if (checkTriangle(sideA, sideB, sideC)) {
		document.getElementById("result").innerHTML = area;
	}
	else {
		console.log("Error in triangle area calculating! Two sides of triangle can't be less than third!");
	}
}

function checkTriangle(aside, bside, cside) {
	if (((aside + bside) > cside) || ((bside + cside) > aside) || ((aside + cside) > bside)) {
		return true;
	}
	return false;
}

function third_Reverse() {
	var items = [1, 2, 3, 4, 5, 6];
	console.log('Initial array');
	items.forEach(writeArrayToLog);
	var reverse_items = reverseFor(items);
	console.log('Reversed array by for loop');
	reverse_items.forEach(writeReverseArrayToLog);
	reverse_items = items;
	reverse_items = reverseWhile(items);
	console.log('Reversed array by while loop');
	reverse_items.forEach(writeReverseArrayToLog);
	reverse_items = items;
	reverse_items = reverseDoWhile(items);
	console.log('Reversed array by do-while loop');
	reverse_items.forEach(writeReverseArrayToLog)
}

function writeArrayToLog(element, index) {
	console.log('items[' + index + '] = ' + element);
}

function writeReverseArrayToLog(element, index) {
	console.log('reverse_items[' + index + '] = ' + element);
}

function reverseFor(array) {
	var reverse_array = [];
	for (var i = 0, j = array.length - 1; i < array.length, j > -1; i++, j--) {
		reverse_array[i] = array[j];
	}
	return reverse_array;
}

function reverseDoWhile(array) {
	var reverse_array = [];
	var counter = 0;
	var reverse_counter = array.length - 1;
	do {
		reverse_array[counter] = array[reverse_counter];
		counter++;
		reverse_counter--;
	} while ((counter < array.length) && (reverse_counter > -1));
	return reverse_array;
}

function reverseWhile(array) {
	var reverse_array = [];
	var counter = 0;
	var reverse_counter = array.length - 1;
	while ((counter < array.length) && (reverse_counter > -1)) {
		reverse_array[counter] = array[reverse_counter];
		counter++;
		reverse_counter--;
	}
	return reverse_array;
}

function fourth_postfix_and_prefix() {
	var a = 0;
	console.log('a = ' + a + ' - initial value'); // initial value
	console.log('++a = ' + ++a + ' - after preincrement operation value of the a incremented before printing'); // preincrement operation
	console.log('a++ = ' + a++ + ' - after postincrement operation value of the a will increment after printing'); // postincrement operation
	console.log('a = ' + a + ' - i.e. now'); //final value of a vatiation after postincrement operation 
}

function check_sign(value) {
	if (value < 0) {
		return 'negative';
	}
	if (value > 0) {
		return 'positive';
	}
	if (value === 0) {
		return 'zero';
	}
	return 'undefined or NaN';
}

function fifth_numberSign() {
	var a = 0;
	var str = 'Value of this variable is ';
	console.log('variable = ' + a);
	console.log(str + check_sign(a));
	a = 1;
	console.log('variable = ' + a);
	console.log(str + check_sign(a));
	a = -1;
	console.log('variable = ' + a);
	console.log(str + check_sign(a));
	a = NaN;
	console.log('variable = ' + a);
	console.log(str + check_sign(a));
}

function sixth_alert() {
	var name = prompt('Enter your name');
	alert('Your name is ' + name + '.');
}

function seventh_factorial() {
	var a = 10;
	console.log('variable = ' + a);
	console.log('variable! = ' + factorial(a));
}

function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}
//main
first_task();
second_triangleArea();
third_Reverse();
fourth_postfix_and_prefix();
fifth_numberSign();
sixth_alert();
seventh_factorial();