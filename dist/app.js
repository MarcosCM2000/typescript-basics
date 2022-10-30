"use strict";
class Department {
    // executed when object is created 
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const accountingCopy = { name: 's', describe: accounting.describe }; // pointer at the described method in my accounting object
accountingCopy.describe();
