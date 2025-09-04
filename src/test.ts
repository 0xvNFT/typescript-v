console.log("test console log");

// Type Annotations
let name: string = 'John Doe';
let age: number = 30;
let isStudent: boolean = false;

const haha: string = 'This can be anything';

let a: void = undefined;

let b: null = null;

name = "Jane Doe";
age = 31;
isStudent = true;
a = undefined;
b = null;

console.log(name.toUpperCase());
console.log(age + 5);
console.log(isStudent ? "Student" : "Not a student");

console.log(haha);
console.log(a);
console.log(b);

const numbers: number[] = [1, 2, 3, 4, 5];
// numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers.length, numbers);

const booleanArray: boolean[] = [true, false, true];
console.log(booleanArray);

const bool: Array<boolean> = [true, false, true];
console.log(bool);

// Type Inference 
// inferred string type
const s = "This is a string";
console.log(s.toUpperCase());

// inferred number type
const n = 42;
console.log(n.toFixed(2));

// Union Types
let unionType: string | number; //holds multiple types
unionType = "Hello";
console.log(unionType);
unionType = 42;
console.log(unionType);

//union type in function
function printId(id: string | number) {
    console.log("Your ID is: " + id);
}

printId("123");
printId(456);

//custom union type
type StringOrNumber = string | number;

// custom union type variable
let customUnion: StringOrNumber;
customUnion = "Hello variable";
console.log(customUnion);
customUnion = 42;
console.log(customUnion);

//custom union type function
function printCustomUnion(value: StringOrNumber) {
    console.log("Custom Union Value: " + value);
}

printCustomUnion("Hello function");
printCustomUnion(42);

// any type (dont blatantly use) use with caution and use union types instead
let mixedArray: any[] = [1, "two", true];

console.log(mixedArray);

// using unknown type
let unknownVariable: unknown;
unknownVariable = "Hello";
console.log(unknownVariable);
unknownVariable = 42;
console.log(unknownVariable);

// unknown function
function printUnknown(value: unknown) : string {
    if (typeof value === "string") {
        return "Unknown Value string: " + value;
    } else if (typeof value === "number") {
        return "Unknown Value number: " + value.toFixed(2);
    } else {
        return "Unknown Value object: " + JSON.stringify(value);
    }
}

printUnknown("Hello");
printUnknown(42);

// any and unknown difference
// any has no type check
// unknown requires type checking

// object in typescript
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
// explicit type
let cars: { make: string; model: string; year: number } = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car);

//readonly modifier
// always immutable and prevent accidental changes in the object
type ReadonlyCar = {
    readonly make: string;
    readonly model: string;
    readonly year: number;
};

// let myCar: ReadonlyCar = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020
// };

// myCar.year = 2021; // Error: Cannot assign to 'year' because it is a read-only property

// function params and function returns (explicit and with default values)
function add(a: number, b: number = 0): number {
    return a + b;
}
console.log(add(5, 10));

// rest parameters (where a function can accept any number of arguments)
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
let totalSum = sum(1, 2, 3, 4, 6);
console.log(totalSum);

function joinWords(...words: string[]): string {
    return words.join(" ");
}

let sentence = joinWords("Hello", "world", "from", "TypeScript");
console.log(sentence);

//objects as parameters in typescript
function printCarInfo(car: { makes: string; models: string; years: number }) {
    console.log(`Car Make: ${car.makes}`);
    console.log(`Car Model: ${car.models}`);
    console.log(`Car Year: ${car.years}`);
}

const myCar = {
    makes: "Toyotas",
    models: "Camry",
    years: 2020
};

printCarInfo(myCar);


// object destructuring
function createEmployee(
  { id, name, age }: { id: number; name: string; age?: number }
): { id: number; name: string; age?: number } {
  return { id, name, age };
}

createEmployee({ id: 1, name: "John Doe" });
console.log(createEmployee({ id: 1, name: "John Doe" }));

// alias for object types

type UserInfo = {
  id: number;
  name: string;
  age?: number;
};

function getUserInfo(user: UserInfo): string {
  return `User ID: ${user.id}, Name: ${user.name}, Age: ${user.age ?? "N/A"}`;
}

const user: UserInfo = {
  id: 1,
  name: "John Doe",
  age: 30
};

getUserInfo(user); 

// 