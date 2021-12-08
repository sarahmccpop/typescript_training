"use strict";
exports.__esModule = true;
/* commands
tsc hello_world.ts
node hello_world.js
*/
var second_file_1 = require("./second_file");
// declaring with types
var message = "Hello Worldsss!";
var mynum = 13;
var isOn = true;
// declaring without types specified
var message2 = "3";
console.log("With type declarations");
console.log(message, "is a type of", typeof (message));
console.log(mynum, "is a", typeof (mynum));
console.log("isOn is a ", typeof (isOn), " and it's value is", isOn);
console.log("MYCONST is type", typeof (second_file_1.MYCONST), " and it is", second_file_1.MYCONST);
console.log("Without type declarations");
console.log(message2, "is a type of", typeof (message2));
// creating the object
var user = {
    name: "Hayes",
    id: 0
};
console.log(user);
// You can use an interface declaration with classes and OOP
// this class enables the creation on an object
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// creating an object from the class using the interface 
var userA = new UserAccount("Murphy", 1);
console.log(userA);
// can use interfaces to annotate parameters and return values to functions:
// function getAdminUser(): User {
//     return void;
// }
function deleteUser(user) {
    // ...
}
// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj) {
    return obj.length;
}
// for example, you can make a function return different values depending on whether it is passed a string or an array
function wrapInAnArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
// https://medium.com/swlh/intro-to-typescript-63bd15c2cd0e
var myAge = 36;
//this declares a variable of type Number in JavaScript
//in JS, all Number types are float types behind the scenes
var isEmployed = false;
//declares a boolean (true or false variable) in JavaScript
var myName = "Vijay is ".concat(myAge, " years old and ").concat(isEmployed ? 'is working' : 'is currently broke');
//this declares a variable of type String in JavaScript
//this declares a variable of type String in JavaScript
console.log(myName);
// Enums don't hold values like strings and numbers. They hold aliases for index values
// We can change the individual indices if we wish in the enum - e.g. Friday is hard-coded to be at index 10
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 10] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 11] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 12] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var day0 = DaysOfWeek[0];
var day10 = DaysOfWeek[10];
console.log(day0);
console.log(day10);
var myCarDataInfo = function (car) {
    return "You drive a ".concat(car.name, " ").concat(car.model, ".\n     It has ").concat(car.wheels, " wheels, an ").concat(car.engine, " engine\n     and has a mileage of ").concat(car.odometer, ".");
};
var carA = {
    name: "Toyota",
    model: "Prius",
    wheels: 4,
    engine: "big",
    odometer: 1000
};
console.log(myCarDataInfo(carA));
