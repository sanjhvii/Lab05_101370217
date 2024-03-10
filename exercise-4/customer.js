"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName, "!");
    };
    Customer.prototype.GetAge = function () {
        console.log("The age of ".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age));
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;