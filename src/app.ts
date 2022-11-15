class Department {
    //private name: string;   //  field of class | property
    private employees: string [] = [];

    // executed when object is created 
    constructor(public name: string){
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

const accounting = new Department('Accounting');
    accounting.describe();
    accounting.addEmployee('Marcos');

//  const accountingCopy = { name: 's', describe: accounting.describe } // pointer at the described method in my accounting object
//  accountingCopy.describe();