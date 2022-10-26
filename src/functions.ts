type Combinable = number | string;
type ConversionDescriptor = 'as-number'|'as-text';
function combine(
    n1  :Combinable,
    n2  :Combinable,
    resultConversion: ConversionDescriptor) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1+n2;
    } else {
        return n1.toString() + n2.toString();
    }
}
//  literal types
console.log(combine(20,25, 'as-number'));
console.log(combine('20','25', 'as-text'));

//  function as types
function printResult(n: string): void {
    console.log(n)
}
let combineValues: (x: string)=> void;
combineValues = printResult;

console.log(combineValues('s'))

//  function types & callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number)=>void){
    const result = n1+n2;
    cb(result);
}
addAndHandle(10,20,()=>{})

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
});