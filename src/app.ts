//  Intersection types
type Admin = {
    name: string;
    priviliges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Marcos',
    priviliges: [''],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable | Numeric;

//  type guards
function add2(a: Combinable, b: Combinable){
    
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a+b;
}
//      with types
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        //console.log(emp.privileges);
    }
}
//      with classes
class Car {
    drive() {
        console.log('aaa');
    }
}
class Truck {
    drive() {
        console.log('bbb');
    }
    loadCargo(){
        console.log('ccc');
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}

useVehicle(v1);
useVehicle(v2);

//  Discriminated unions
interface Bird {
    type: 'Bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'Horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed
            break;
        case 'Horse':
            speed = animal.runningSpeed
            break;
    }
}

//  type casting
//      form #1
//      const paragraph = <HTMLParagraphElement>document.getElementById('message-output')
//      form #2
const paragraph = document.getElementById('message-output')! as HTMLParagraphElement;
console.log(paragraph.textContent)

//  Index properties
interface ErrorContainer {
    [prop: string]: string

}
const errorBag: ErrorContainer = {
    email: 'Not valid email',
    username: 'Must start with capital letter'
}