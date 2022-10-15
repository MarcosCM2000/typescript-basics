/*const person: {
    name: string,
    age: number
}*/ var person = {
    name: 'Marcos',
    age: 20,
    hobbies: ['sports', 'cooking']
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
