export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }

    GetAge() {
        console.log(`The age of ${this.firstName} ${this.lastName} is ${this.age}`);
        return this.age;
    }

}