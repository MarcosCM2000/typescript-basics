"use strict";
//  generics
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then(data => { }, failure => { });
//  generic functions
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: 'Marcos' }, { age: 22 });
const mergedObj2 = merge({ x: 2 }, { y: 4 });
console.log(mergedObj.age);
console.log(mergedObj2);
