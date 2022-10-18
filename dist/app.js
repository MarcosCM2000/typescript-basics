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
generateError('An error occured', 500);
