//  generics
const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('This is done')
    }, 2000)
})

promise.then(data => {}, failure => {})

//  generic functions & constraints
function merge<T extends object, U extends object>(objA: T, objB: U){
    return {...objA, ...objB};
}

const mergedObj = merge({name: 'Marcos'}, {age: 22});
const mergedObj2 = merge({x: 2}, {y: 4});
console.log(mergedObj.age);
console.log(mergedObj2);

//  generic functions with interfaces
interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = 'Got value';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe([]));

//  keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: '+ obj[key];
}

extractAndConvert({name: 'Marcos'}, 'name');

//  Generic classes
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

//  Generic utility types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal{
    //  partial: We say that in the end, object will be of type T
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as CourseGoal;
}

//  read only
const namesArray: Readonly<string[]> = ['1', '2'];