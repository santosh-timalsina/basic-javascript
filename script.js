// alert("hello world");

// //String Conversion
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string

// //Numeric Conversion
// alert("6" / "2");

// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number

// //Boolean Conversion
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("this is santosh") ); // true
// alert( Boolean("") ); // false

// // while loop
// let i = 0;
// while (i < 5) {
//   alert(i);
//   console.log("santosh")
//   i++;
// }

// 2.1 Hello World!
// alert("Hello, Universe!");

// 2.2 Code Structure
// Statements: Statements are syntax constructs and commands that perform actions.
// We can have as many statements in our code as we want. Statements can be separated with a semicolon.
// alert("Hello"); alert("Universe");

// Semicolons: A semicolon may be omitted in most cases when a line break exists.
// alert('Hello')
// alert('Universe')

// 2.3 The modern mode, "use strict"
// The directive looks like a string: "use strict" or 'use strict'.
// When it is located at the top of a script, the whole script works the “modern” way.
// "use strict";
// this code works the modern way

// Example
// "use strict";

// This will throw a ReferenceError because x is not declared
// x = 3.14;

// This will throw a TypeError because we cannot delete a variable in strict mode
// var y = 100;
// delete y;

// This will throw a SyntaxError due to duplicate parameter names
// function sampleFunction(a, a) {
//     return a + a;
// }

// Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable "use strict" automatically. So we don’t need to add the "use strict" directive if we use them.

// 2.4 Variables

// let greeting;
// greeting = 'Hi there!';
// alert(greeting); // shows the variable content

// To be concise, we can combine the variable declaration and assignment into a single line:
// let greeting = 'Hi there!'; // define the variable and assign the value
// alert(greeting); // Hi there!

// We can also declare multiple variables in one line:
// let user = 'Alice', age = 30, message = 'Welcome';

// We can also declare the variables in a multiline variant:
// let user = 'Alice',
//   age = 30,
//   message = 'Welcome';

// We can change the value of a variable as we want
// let name;
// name = "David";
// name = "Michael";
// alert(name);

// We can also declare two variables and copy data from one into the other.
// let greeting = 'Hello Universe!';
// let message;
// copy 'Hello Universe' from greeting into message
// message = greeting;
// now two variables hold the same data
// alert(greeting); // Hello Universe!
// alert(message); // Hello Universe!

// Variable naming
// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
// let userName;
// let test456;

// The dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.
// let $ = 10; // declared a variable with the name "$"
// let _ = 20; // and now a variable with the name "_"
// alert($ + _); // 30

// Examples of incorrect variable names:
// let 2a; // cannot start with a digit
// let my-name; // hyphens '-' aren't allowed in the name

// Case matters
// Variables named apple and APPLE are two different variables.

// Reserved names: Reserved names cannot be used as variable names because they are predefined by the language itself.
// For example: let, class, return, and function are reserved.
// let let = 5; // can't name a variable "let", error!
// let return = 10; // also can't name it "return", error!

// Constant
// To declare a constant (unchanging) variable, use const instead of let:
// const myBirthday = '01.01.2000';

// 2.5 Datatypes

// Number: The number type represents both integer and floating-point numbers.
// let n = 456;
// n = 45.67;

// There are many operations for numbers, e.g., multiplication *, division /, addition +, subtraction -, and so on.
// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity, and NaN.

// Infinity: Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// We can get it as a result of division by zero:
// alert( 1 / 0 ); // Infinity
// alert( Infinity ); // Infinity

// NaN: NaN represents a computational error. It is a result of an incorrect or undefined mathematical operation, for instance:
// alert( "abc" / 2 ); // NaN, such division is erroneous
// NaN is sticky. Any further mathematical operation on NaN returns NaN:
// alert( NaN + 10 ); // NaN
// alert( 5 * NaN ); // NaN
// alert( "abc" / 2 - 3 ); // NaN

// BigInt: BigInt type was recently added to the language to represent integers of arbitrary length.
// BigInt value is created by appending "n" to the end of an integer:
// the "n" at the end means it's a BigInt
// const bigInt = 9876543210987654321098765432109876543210n;

// String: A string in JavaScript must be surrounded by quotes.
// let str = "Hello";
// let str2 = 'Single quotes are also fine';
// let phrase = `can embed another ${str}`;

// Types of quotes
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
// let name = "Alice";
// embed a variable
// alert( `Hi, ${name}!` ); // Hi, Alice!
// embed an expression
// alert( `the sum is ${5 + 5}` ); // the sum is 10

// Boolean: The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
// For instance:
// let isMember = true; // yes, the user is a member
// let hasAccess = false; // no, the user doesn't have access

// Boolean values also come as a result of comparisons:
// let isAdult = 21 > 18;
// alert( isAdult ); // true (the comparison result is "yes")

// Null Value
// let age = null;

// The Undefined Value: The meaning of undefined is “value is not assigned”.
// If a variable is declared but not assigned, then its value is undefined:
// let height;
// alert(height); // shows "undefined"

// Objects and Symbol
// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details until we know objects better.

// The typeof operator: The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:
// typeof undefined // "undefined"
// typeof 123 // "number"
// typeof 100n // "bigint"
// typeof false // "boolean"
// typeof "hello" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  (1)
// typeof null // "object"  (2)
// typeof alert // "function"  (3)

// 2.6 Interaction: alert, prompt, confirm
// Alert: shows a message
// alert("Hello, Universe!");

// Prompt: shows a message asking the user to input text. It returns the text or, if the Cancel button or Esc is clicked, null
// result = prompt(title, [default]);
// let name = prompt('What is your name?', 'Alice');
// alert(`Hello, ${name}!`); // Hello, Alice!

// Confirm: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
// let isSure = confirm("Are you sure?");
// alert( isSure ); // true if OK is pressed

// 2.7 Type Conversion

// String Conversion
// let value = false;
// alert(typeof value); // boolean
// value = String(value); // now value is a string "false"
// alert(typeof value); // string

// Numeric Conversion
// let str = "456";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 456
// alert(typeof num); // number

// Boolean Conversion
// alert( Boolean(2) ); // true
// alert( Boolean(0) ); // false
// alert( Boolean("world") ); // true
// alert( Boolean("") ); // false

// 2.8 Basic Operators Math

// Terms Unary, Binary, Operands
// An operand is what operators are applied to. For instance, in the multiplication of 6 * 3
// there are two operands: the left operand is 6 and the right operand is 3.
// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
// let x = 5;
// x = -x;
// alert( x ); // -5, unary negation was applied
// An operator is binary if it has two operands. The same minus exists in binary form as well:
// let x = 7, y = 2;
// alert( x - y ); // 5, binary minus subtracts values

// Maths
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

// Remainder %
// The remainder
