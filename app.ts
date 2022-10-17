function combine(n1 :number | string, n2:number | string, resultConversion: 'as-number'|'as-text') {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1+n2;
    } else {
        return n1.toString() + n2.toString();
    }
}

console.log(combine(20,25, 'as-number'));
console.log(combine('20','25', 'as-text'));