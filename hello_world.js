"use strict";
exports.__esModule = true;
var second_file_1 = require("./second_file");
var message = "Hello Worldsss!";
var message2 = "3";
console.log(message);
console.log(typeof (message2));
console.log(typeof (second_file_1.MYCONST));
var user = {
    name: "Hayes",
    id: 0
};
console.log(user);
// You can use an interface declaration with classes
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// creating an object
var userA = new UserAccount("Murphy", 1);
console.log(userA);
/* commands
tsc hello_world.ts
node hello_world.js
*/
