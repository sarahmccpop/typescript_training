/* commands
tsc hello_world.ts    
node hello_world.js
*/  
import { MYCONST } from "./second_file";

// declaring with types
let message: string = "Hello Worldsss!";
let mynum: number = 13;
let isOn: boolean = true;

// declaring without types specified
let message2 = "3";

console.log("With type declarations");
console.log(message, "is a type of", typeof(message));
console.log(mynum, "is a", typeof(mynum));
console.log("isOn is a ", typeof(isOn), " and it's value is", isOn);
console.log("MYCONST is type", typeof(MYCONST), " and it is", MYCONST); 

console.log("Without type declarations")
console.log(message2, "is a type of", typeof(message2));


// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// explicitly declare an object's shape using an interface declaration e.g.... 
interface User {
    name: string;
    id: number;
}
// creating the object
const user: User = {
    name: "Hayes", // these objects must match the objects declared in the interface e.g. name can't be username here
    id: 0,
};

console.log(user)

// You can use an interface declaration with classes and OOP
// this class enables the creation on an object
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

// creating an object from the class using the interface 
const userA: User = new UserAccount("Murphy", 1)
console.log(userA)

// can use interfaces to annotate parameters and return values to functions:
// function getAdminUser(): User {
//     return void;
// }

function deleteUser(user: User){
    // ...
}

// With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

// Unions 
// with a union, you can declare that a type could be one of 
// many types. For example, you can describe a boolean type as being 
// either true or false
type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnder10 = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj: string | string[]){
    return obj.length;
}

// for example, you can make a function return different values depending on whether it is passed a string or an array
function wrapInAnArray(obj: string | string[]){
    if (typeof obj === "string"){
        return [obj];
    }
    return obj;
}

// https://medium.com/swlh/intro-to-typescript-63bd15c2cd0e

let myAge:number = 36
//this declares a variable of type Number in JavaScript
//in JS, all Number types are float types behind the scenes
​
let isEmployed:boolean = false;
//declares a boolean (true or false variable) in JavaScript
​
let myName: string = `Vijay is ${myAge} years old and ${ isEmployed ? 'is working' : 'is currently broke' }`;
//this declares a variable of type String in JavaScript

console.log(myName);

// Enums don't hold values like strings and numbers. They hold aliases for index values
// We can change the individual indices if we wish in the enum - e.g. Friday is hard-coded to be at index 10
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday = 10,
    Saturday,
    Sunday
}

let day0: string = DaysOfWeek[0]
let day10: string = DaysOfWeek[10]
console.log(day0)
console.log(day10)

// Interfaces example
interface Car{
    name:string,
    model:string,
    wheels:number,
    engine:string,
    odometer:number
}
let myCarDataInfo = (car: Car):string => {
    return `You drive a ${car.name} ${car.model}.
     It has ${car.wheels} wheels, an ${car.engine} engine
     and has a mileage of ${car.odometer}.`
  }
let carA = {
    name: "Toyota",
    model: "Prius",
    wheels: 4,
    engine: "big",
    odometer: 1000
}

console.log(myCarDataInfo(carA))

