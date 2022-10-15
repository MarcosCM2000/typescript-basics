/*const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
}*/ 
enum Role {ADMIN, READ_ONLY, AUTHOR};
const person = {
    name: 'Marcos',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('xxxx')
}