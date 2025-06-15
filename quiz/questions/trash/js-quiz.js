let jsQuestionsArray = [];

function createQuestion(question, a, b, c, d, answer) {
  let object = {
    question: question,
    optionA: a,
    optionB: b,
    optionC: c,
    optionD: d,
    answer: answer,
  };
  jsQuestionsArray.push(object);
}

function addQuestionsOneToFive() {
  // Question One
  createQuestion(
    "Who created JavaScript?",
    "A) Tim Berners-Lee",
    "B) Brendan Eich",
    "C) Bill Gates",
    "D) James Gosling",
    2
  );
  // Question Two
  createQuestion(
    "In what year was JavaScript first introduced?",
    "A) 1990",
    "B) 1993",
    "C) 1995",
    "D) 1997",
    3
  );
  // Question Three
  createQuestion(
    "Which company developed JavaScript?",
    "A) Microsoft",
    "B) Sun Microsystems",
    "C) Netscape",
    "D) IBM",
    3
  );
  // Question Four
  createQuestion(
    "What was JavaScript originally called?",
    "A) Java",
    "B) LiveScript",
    "C) Mocha",
    "D) ECMAScript",
    3
  );
  // Question Five
  createQuestion(
    "Which version of ECMAScript introduced arrow functions and classes?",
    "A) ES3",
    "B) ES5",
    "C) ES6",
    "D) ES7",
    3
  );
}

function addQuestionsSixToTen() {
  // Question Six
  createQuestion(
    "Which keyword is used to define a function in JavaScript?",
    "A) def",
    "B) function",
    "C) fun",
    "D) func",
    2
  );
  // Question Seven
  createQuestion(
    "How do you call a function named myFunction in JavaScript?",
    "A) call myFunction();",
    "B) myFunction();",
    "C) Call.myFunction();",
    "D) function myFunction();",
    2
  );
  // Question Eight
  createQuestion(
    "What is the correct syntax for a JavaScript arrow function?",
    "A) let myFunction = () => { /* code */ }",
    "B) let myFunction => () { /* code */ }",
    "C) let myFunction = () -> { /* code */ }",
    "D) let myFunction() => { /* code */ }",
    1
  );
  // Question Nine
  createQuestion(
    "How do you return a value from a JavaScript function?",
    "A) exit",
    "B) return",
    "C) stop",
    "D) break",
    2
  );
  // Question Ten
  createQuestion(
    "Which of the following is a valid function expression?",
    "A) var myFunction = function() { /* code */ };",
    "B) var myFunction = () { /* code */ };",
    "C) function = var myFunction() { /* code */ };",
    "D) var myFunction = function { /* code */ };",
    1
  );
}

function addQuestionsElevenToFifteen() {
  // Question Eleven
  createQuestion(
    "What does the === operator do in JavaScript?",
    "A) Compares both value and type",
    "B) Compares only value",
    "C) Assigns a value",
    "D) Checks if a variable is defined",
    1
  );
  // Question Twelve
  createQuestion(
    "Which operator is used to assign a value to a variable?",
    "A) ==",
    "B) =",
    "C) ===",
    "D) =>",
    2
  );
  // Question Thirteen
  createQuestion(
    "What does the typeof operator do in JavaScript?",
    "A) Returns the type of a variable",
    "B) Returns the value of a variable",
    "C) Converts a variable to a string",
    "D) Checks if a variable is undefined",
    1
  );
  // Question Fourteen
  createQuestion(
    "Which operator is used for string concatenation?",
    "A) +",
    "B) &",
    "C) .",
    "D) *",
    1
  );
  // Question Fifteen
  createQuestion(
    "Which logical operator represents 'AND'?",
    "A) ||",
    "B) &&",
    "C) !",
    "D) &",
    2
  );
}

function addQuestionsSixteenToTwenty() {
  // Question Sixteen
  createQuestion(
    "What is the correct syntax for an if statement in JavaScript?",
    "A) if i == 5 then { /* code */ }",
    "B) if (i == 5) { /* code */ }",
    "C) if i = 5 then { /* code */ }",
    "D) if (i = 5) { /* code */ }",
    2
  );
  // Question Seventeen
  createQuestion(
    "How do you write an else statement in JavaScript?",
    "A) else (i == 5) { /* code */ }",
    "B) else { /* code */ }",
    "C) else if (i == 5) { /* code */ }",
    "D) else i == 5 { /* code */ }",
    2
  );
  // Question Eighteen
  createQuestion(
    "Which statement is used to stop a loop or switch statement?",
    "A) stop",
    "B) break",
    "C) return",
    "D) exit",
    2
  );
  // Question Nineteen
  createQuestion(
    "What is the correct syntax for an if...else if...else statement?",
    "A) if (condition1) { /* code */ } else (condition2) { /* code */ } else { /* code */ }",
    "B) if (condition1) { /* code */ } else if (condition2) { /* code */ } else { /* code */ }",
    "C) if (condition1) { /* code */ } else if (condition2) else { /* code */ }",
    "D) if (condition1) { /* code */ } else if (condition2) { /* code */ } else if { /* code */ }",
    2
  );
  // Question Twenty
  createQuestion(
    "What will the following code output: if (false) { console.log('true'); } else { console.log('false'); }?",
    "A) true",
    "B) false",
    "C) undefined",
    "D) null",
    2
  );
}

function addQuestionsTwentyOneToTwentyFive() {
  // Question Twenty-One
  createQuestion(
    "Which loop structure repeats a block of code as long as a condition is true?",
    "A) for",
    "B) while",
    "C) do...while",
    "D) foreach",
    2
  );
  // Question Twenty-Two
  createQuestion(
    "What is the correct syntax for a for loop in JavaScript?",
    "A) for (i = 0; i < 5; i++) { /* code */ }",
    "B) for (i < 5; i++) { /* code */ }",
    "C) for i = 1 to 5 { /* code */ }",
    "D) for (i = 0; i < 5) { /* code */ }",
    1
  );
  // Question Twenty-Three
  createQuestion(
    "How does a do...while loop differ from a while loop?",
    "A) It checks the condition at the end of the loop",
    "B) It can only run once",
    "C) It checks the condition at the beginning of the loop",
    "D) It cannot have a condition",
    1
  );
  // Question Twenty-Four
  createQuestion(
    "Which statement is used to skip the current iteration of a loop?",
    "A) break",
    "B) continue",
    "C) return",
    "D) exit",
    2
  );
  // Question Twenty-Five
  createQuestion(
    "How do you exit from a loop in JavaScript?",
    "A) exit",
    "B) return",
    "C) break",
    "D) continue",
    3
  );
}

function addQuestionsTwentySixToThirty() {
  // Question Twenty-Six
  createQuestion(
    "How do you create an array in JavaScript?",
    "A) var arr = '1,2,3';",
    "B) var arr = (1,2,3);",
    "C) var arr = [1,2,3];",
    "D) var arr = {1,2,3};",
    3
  );
  // Question Twenty-Seven
  createQuestion(
    "How do you access the first element of an array named arr?",
    "A) arr(0)",
    "B) arr[1]",
    "C) arr[0]",
    "D) arr.0",
    3
  );
  // Question Twenty-Eight
  createQuestion(
    "Which method is used to add an element to the end of an array?",
    "A) push()",
    "B) pop()",
    "C) shift()",
    "D) unshift()",
    1
  );
  // Question Twenty-Nine
  createQuestion(
    "Which method is used to remove the last element from an array?",
    "A) pop()",
    "B) push()",
    "C) shift()",
    "D) unshift()",
    1
  );
  // Question Thirty
  createQuestion(
    "How can you find the length of an array?",
    "A) arr.length()",
    "B) arr.size",
    "C) arr.length",
    "D) arr.count",
    3
  );
}

function addQuestionsThirtyOneToThirtyFive() {
  // Question Thirty-One
  createQuestion(
    "Which method is used to sort an array in JavaScript?",
    "A) order()",
    "B) arrange()",
    "C) sort()",
    "D) sequence()",
    3
  );
  // Question Thirty-Two
  createQuestion(
    "How do you add an element to the beginning of an array?",
    "A) push()",
    "B) pop()",
    "C) shift()",
    "D) unshift()",
    4
  );
  // Question Thirty-Three
  createQuestion(
    "Which method is used to combine two arrays?",
    "A) combine()",
    "B) concat()",
    "C) merge()",
    "D) append()",
    2
  );
  // Question Thirty-Four
  createQuestion(
    "How do you remove the first element from an array?",
    "A) pop()",
    "B) shift()",
    "C) unshift()",
    "D) splice()",
    2
  );
  // Question Thirty-Five
  createQuestion(
    "Which method is used to find the index of an element in an array?",
    "A) find()",
    "B) search()",
    "C) indexOf()",
    "D) locate()",
    3
  );
}

function addQuestionsThirtySixToForty() {
  // Question Thirty-Six
  createQuestion(
    "How do you define an object in JavaScript?",
    "A) var obj = [];",
    "B) var obj = {};",
    "C) var obj = ();",
    "D) var obj = '';",
    2
  );
  // Question Thirty-Seven
  createQuestion(
    "How do you access a property of an object in JavaScript?",
    "A) obj[property]",
    "B) obj.property",
    "C) obj->property",
    "D) A and B",
    4
  );
  // Question Thirty-Eight
  createQuestion(
    "Which method is used to add a new property to an object?",
    "A) obj.addProperty()",
    "B) obj.newProperty = value;",
    "C) obj.createProperty()",
    "D) obj.property(value);",
    2
  );
  // Question Thirty-Nine
  createQuestion(
    "How do you delete a property from an object?",
    "A) delete obj.property;",
    "B) obj.property = undefined;",
    "C) obj.remove(property);",
    "D) obj.property = null;",
    1
  );
  // Question Forty
  createQuestion(
    "How do you check if a property exists in an object?",
    "A) property in obj",
    "B) obj.hasProperty(property)",
    "C) obj.contains(property)",
    "D) obj.includes(property)",
    1
  );
}

function addQuestionsFortyOneToFortyFive() {
  // Question FourtyOne
  createQuestion(
    "Which statement is used to create a class in JavaScript?",
    "A) class ClassName { }",
    "B) create class ClassName { }",
    "C) function ClassName() { }",
    "D) class: ClassName { }",
    1
  );
  //   Question FourtyTwo
  createQuestion(
    "How do you create an instance of a class?",
    "A) var obj = new ClassName();",
    "B) var obj = ClassName();",
    "C) var obj = create ClassName();",
    "D) var obj = construct ClassName();",
    1
  );
  //   Question FourtyThree
  createQuestion(
    "Which of the following is a primitive data type in JavaScript?",
    "A) Number",
    "B) String",
    "C) Boolean",
    "D) All of the above",
    4
  );
  //   Question FourtyFour
  createQuestion(
    "What is the output of typeof null in JavaScript?",
    "A) null",
    "B) undefined",
    "C) object",
    "D)number",
    3
  );
  //   Question FourtyFive
  createQuestion(
    "What is the output of typeof NaN in JavaScript?",

    "A) NaN",
    "B) number",
    "C) undefined",
    "D) string",
    2
  );
}
function addQuestionsFortySixToFifty() {
  // Question Forty-Six
  createQuestion(
    "What will the following code output? console.log(2 - true);",
    "A) 1",
    "B) 2",
    "C) true",
    "D) NaN",
    1
  );
  // Question Forty-Seven
  createQuestion(
    "What will the following code output? console.log(2 * true);",
    "A) 2",
    "B) 3",
    "C) true",
    "D) NaN",
    1
  );
  // Question Forty-Eight
  createQuestion(
    "What will the following code output? console.log(2 / true);",
    "A) 2",
    "B) 1",
    "C) true",
    "D) NaN",
    1
  );
  // Question Forty-Nine
  createQuestion(
    "What will the following code output? console.log(0.1 + 0.2 == 0.3);",
    "A) true",
    "B) false",
    "C) undefined",
    "D) null",
    2
  );
  // Question Fifty
  createQuestion(
    "Which method can be used to convert a JavaScript object into a JSON string?",
    "A) JSON.parse()",
    "B) JSON.stringify()",
    "C) Object.toJSON()",
    "D) Object.stringify()",
    2
  );
}
function addQuestionsFiftyOneToFiftyFive() {
  // Question Fifty-One
  createQuestion(
    "Which keyword is used to define a constant in JavaScript?",
    "A) var",
    "B) let",
    "C) const",
    "D) constant",
    3
  );
  // Question Fifty-Two
  createQuestion(
    "How do you create an anonymous function in JavaScript?",
    "A) function() {}",
    "B) function {}",
    "C) create function() {}",
    "D) function anonymous() {}",
    1
  );
  // Question Fifty-Three
  createQuestion(
    "Which method is used to add new properties to an object in JavaScript?",
    "A) Object.defineProperty()",
    "B) Object.addProperty()",
    "C) Object.newProperty()",
    "D) Object.createProperty()",
    1
  );
  // Question Fifty-Four
  createQuestion(
    "What will the following code output? console.log(typeof undefined == typeof null);",
    "A) true",
    "B) false",
    "C) undefined",
    "D) null",
    1
  );
  // Question Fifty-Five
  createQuestion(
    "Which method is used to remove whitespace from both ends of a string?",
    "A) strip()",
    "B) trim()",
    "C) cut()",
    "D) slice()",
    2
  );
}
function addQuestionsFiftysixToSixty() {
  // Question Fifty-Six
  createQuestion(
    "Which method can be used to find the smallest number in an array?",
    "A) Math.max()",
    "B) Math.min()",
    "C) Math.floor()",
    "D) Math.ceil()",
    2
  );
  // Question Fifty-Seven
  createQuestion(
    "What is the output of Boolean(0) in JavaScript?",
    "A) true",
    "B) false",
    "C) undefined",
    "D) null",
    2
  );
  // Question Fifty-Eight
  createQuestion(
    "How do you convert a string to an integer in JavaScript?",
    "A) parseInt()",
    "B) parseFloat()",
    "C) toString()",
    "D) toNumber()",
    1
  );
  // Question fifty-Nine
  createQuestion(
    "How do you convert a number to a string in JavaScript?",
    "A) parseInt()",
    "B) parseFloat()",
    "C) toString()",
    "D) toNumber()",
    3
  );
  // Question Sixty
  createQuestion(
    "What is the output of typeof NaN?",
    "A) number",
    "B) string",
    "C) undefined",
    "D) null",
    1
  );
}
function addQuestionsSixtyOneToSixtyFive() {
  // Question Sixty-One
  createQuestion(
    "What is the output of typeof null?",
    "A) number",
    "B) string",
    "C) undefined",
    "D) null",
    4
  );
  // Question Sixty-Two
  createQuestion(
    "How do you define an array with three elements: 1, 2, and 3?",
    "A) var arr = [1, 2, 3];",
    "B) var arr = {1, 2, 3};",
    "C) var arr = [1, 2, 3];",
    "D) var arr = {1, 2, 3};",
    1
  );
  // Question Sixty-Three
  createQuestion(
    "How do you access the second element of an array?",
    "A) var arr = [1, 2, 3];",
    "B) var arr = {1, 2, 3}:",
    "C) var arr = [1, 2, 3];",
    "D) var arr = {1, 2, 3};",
    4
  );
  // Question Sixty-Four
  createQuestion(
    "Which method can be used to merge two arrays?",
    "A) concat()",
    "B) join()",
    "C) push()",
    "D) pop()",
    1
  );
  // Question Sixty-Five
  createQuestion(
    "Which keyword is used to declare a block-scoped variable?",
    "A) var",
    "B) let",
    "C) const",
    "D) both B and C",
    4
  );
}
function addQuestionsSixtySixToSeventy() {
  // Question Sixty-Six
  createQuestion(
    "What will the following code output? console.log(0.1 + 0.2 == 0.3);",
    "(A) true",
    "(B) false",
    "(C) 0.3",
    "(D) 0.30000000000000004",
    2
  );
  // Question Sixty-Seven
  createQuestion(
    "Which method can be used to find the largest number in an array?",
    "A) Math.max()",
    "B) Math.min()",
    "C) Math.floor()",
    "D) Math.ceil()",
    1
  );

  // Question Sixty-Eight
  createQuestion(
    "What is the output of Boolean(0) in JavaScript?",
    "A) true",
    " B) false",
    "C) undefined",
    " D) null",
    2
  );
  // Question Sixty-Nine
  createQuestion(
    "How do you convert a string to an integer in JavaScript?",
    "A) parseInt()",
    "B) parseFloat()",
    "C) toString()",
    "D) toInt()",
    1
  );
  // Question Seventy
  createQuestion(
    "Which method can be used to convert an array to a string?",
    "A) toString()",
    "B) toArray()",
    "C) toJSON()",
    "D) toValue()",
    1
  );
}
function addQuestionsSeventyOneToSeventyFive() {
  // Question Seventy-One
  createQuestion(
    "Which method can be used to create a new array with all elements that pass a test?",
    "A) filter()",
    "B) map()",
    " C) reduce()",
    " D) forEach()",
    1
  );
  // Question Seventy-Two
  createQuestion(
    "Which method can be used to create a new array with all elements that pass a test?",
    "A) filter()",
    " B) map()",
    " C) reduce()",
    "D) forEach()",
    1
  );
  // Question Seventy-Three
  createQuestion(
    "Which method can be used to combine two or more arrays into a single array?",
    "A) concat()",
    "B) combine()",
    " C) merge()",
    "D) join()",
    1
  );
  // Question Seventy-Four
  createQuestion(
    "What is the output of parseInt(10.5)?",
    "A) 10.5",
    "B) 10",
    "C) NaN",
    "D) undefined",
    1
  );
  // Question Seventy-Five
  createQuestion(
    "What will the following code output? console.log(2 * null);",
    "A) 2",
    "B) 0",
    "C) null",
    "D) NaN",
    2
  );
}
function addQuestionsSeventySixToEighty() {
  // Question Seventy-Six
  createQuestion(
    "What will the following code output? console.log(2 * 2);",
    "A) 4",
    "B) 22",
    " C) NaN",
    "D) undefined",
    4
  );
  // Question Seventy-Seven
  createQuestion(
    "What will the following code output? console.log(2 + 2);",
    "A) 4",
    "B) 22",
    "C) NaN",
    "D) undefined",
    1
  );
  // Question Seventy-Eight
  createQuestion(
    "What will the following code output? console.log(false + true);",
    "A) 1",
    "B) 0",
    "C) true",
    "D) false",
    1
  );
  // Question Seventy-Nine
  createQuestion(
    "How do you create an object in JavaScript?",
    " A) var obj = {};",
    "B) var obj = [];",
    "C) var obj = ();",
    "D) var obj = <>;",
    1
  );
  // Question Eighty
  createQuestion(
    "How do you add a property to a JavaScript object?",
    "A) obj[property] = value;",
    "B) obj.property = value;",
    "C) obj.addProperty(property, value);",
    "D) Both A and B",
    4
  );
}
function addQuestionsEightyOneToEightyFive() {
  // Question Eighty-One
  createQuestion(
    "How do you delete a property from a JavaScript object?",
    "A) delete obj.property",
    "B) obj.removeProperty(property)",
    "C) obj.deleteProperty(property)",
    "D) Remove obj.property",
    1
  );
  // Question Eighty-Two
  createQuestion(
    "How do you access the first element of an array?",
    "A) arr[0]",
    "B) arr(0)",
    "C) arr{0}",
    "D) arr<0>",
    1
  );
  // Question Eighty-Three
  createQuestion(
    "How do you find the length of an array in JavaScript?",
    "A) arr.size",
    "B) arr.length",
    "C) arr.count",
    "D) arr.len",
    2
  );
  // Question Eighty-Four
  createQuestion(
    "How do you add an element to the end of an array in JavaScript?",
    "A) arr.append()",
    "B) arr.add()",
    "C) arr.push()",
    "D) arr.insert()",
    3
  );
  // Question Eighty-Five
  createQuestion(
    "Which of the following is a correct for loop syntax in JavaScript?",
    "A) for i = 1 to 10",
    "B) for (i = 0; i < 10; i++)",
    "C) for (i < 10; i++)",
    "D) for (i = 0; i < 10)",
    2
  );
}
function addQuestionsEightySixToNinety() {
  // Question Eighty-Six
  createQuestion(
    "What will the following code output? console.log(true + false);",
    "A) 1",
    " B) 0",
    " C) true",
    "D) NaN"
  );
  // Question Eighty-Seven
  createQuestion(
    "What will the following code output? console.log(NaN + NaN);",
    "A) NaN",
    " B) 0",
    "C) undefined",
    "D) null",
    1
  );
  // Question Eighty-Eight
  createQuestion(
    "What is the purpose of the spread operator (...) in JavaScript?",
    "A) To spread the elements of an array or object",
    "B) To concatenate strings",
    "C) To multiply numbers",
    "D) To divide numbers",
    1
  );
  // Question Eighty-Nine
  createQuestion(
    "What will the following code output? console.log(2 + true);",
    " A) 3",
    " B) 2",
    " C) true",
    " D) NaN",
    3
  );
  // Questioin Ninety
  createQuestion(
    "What will the following code output? console.log(2 - true);",
    "A) 1",
    "B) 2",
    "C) true",
    " D) NaN",
    1
  );
}
function addQuestionsNinetyOneToNinetyFive() {
  // Question Ninety-One
  createQuestion(
    "What does the isNaN() function do in JavaScript?",
    "A) Checks if a value is a number",
    " B) Checks if a value is not a number",
    "C) Converts a value to a number",
    " D) Converts a value to a string",
    2
  );
  // Question Ninety-Two
  createQuestion(
    "Which of the following is not a looping structure in JavaScript?",
    "A) for",
    " B) while",
    " C) do-while",
    " D) foreach",
    4
  );
  // Question Ninety-Three
  createQuestion(
    "Which operator is used for addition in JavaScript?",
    "A) -",
    "  B) +",
    "  C) *",
    " D) /",
    2
  );
  // Question Ninety-Four
  createQuestion(
    "Which of the following is the correct syntax for a while loop in JavaScript?",
    "A) while i < 10 { }",
    "B) while (i < 10) { }",
    " C) while (i < 10) [ ]",
    " D) while i < 10: { }",
    2
  );
  // Question Ninety-Five
  createQuestion(
    "Which method is used to sort the elements of an array?",
    "A) arr.order()",
    " B) arr.sort()",
    " C) arr.align()",
    "D) arr.arrange()",
    2
  );
}
function addQuestionsNinetySixToOneHundred() {
  // Question Ninety-Six
  createQuestion(
    "What is the difference between setTimeout() and setInterval() functions in JavaScript?",
    "A) setTimeout() executes a function once after a specified delay, whereas setInterval() executes a function repeatedly at a specified interval",
    "B) setTimeout() executes a function repeatedly at a specified interval, whereas setInterval() executes a function once after a specified delay",
    "C) There is no difference between setTimeout() and setInterval()",
    "D) setTimeout() and setInterval() are used for handling events, not for executing functions",
    1
  );
  // Question Ninety-Seven
  createQuestion(
    "Which method is used to join elements of an array into a string?",
    "A) concat()",
    "B) join()",
    "C) merge()",
    "D) combine()",
    2
  );
  // Question Ninety-Eight
  createQuestion(
    "What is the correct way to check if a variable 'x' is undefined?",
    "A) if (x === undefined)",
    "B) if (x == undefined)",
    "C) if (x != undefined)",
    "D) if (x !== undefined)",
    1
  );
  // Question Ninety-Nine
  createQuestion(
    "Which loop is guaranteed to run at least once in JavaScript?",
    "A) for loop",
    "B) while loop",
    "C) do-while loop",
    "D) for-in loop",
    3
  );
  // Question One Hundred
  createQuestion(
    "What will the following code output: if (false) { console.log(true); } else { console.log(false); }?",
    "A) True",
    "B) False",
    "C) SyntaxError",
    "D) ReferenceError",
    2
  );
}

function setJSQuestions() {
  addQuestionsOneToFive();
  addQuestionsSixToTen();
  addQuestionsElevenToFifteen();
  addQuestionsSixteenToTwenty();
  addQuestionsTwentyOneToTwentyFive();
  addQuestionsTwentySixToThirty();
  addQuestionsThirtyOneToThirtyFive();
  addQuestionsThirtySixToForty();
  addQuestionsFortyOneToFortyFive();
  addQuestionsFortySixToFifty();
  addQuestionsFiftyOneToFiftyFive();
  addQuestionsFiftySixToSixty();
  addQuestionSixtyOneToSixtyFive();
  addQuestionSixtySixToSeventy();
  addQuestionSeventyOneToSeventyFive();
  addQuestionSeventySixToEighty();
  addQuestionEightyOneToEightyFive();
  addQuestionEightySixToNinety();
  addQuestionNinetyOneToNinetyFive();
  addQuestionNinetySixToOneHundred();

  return jsQuestionsArray;
}

export { setJSQuestions };
