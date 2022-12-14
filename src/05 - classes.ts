abstract class Department {
    //private name: string;   //  field of class | property
    protected employees: string [] = [];

    // executed when object is created 
    constructor( readonly id: string, public name: string){
        this.name = name;
    }

    /*abstract describe(this: Department ) { //to always refer to an instance that's based on department class
        //  console.log('Department: ' + this.name ); 
    }*/
    abstract describe(this: Department) : void;

    static createEmployee(name: string) {
        return { name: name};
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInfo(){
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe(this: Department): void {
      console.log('IT Department - ID:' + this.id);
  }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    get recentReport(){
        if (this.lastReport) {
            return this.lastReport;
        };
        throw new Error('No report found');
    }
    set recentReport(value: string){
        this.addReport(value);
    }
    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.reports = reports;
      this.lastReport = reports[0];
    }
    static getInstance(){
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(this: Department): void {
        console.log('Accounting Department - ID:' + this.id);
    }

    addEmployee(name: string): void {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
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