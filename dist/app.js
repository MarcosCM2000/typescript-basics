"use strict";
//  unknown
let userInput;
let userName;
userInput = 5;
userName = 'Max';
//  never
function generateError(msg, code) {
    throw {
        message: msg,
        codeNumber: code
    };
}
//generateError('An error occured', 500);
const hobbies = ['sport', 'hiking'];
//  spread operator
const person = {
    name: 'max',
    age: 30
};
const copiedPerson = Object.assign({}, person);
//  rest parameters
const add2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add2(5, 10, 3, 2.7); //20.7
//  array destructuring
const [] = hobbies;
//  object destructuring
const {} = person;
