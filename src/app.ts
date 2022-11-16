//  generics
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('This is done')
    }, 2000)
})

promise.then(data => {}, failure => {})

//  generic functions
function merge<T extends object, U extends object>(objA: T, objB: U){
    return {...objA, ...objB};
}

const mergedObj = merge({name: 'Marcos'}, {age: 22});
const mergedObj2 = merge({x: 2}, {y: 4});
console.log(mergedObj.age);
console.log(mergedObj2);

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = 'Got value';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([]))