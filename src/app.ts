//  First class decorator
function Logger(logString: string) {
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string){
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
@Logger('LOGGING - PERSON')
@WithTemplate('<h1> My person object </h1>', 'app')
class Person {
    name = 'Marcos'
    constructor(){
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);

//  Property decorators

function Log(target: any, propertyName: string){
    console.log('Property decorator');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accesor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number){
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price (val: number){
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive');
        }
    }

    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}