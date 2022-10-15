const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Marcos',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: [1 , '1']
}
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}