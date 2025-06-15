import { setHTMLquestions } from "../questions/html-questions.js";
import { setCSSQuestions } from "../questions/css-questions.js";
import { setJSQuestions } from "../questions/js-questions.js";
import { setsoftSkillsQuestions } from "../questions/communication-questions.js";
import { setFundamentalsQuestions } from "../questions/fundamentals-questions.js";

let questionIndex = 0;
let positiveScore = 0;
let negativeScore = 0;
let lastQuestionIndex = 0;

let questionsArray = [];

// GAME ON
function setQuestion(qIndex) {
  document.getElementById("container").style.backgroundColor =
    "rgba(141, 141, 141, 0.063)";
  resetColor();
  activateButton();
  questionIndex = qIndex;

  if (questionIndex >= lastQuestionIndex) {
    endScreen();
  } else {
    showQuestionNumber();
    let object = questionsArray[qIndex];
    document.getElementById("text-display").innerHTML = object.question;
    document.getElementById("answer-one").innerHTML = "A) " + object.optionA;
    document.getElementById("answer-two").innerHTML = "B) " + object.optionB;
    document.getElementById("answer-three").innerHTML = "C) " + object.optionC;
    document.getElementById("answer-four").innerHTML = "D) " + object.optionD;
  }
}

// correct ans
function answerButtonClicked(givenAnswer) {
  let object = questionsArray[questionIndex];

  if (object.answer == givenAnswer) {
    onAnswerClick(true, questionIndex + 1, givenAnswer, object.answer);
  } else {
    onAnswerClick(false, questionIndex + 1, givenAnswer, object.answer);
  }
}
// correct or not
function onAnswerClick(
  correctAnswer,
  nextQuestion,
  buttonClick,
  correctAnswerButton
) {
  disableButton();
  if (correctAnswer) {
    positiveScore += 1;
    document.getElementById("text-display").innerHTML = "Correct Answer. Good";
    document.getElementById("container").style.backgroundColor = "#65b741";
    coloringButtons(correctAnswerButton, buttonClick);
    setTimeout(() => {
      setQuestion(nextQuestion);
    }, 2000);
  } else {
    negativeScore += 1;
    document.getElementById("text-display").innerHTML =
      "Wrong Answer. Need More Practise";
    document.getElementById("container").style.backgroundColor = "#ef4040";
    coloringButtons(correctAnswerButton, buttonClick);
    setTimeout(() => {
      setQuestion(nextQuestion);
    }, 2000);
  }
  showScore();
}

function coloringButtons(greenButton, redbutton) {
  if (greenButton == redbutton) {
    redbutton = 5;
  }
  if (greenButton == 1) {
    document.getElementById("answer-one").style.backgroundColor = "#9BCF53";
  } else if (greenButton == 2) {
    document.getElementById("answer-two").style.backgroundColor = "#9BCF53";
  } else if (greenButton == 3) {
    document.getElementById("answer-three").style.backgroundColor = "#9BCF53";
  } else if (greenButton == 4) {
    document.getElementById("answer-four").style.backgroundColor = "#9BCF53";
  }

  if (redbutton == 1) {
    document.getElementById("answer-one").style.backgroundColor = "#EE4266";
  } else if (redbutton == 2) {
    document.getElementById("answer-two").style.backgroundColor = "#EE4266";
  } else if (redbutton == 3) {
    document.getElementById("answer-three").style.backgroundColor = "#EE4266";
  } else if (redbutton == 4) {
    document.getElementById("answer-four").style.backgroundColor = "#EE4266";
  }
}

function endScreen() {
  document.getElementById("left-containerr").style.display = "none";
}

function resetColor() {
  document.getElementById("answer-one").style.backgroundColor = "#434141";
  document.getElementById("answer-two").style.backgroundColor = "#434141";
  document.getElementById("answer-three").style.backgroundColor = "#434141";
  document.getElementById("answer-four").style.backgroundColor = "#434141";
}
function disableButton() {
  document.getElementById("answer-one").disabled = true;
  document.getElementById("answer-two").disabled = true;
  document.getElementById("answer-three").disabled = true;
  document.getElementById("answer-four").disabled = true;
}

function activateButton() {
  document.getElementById("answer-one").disabled = false;
  document.getElementById("answer-two").disabled = false;
  document.getElementById("answer-three").disabled = false;
  document.getElementById("answer-four").disabled = false;
}

function showScore() {
  document.getElementById("score-one").innerHTML = positiveScore;
  document.getElementById("score-two").innerHTML = negativeScore;
}
function showQuestionNumber() {
  document.getElementById("question-number").innerHTML =
     + (questionIndex + 1);
}

window.onload = function () {
  initializeQuestions();
  showQuestionNumber();
  dostart();
};
// hidden
function dostart() {
  ``;

  resetColor();
  setQuestion(0);
}

function getAllUrlParams(url) {
  // get query string from url (optional) or window
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {
    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split("#")[0];

    // split our query string into its component parts
    var arr = queryString.split("&");

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split("=");

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof a[1] === "undefined" ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === "string") paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {
        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, "");
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === "string") {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}

function initializeQuestions() {
  const queryString = window.location.href;
  const urlParams = getAllUrlParams(queryString);
  var quizType = urlParams?.quiz;

  if (quizType == "html") {
    questionsArray = setHTMLquestions();
  } else if (quizType == "js") {
    questionsArray = setJSQuestions();
  } else if (quizType == "communication") {
    questionsArray = setsoftSkillsQuestions(); // This will now work
  } else if (quizType == "css") {
    questionsArray = setCSSQuestions();
  } else{
    questionsArray = setFundamentalsQuestions();
  }

  lastQuestionIndex = questionsArray.length;
}

window.answerButtonClicked = answerButtonClicked;
