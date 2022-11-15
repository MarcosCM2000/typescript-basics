interface AddFn {
    //Interface as function type
    (a: number, b: number): number;
}

const add2: AddFn = (n1: number, n2: number) => {
    return n1+n2;
}

interface Named {
    readonly name: string
}
interface Greetable extends Named{
    greet(phrase: string): void;
}
class Person implements Greetable {
    name: string;
    age = 30;
    constructor (n: string) {
        this.name = n;
    }
    greet(phrase: string): void {
        console.log(phrase+this.name);
    }

}

let user1: Greetable;
user1 = new Person('Marcos');
user1.greet('Hi there - ');