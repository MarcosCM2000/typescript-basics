function combine(n1, n2, resultConversion) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
//  literal types
console.log(combine(20, 25, 'as-number'));
console.log(combine('20', '25', 'as-text'));
//  function as types
function printResult(n) {
    console.log(n);
}
var combineValues;
combineValues = printResult;
console.log(combineValues('s'));
//  function types & callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function () { });
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
