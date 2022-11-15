class Department {
    //private name: string;   //  field of class | property
    private employees: string [] = [];

    // executed when object is created 
    constructor(readonly id: string, public name: string){
        this.name = name;
    }

    describe(this: Department ) { //to always refer to an instance that's based on department class
        console.log('Department: ' + this.name ); 
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
}

const accounting = new Department('1', 'Accounting');
    accounting.describe();
    accounting.addEmployee('Marcos');
const it = new ITDepartment('2', ['Marcos'])

//  const accountingCopy = { name: 's', describe: accounting.describe } // pointer at the described method in my accounting object
//  accountingCopy.describe();