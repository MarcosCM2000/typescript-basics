"use strict";
class Department {
    // executed when object is created 
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Marcos');
//  const accountingCopy = { name: 's', describe: accounting.describe } // pointer at the described method in my accounting object
//  accountingCopy.describe();
