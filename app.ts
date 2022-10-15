/*const person: {
    name: string,
    age: number
}*/ const person  = {
    name: 'Marcos',
    age: 20,
    hobbies: ['sports', 'cooking']
}
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}