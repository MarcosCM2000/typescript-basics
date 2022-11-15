"use strict";
class Department {
    // executed when object is created 
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private name: string;   //  field of class | property
        this.employees = [];
        this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID:' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        ;
        throw new Error('No report found');
    }
    set recentReport(value) {
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accounting Department - ID:' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const x = Department.createEmployee('Marcos');
/*const department = new Department('1', 'Accounting');
    department.describe();
    department.addEmployee('Marcos');*/
const it = new ITDepartment('2', ['Marcos']);
const accounting = AccountingDepartment.getInstance();
//  const accounting = new AccountingDepartment('3', ['A', 'B']);
accounting.recentReport;
//  const accountingCopy = { name: 's', describe: accounting.describe } // pointer at the described method in my accounting object
//  accountingCopy.describe();
