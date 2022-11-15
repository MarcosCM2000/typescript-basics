"use strict";
let user1;
user1 = {
    name: 'Marcos',
    age: 22,
    greet(phrase) {
        console.log(phrase + this.name);
    }
};
user1.greet('Hi there - ');
