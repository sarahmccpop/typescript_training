import { MYCONST } from "./second_file";

let message: string = "Hello Worldsss!";
let message2 = "3";
console.log(message);
console.log(typeof(message2));
console.log(typeof(MYCONST)); 

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
function getAdminUser(): User {
    return void;
}

function deleteUser(user: User){
    // ...
}

/* commands
tsc hello_world.ts    
node hello_world.js
*/  


