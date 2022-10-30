class Department {
    name: string;   //  field of class | property

    // executed when object is created 
    constructor(n: string){
        this.name = n;
    }

    describe(this: Department ) { //to always refer to an instance that's based on department class
        console.log('Department: ' + this.name ); 
    }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { name: 's', describe: accounting.describe } // pointer at the described method in my accounting object
accountingCopy.describe();