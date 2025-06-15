function createQuestion(question, a, b, c, d, answer) {
  let object = {
    question: question,
    optionA: a,
    optionB: b,
    optionC: c,
    optionD: d,
    answer: answer,
  };
  fundamentalsQuestionsArray.push(object);
}

function addFirstFiveQuestion() {
  //FIrst Question
  createQuestion(
    "How does a ceiling fan work?",
    "By rotating its head",
    "By pushing air with rotating blades",
    "Hyper Text Markup Language",
    "By vibrating",
    2
  );
  //Second Question
  createQuestion(
    "What material is commonly used to make cement?",
    "Sand only",
    "Limestone and clay",
    "Wood",
    "Plastic",
    2
  );

  //Third Question
  createQuestion(
    "How does a solar lamp generate light?",
    "From moonlight",
    "Using stored solar energy in a battery",
    "By water pressure",
    "By air pressure",
    2
  );
}

function setFundamentalsQuestions() {
  addFirstFiveQuestion();
  return fundamentalsQuestionsArray;
}

export { setFundamentalsQuestions };