function combine(n1, n2, resultConversion) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log(combine(20, 25, 'as-number'));
console.log(combine('20', '25', 'as-text'));
function printResult(n) {
    console.log(n);
}
var combineValues;
combineValues = printResult;
console.log(combineValues('s'));
