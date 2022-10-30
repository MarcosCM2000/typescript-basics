//  unknown
let userInput: unknown;
let userName: string;
userInput = 5;
userName = 'Max';

//  never
function generateError(msg: string, code: number): never{
    throw{
        message: msg,
        codeNumber: code
    };
}
//generateError('An error occured', 500);

const hobbies = ['sport', 'hiking']
//  spread operator
const person = {
    name: 'max',
    age: 30
}
const copiedPerson = { ...person };

//  rest parameters
const add2 = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
};
const addedNumbers = add2(5,10,3,2.7) //20.7

//  array destructuring
const [] = hobbies;
//  object destructuring
const {} = person;