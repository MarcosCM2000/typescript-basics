"use strict";
const e1 = {
    name: 'Marcos',
    priviliges: [''],
    startDate: new Date()
};
//  type guards
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
    loadCargo() {
        console.log('ccc');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'Bird':
            speed = animal.flyingSpeed;
            break;
        case 'Horse':
            speed = animal.runningSpeed;
            break;
    }
}
//  type casting
//  form #1
//  const paragraph = <HTMLParagraphElement>document.getElementById('message-output')
//  form #2
const paragraph = document.getElementById('message-output');
console.log(paragraph.textContent);
