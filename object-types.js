"use strict";
/*const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
}*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Marcos',
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('xxxx');
}
