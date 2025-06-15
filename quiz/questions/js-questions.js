let jsQuestionsArray = [
    {
      "type": "JS",
      "question_no": "1",
      "question": "Which keyword is used to declare a variable in JavaScript?",
      "optionA": "var",
      "optionB": "let",
      "optionC": "const",
      "optionD": "All of the above",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "2",
      "question": "What will be the output of console.log(typeof([]))?",
      "optionA": "array",
      "optionB": "object",
      "optionC": "list",
      "optionD": "undefined",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "3",
      "question": "How do you write a single-line comment in JavaScript?",
      "optionA": "// This is a comment",
      "optionB": "<!-- This is a comment -->",
      "optionC": "/* This is a comment */",
      "optionD": ") # This is a comment",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "4",
      "question": "Which method is used to add an element to the end of an array?",
      "optionA": "push()",
      "optionB": "add()",
      "optionC": "append()",
      "optionD": "insert()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "5",
      "question": "What is the correct way to check if a variable 'x' is undefined?",
      "optionA": "if (x === undefined)",
      "optionB": "if (x == null)",
      "optionC": "if (typeof x === 'undefined')",
      "optionD": "d) Both a and c",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "6",
      "question": "Which operator is used for strict equality comparison in JavaScript?",
      "optionA": " ==  ",
      "optionB": "                              ===  ",
      "optionC": " =",
      "optionD": " !=",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "7",
      "question": "What will be the output of console.log(2 + \"2\")?",
      "optionA": "4",
      "optionB": "\"22\"",
      "optionC": "22",
      "optionD": "NaN",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "8",
      "question": "How do you declare a function in JavaScript?",
      "optionA": "function myFunction() {}",
      "optionB": "var myFunction = function() {}",
      "optionC": "const myFunction = () => {}",
      "optionD": "All of the above",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "9",
      "question": "Which method is used to remove the last element from an array?",
      "optionA": "pop()",
      "optionB": "removeLast()",
      "optionC": "splice()",
      "optionD": "delete()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "10",
      "question": "What is the correct way to write an if statement in JavaScript?",
      "optionA": " if x > 5 then",
      "optionB": "if (x > 5)",
      "optionC": "if x > 5 d)",
      "optionD": "if (x > 5) ",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "11",
      "question": "Which loop is guaranteed to run at least once in JavaScript?",
      "optionA": "for loop",
      "optionB": "while loop",
      "optionC": "do...while loop",
      "optionD": "forEach loop Answer:",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "12",
      "question": "How do you convert a string to an integer in JavaScript?",
      "optionA": "parseInt()",
      "optionB": "toInteger()",
      "optionC": "Number()",
      "optionD": "Both a and c",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "13",
      "question": "What is the output of typeof(null)?",
      "optionA": "\"null\"",
      "optionB": "\"undefined\"",
      "optionC": "\"object\"",
      "optionD": "\"number\"",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "14",
      "question": "Which method is used to join elements of an array into a string?",
      "optionA": "concat()",
      "optionB": "join()",
      "optionC": "merge()",
      "optionD": "toString()",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "15",
      "question": "How do you declare a constant variable in JavaScript?",
      "optionA": "ver",
      "optionB": "let ",
      "optionC": "    const ",
      "optionD": "constant",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "16",
      "question": "What is the correct way to write a for loop in JavaScript?",
      "optionA": "for (i = 0; i < 5; i++)",
      "optionB": "for (i < 5; i++)",
      "optionC": "for i = 1 to 5",
      "optionD": "for (i = 0; i < 5)",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "17",
      "question": "Which method is used to round a number to the nearest integer?",
      "optionA": "Math.round()",
      "optionB": "Math.floor()",
      "optionC": "Math.ceil()",
      "optionD": "Math.trunc()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "18",
      "question": "What is the output of console.log(typeof NaN)?",
      "optionA": "\"number\"",
      "optionB": "\"NaN\"",
      "optionC": "\"undefined\"",
      "optionD": "\"object\"",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "19",
      "question": "Which method is used to remove the last element from an array?",
      "optionA": "pop",
      "optionB": "push",
      "optionC": "shift()",
      "optionD": "unshift()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "20",
      "question": "What will be the output of console.log(3 + 4 + \"5\")?",
      "optionA": "\"345\"",
      "optionB": "\"75\"",
      "optionC": "12",
      "optionD": "\"12\"",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "21",
      "question": "How do you declare a constant variable in JavaScript?",
      "optionA": "var",
      "optionB": "let",
      "optionC": "const",
      "optionD": "constant",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "22",
      "question": "Which of the following is NOT a valid way to declare a function in JavaScript?",
      "optionA": "function myFunction() {}",
      "optionB": "const myFunction = function() {}",
      "optionC": "const myFunction = () => {}",
      "optionD": "function = myFunction() {}",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "23",
      "question": "What does the === operator do in JavaScript?",
      "optionA": "Assigns a value",
      "optionB": "Compares values and types",
      "optionC": "Compares only values",
      "optionD": "Logical AND",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "24",
      "question": "How do you check if a variable is an array in JavaScript?",
      "optionA": "typeof variable === \"array\"",
      "optionB": "variable instanceof Array",
      "optionC": "Array.isArray(variable)",
      "optionD": "variable.isArray()",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "25",
      "question": "What is the purpose of the async keyword in JavaScript?",
      "optionA": "To define a synchronous function",
      "optionB": "To define an asynchronous function",
      "optionC": "To create a new thread",
      "optionD": "To pause execution of a function",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "26",
      "question": "What does the Object.freeze() method do?",
      "optionA": "Deletes an object",
      "optionB": "Prevents modification of existing properties and addition of new properties",
      "optionC": "Copies an object",
      "optionD": "Merges two objects",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "27",
      "question": "What is the output of console.log(typeof [])?",
      "optionA": "\"array\"",
      "optionB": "\"object",
      "optionC": "\"list\"",
      "optionD": "undefined",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "28",
      "question": "Which method is used to join all elements of an array into a string?",
      "optionA": "concat",
      "optionB": "join",
      "optionC": "toString",
      "optionD": "splice",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "29",
      "question": "What does the ?: operator do in JavaScript?",
      "optionA": "Optional chaining",
      "optionB": "Nullish coalescing",
      "optionC": "Ternary operation",
      "optionD": "Logical OR",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "30",
      "question": "How can you convert a string to an integer in JavaScript?",
      "optionA": "Integer.parse()",
      "optionB": "parseInt()",
      "optionC": "Number",
      "optionD": "Both B and C",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "31",
      "question": "What is the correct way to write a while loop in JavaScript?",
      "optionA": "while (i < 5)",
      "optionB": "while i < 5",
      "optionC": "while (i < 5; i++)",
      "optionD": "do while (i < 5)",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "32",
      "question": "Which built-in method combines the text of two strings and returns a new string?",
      "optionA": "concat()",
      "optionB": "append()",
      "optionC": "combine()",
      "optionD": "attach()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "33",
      "question": "Which event occurs when the user clicks on an HTML element?",
      "optionA": "onmouseclick",
      "optionB": "onchange",
      "optionC": "onclick",
      "optionD": "onmouseover",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "34",
      "question": "What is the difference between let and const in JavaScript?",
      "optionA": "let can be reassigned whereas const cannot",
      "optionB": "const can be reassigned whereas let cannot",
      "optionC": "Both let and const can be reassigned",
      "optionD": "Neither let nor const can be reassigned",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "35",
      "question": "What does the this keyword refer to in JavaScript?",
      "optionA": "It refers to the global object",
      "optionB": "It refers to the object that is executing the current function",
      "optionC": "It refers to the prototype object of the current function",
      "optionD": "It refers to the parent object of the current object",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "36",
      "question": "What does the NaN property represent in JavaScript?",
      "optionA": "\"Not a Null\"",
      "optionB": "\"Not a Number\"",
      "optionC": "\"No and Null\"",
      "optionD": "\"Not a Negative\"",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "37",
      "question": "What is the difference between == and === operators in JavaScript?",
      "optionA": " ==  checks for strict equality, whereas === checks for type equality",
      "optionB": " ==  checks for type equality, whereas === checks for strict equality",
      "optionC": " ==  performs type coercion, whereas === does not",
      "optionD": "There is no difference between == and ===",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "38",
      "question": "What does the bind() method do in JavaScript?",
      "optionA": "Binds a function to an object as a method",
      "optionB": "Binds a function to its current scope",
      "optionC": "Binds a function with new parameters",
      "optionD": "Binds a function to a specific context, creating a new function",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "39",
      "question": "What does the JSON.stringify() function do in JavaScript?",
      "optionA": "Converts a JavaScript object or value to a JSON string",
      "optionB": "Parses a JSON string and returns a JavaScript object",
      "optionC": "Checks if a value is JSON-valid",
      "optionD": "Compacts a JSON string",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "40",
      "question": "What is a callback function in JavaScript?",
      "optionA": "A function that is executed immediately after its declaration",
      "optionB": "A function passed as an argument to another function, to be executed later",
      "optionC": "A function that returns another function",
      "optionD": "A function used to handle asynchronous operations",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "41",
      "question": "What is the difference between setTimeout() and setInterval() functions in JavaScript?",
      "optionA": "setTimeout() executes a function once after a specified delay, whereas setInterval() executes a function repeatedly at a specified interval",
      "optionB": "setTimeout() executes a function repeatedly at a specified interval, whereas setInterval() executes a function once after a specified delay",
      "optionC": "There is no difference between setTimeout() and setInterval()",
      "optionD": "setTimeout() and setInterval() are used for handling events, not for executing functions",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "42",
      "question": "What is the difference between localStorage and sessionStorage in JavaScript?",
      "optionA": "localStorage stores data with no expiration date, whereas sessionStorage stores data for the duration of the session",
      "optionB": "localStorage stores data for the duration of the session, whereas sessionStorage stores data with no expiration date",
      "optionC": "localStorage and sessionStorage both store data with no expiration date",
      "optionD": "localStorage and sessionStorage both store data for the duration of the session",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "43",
      "question": "How can you convert a JSON string to a JavaScript object?",
      "optionA": "Using JSON.parse()",
      "optionB": "Using JSON.stringify()",
      "optionC": "Using Object.parse()",
      "optionD": "Using Object.stringify()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "44",
      "question": "What does the addEventListener() method do in JavaScript?",
      "optionA": "Attaches an event handler to the document",
      "optionB": "Attaches an event handler to an HTML element",
      "optionC": "Removes an event handler from an HTML element",
      "optionD": "Triggers an event on an HTML element",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "45",
      "question": "How do you create and use a JavaScript class?",
      "optionA": "Using the class keyword to define a class, and then instantiating it with new",
      "optionB": "Using the function keyword to define a class, and then instantiating it with new",
      "optionC": "Using the prototype keyword to define a class, and then instantiating it with new",
      "optionD": "JavaScript does not support classes",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "46",
      "question": "What are some benefits of using modules in JavaScript, such as import and export?",
      "optionA": "Modules help organize code into reusable components and prevent pollution of the global scope",
      "optionB": "Modules improve performance by reducing the size of JavaScript files",
      "optionC": "Modules are only used for server-side JavaScript, not client-side",
      "optionD": "Modules allow JavaScript to interact with databases directly",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "47",
      "question": "What is the purpose of the typeof operator in JavaScript?",
      "optionA": "To check if a variable is defined",
      "optionB": "To check the type of a variable or expression",
      "optionC": "To convert a variable to a specific type",
      "optionD": "To concatenate strings",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "48",
      "question": "How do you round the number 7.25 to the nearest integer?",
      "optionA": "Math.round(7.25)",
      "optionB": "Math.floor(7.25)",
      "optionC": "round(7.25)",
      "optionD": "ceil(7.25)",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "49",
      "question": "How do you check if a JavaScript object has a specific property?",
      "optionA": "Using object.property",
      "optionB": "Using object.hasOwnProperty('property')",
      "optionC": "Using object.contains('property')",
      "optionD": "Using object.propertyExists('property')",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "50",
      "question": "In JavaScript, how do you access the value associated with a specific key in an object?",
      "optionA": "Using the get() method",
      "optionB": "Using the retrieve() function",
      "optionC": "Using bracket notation (obj[key])",
      "optionD": "Using the value() property",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "51",
      "question": "Who created JavaScript?",
      "optionA": "Tim Berners-Lee",
      "optionB": "Brendan Eich",
      "optionC": "Bill Gates",
      "optionD": "James Gosling",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "52",
      "question": "In what year was JavaScript first introduced?",
      "optionA": "1990",
      "optionB": "1993",
      "optionC": "1995",
      "optionD": "1997",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "53",
      "question": "Which company developed JavaScript?",
      "optionA": "Microsoft",
      "optionB": "Sun Microsystems",
      "optionC": "Netscape",
      "optionD": "IBM",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "54",
      "question": "What was JavaScript originally called?",
      "optionA": "Java",
      "optionB": "LiveScript",
      "optionC": "Mocha",
      "optionD": "ECMAScript",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "55",
      "question": "Which version of ECMAScript introduced arrow functions and classes?",
      "optionA": "ES3",
      "optionB": "ES5",
      "optionC": "ES6",
      "optionD": "ES7",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "56",
      "question": "Which keyword is used to define a function in JavaScript?",
      "optionA": "def",
      "optionB": "function",
      "optionC": "fun",
      "optionD": "func",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "57",
      "question": "How do you call a function named `myFunction` in JavaScript?",
      "optionA": "call myFunction();",
      "optionB": "myFunction();",
      "optionC": "Call.myFunction();",
      "optionD": "function myFunction();",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "58",
      "question": "What is the correct syntax for a JavaScript arrow function?",
      "optionA": "let myFunction = () => { /* code */ }",
      "optionB": "let myFunction => () { /* code */ }",
      "optionC": "let myFunction = () -> { /* code */ }",
      "optionD": "let myFunction() => { /* code */ }",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "59",
      "question": "How do you return a value from a JavaScript function?",
      "optionA": "exit",
      "optionB": "return",
      "optionC": "stop",
      "optionD": "break",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "60",
      "question": "Which of the following is a valid function expression?",
      "optionA": "var myFunction = function() { /* code */ };",
      "optionB": "var myFunction = () { /* code */ };",
      "optionC": "function = var myFunction() { /* code */ };",
      "optionD": "var myFunction = function { /* code */ };",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "61",
      "question": "What does the `===` operator do in JavaScript?",
      "optionA": "Compares both value and type",
      "optionB": "Compares only value",
      "optionC": "Assigns a value",
      "optionD": "Checks if a variable is defined",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "62",
      "question": "What does the `typeOf` operator do in JavaScript?",
      "optionA": "Returns the type of a variable",
      "optionB": "Returns the value of a variable",
      "optionC": "Converts a variable to a string",
      "optionD": "Checks if a variable is undefined",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "63",
      "question": "Which operator is used for string concatenation?",
      "optionA": "`+`",
      "optionB": "`&`",
      "optionC": "`.`",
      "optionD": "`*`",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "64",
      "question": "Which logical operator represents \"AND\"?",
      "optionA": "||",
      "optionB": "&&",
      "optionC": "`!`",
      "optionD": "&",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "65",
      "question": "What is the correct syntax for an if statement in JavaScript?",
      "optionA": "if i == 5 then { /* code */ }",
      "optionB": "if (i == 5) { /* code */ }",
      "optionC": "if i = 5 then { /* code */ }",
      "optionD": "if (i = 5) { /* code */ }",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "66",
      "question": "How do you write an else statement in JavaScript?",
      "optionA": "else (i == 5) { /* code */ }",
      "optionB": "else { /* code */ }",
      "optionC": "else if (i == 5) { /* code */ }",
      "optionD": "else i == 5 { /* code */ }",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "67",
      "question": "Which statement is used to stop a loop or switch statement?",
      "optionA": "stop",
      "optionB": "break",
      "optionC": "return",
      "optionD": "exit",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "68",
      "question": "What is the correct syntax for an if...else if...else statement?",
      "optionA": "if (condition1) { /* code */ } else (condition2) { /* code */ } else { /* code */ }",
      "optionB": "if (condition1) { /* code */ } else if (condition2) { /* code */ } else if { /* code */ }",
      "optionC": "if (condition1) { /* code */ } else if (condition2) { /* code */ } else { /* code */ }",
      "optionD": "if (condition1) { /* code */ } else if (condition2) else { /* code */ }",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "69",
      "question": "What will the following code output: if (false) { console.log(\"true\"); } else { console.log(\"false\"); }?",
      "optionA": "TRUE",
      "optionB": "FALSE",
      "optionC": "undefined",
      "optionD": "null",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "70",
      "question": "Which loop structure repeats a block of code as long as a condition is true?",
      "optionA": "for",
      "optionB": "while",
      "optionC": "do...while",
      "optionD": "foreach",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "71",
      "question": "What is the correct syntax for a for loop in JavaScript?",
      "optionA": "for (i = 0; i < 5; i++) { /* code */ }",
      "optionB": "for (i < 5; i++) { /* code */ }",
      "optionC": "for i = 1 to 5 { /* code */ }",
      "optionD": "for (i = 0; i < 5) { /* code */ }",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "72",
      "question": "How does a do...while loop differ from a while loop?",
      "optionA": "It checks the condition at the end of the loop",
      "optionB": "It can only run once",
      "optionC": "It checks the condition at the beginning of the loop",
      "optionD": "It cannot have a condition",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "73",
      "question": "Which statement is used to skip the current iteration of a loop?",
      "optionA": "break",
      "optionB": "continue",
      "optionC": "return",
      "optionD": "exit",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "74",
      "question": "How do you exit from a loop in JavaScript?",
      "optionA": "exit",
      "optionB": "return",
      "optionC": "break",
      "optionD": "continue",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "75",
      "question": "How do you create an array in JavaScript?",
      "optionA": "var arr = \"1,2,3\";",
      "optionB": "var arr = (1,2,3);",
      "optionC": "var arr = [1,2,3];",
      "optionD": "var arr = {1,2,3};",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "76",
      "question": "How do you access the first element of an array named arr?",
      "optionA": "arr(0)",
      "optionB": "arr[1]",
      "optionC": "arr[0]",
      "optionD": "arr.0",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "77",
      "question": "Which method is used to add an element to the end of an array?",
      "optionA": "push()",
      "optionB": "pop()",
      "optionC": "shift()",
      "optionD": "unshift()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "78",
      "question": "Which method is used to remove the last element from an array?",
      "optionA": "pop()",
      "optionB": "push()",
      "optionC": "shift()",
      "optionD": "unshift()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "79",
      "question": "How can you find the length of an array?",
      "optionA": "arr.length()",
      "optionB": "arr.size",
      "optionC": "arr.length",
      "optionD": "arr.count",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "80",
      "question": "How do you define an object in JavaScript?",
      "optionA": "var obj = [];",
      "optionB": "var obj = {};",
      "optionC": "var obj = ();",
      "optionD": "var obj = <>;",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "81",
      "question": "How do you access a property of an object?",
      "optionA": "obj[\"property\"]",
      "optionB": "obj.property",
      "optionC": "Both A and B",
      "optionD": "Neither A nor B",
      "answer": "c"
    },
    {
      "type": "JS",
      "question_no": "82",
      "question": "Which method is used to convert a JavaScript object to a JSON string?",
      "optionA": "JSON.stringify()",
      "optionB": "JSON.parse()",
      "optionC": "Object.toString()",
      "optionD": "Object.parse()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "83",
      "question": "How do you delete a property from an object?",
      "optionA": "remove obj.property;",
      "optionB": "delete obj.property;",
      "optionC": "delete obj[\"property\"];",
      "optionD": "Both B and C",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "84",
      "question": "Which method is used to check if an object has a specific property?",
      "optionA": "hasProperty()",
      "optionB": "propertyExists()",
      "optionC": "hasOwnProperty()",
      "optionD": "exists()",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "85",
      "question": "Which of the following is not a primitive data type in JavaScript?",
      "optionA": "String",
      "optionB": "Number",
      "optionC": "Object",
      "optionD": "Boolean",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "86",
      "question": "What is the result of typeof null in JavaScript?",
      "optionA": "\"null\"",
      "optionB": "\"object\"",
      "optionC": "\"undefined\"",
      "optionD": "\"number\"",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "87",
      "question": "Which data type is used to represent true or false values?",
      "optionA": "Number",
      "optionB": "String",
      "optionC": "Boolean",
      "optionD": "Object",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "88",
      "question": "What is the value of undefined in JavaScript?",
      "optionA": "A value that has not been assigned",
      "optionB": "A non-existent object",
      "optionC": "A variable with no value",
      "optionD": "An error in the code",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "89",
      "question": "What is the value of `NaN` in JavaScript?",
      "optionA": "Null value",
      "optionB": "Not available now",
      "optionC": "Not a number",
      "optionD": "Negative number",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "90",
      "question": "How do you define a class in JavaScript?",
      "optionA": "class ClassName { constructor() { /* code */ } }",
      "optionB": "define ClassName { constructor() { /* code */ } }",
      "optionC": "class ClassName [ constructor() { /* code */ } ]",
      "optionD": "create class ClassName { constructor() { /* code */ } }",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "91",
      "question": "How do you create an instance of a class?",
      "optionA": "var obj = new ClassName;",
      "optionB": "var obj = new ClassName();",
      "optionC": "var obj = ClassName();",
      "optionD": "var obj = create ClassName();",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "92",
      "question": "Which of the following is a JavaScript data type?",
      "optionA": "Number",
      "optionB": "String",
      "optionC": "Boolean",
      "optionD": "All of the above",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "93",
      "question": "How do you create a function in JavaScript?",
      "optionA": "function myFunction() { /* code */ }",
      "optionB": "def myFunction() { /* code */ }",
      "optionC": "function:myFunction() { /* code */ }",
      "optionD": "create myFunction() { /* code */ }",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "94",
      "question": "Which event occurs when the user clicks on an HTML element?",
      "optionA": "onmouseover",
      "optionB": "onchange",
      "optionC": "onclick",
      "optionD": "onmouseclick",
      "answer": "3"
    },
    {
      "type": "JS",
      "question_no": "95",
      "question": "How do you round the number 7.25 to the nearest integer?",
      "optionA": "Math.round(7.25)",
      "optionB": "Math.rnd(7.25)",
      "optionC": "round(7.25)",
      "optionD": "rnd(7.25)",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "96",
      "question": "How do you find the minimum of two numbers in JavaScript?",
      "optionA": "Math.min()",
      "optionB": "Math.minimum()",
      "optionC": "Math.lower()",
      "optionD": "Math.lowest()",
      "answer": "1"
    },
    {
      "type": "JS",
      "question_no": "97",
      "question": "How do you write an `if ` statement in JavaScript?",
      "optionA": "if i == 5 then",
      "optionB": "if (i == 5)",
      "optionC": "if i = 5",
      "optionD": "if (i = 5)",
      "answer": "2"
    },
    {
      "type": "JS",
      "question_no": "98",
      "question": "Which function would you use to convert a number to a string in JavaScript?",
      "optionA": "toString()",
      "optionB": "String()",
      "optionC": "convertToString()",
      "optionD": "Both A and B",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "99",
      "question": "What does the `Number()` function do in JavaScript?",
      "optionA": "Converts a number to a string",
      "optionB": "Converts a string to a number",
      "optionC": "Converts a boolean to a number",
      "optionD": "Both B and C",
      "answer": "4"
    },
    {
      "type": "JS",
      "question_no": "100",
      "question": "How do you convert the boolean `true` to a number in JavaScript?",
      "optionA": "Number(true)",
      "optionB": "parseInt(true)",
      "optionC": "true + 0",
      "optionD": "Both A and C",
      "answer": "4"
    }
  ];


function setJSQuestions() {
  
    return jsQuestionsArray;
  }
  
  export { setJSQuestions };