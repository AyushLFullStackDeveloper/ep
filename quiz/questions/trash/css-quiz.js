

function createQuestion(question, a, b, c, d, answer) {
  let object = {
    question: question,
    optionA: a,
    optionB: b,
    optionC: c,
    optionD: d,
    answer: answer,
  };
  cssQuestionsArray.push(object);
}

function addFirstFiveQuestion() {
  //FIrst Question
  createQuestion(
    "CSS HTML stands for?",
    "Hyper Text Marking Language",
    "Hypen Text Markup Language",
    "Hyper Text Markup Language",
    "Hyperlinks and Text Markup Language",
    3
  );
  //Second Question
  createQuestion(
    "CSS What is the correct HTML element for inserting a line break?",
    "lb",
    "break",
    "br",
    "linebreak",
    3
  );

  //Third Question
  createQuestion(
    "CSS What is the correct HTML element for inserting a horizontal rule?",
    "hr",
    "line",
    "rule",
    "hline",
    1
  );
}

function setCSSQuestions() {
  addFirstFiveQuestion();

  return cssQuestionsArray;
}

export { setCSSQuestions };
