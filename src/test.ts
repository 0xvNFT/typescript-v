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