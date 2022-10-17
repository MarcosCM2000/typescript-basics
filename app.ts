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

console.log(combine(20,25, 'as-number'));
console.log(combine('20','25', 'as-text'));

function printResult(n: string): void {
    console.log(n)
}
let combineValues: (x: string)=> void;
combineValues = printResult;

console.log(combineValues('s'))