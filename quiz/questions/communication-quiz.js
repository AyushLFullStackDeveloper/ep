let softSkillsQuestionsArray = [];

function createQuestion(question, a, b, c, d, answer) {
  let object = {
    question: question,
    optionA: a,
    optionB: b,
    optionC: c,
    optionD: d,
    answer: answer,
  };
  softSkillsQuestionsArray.push(object);
}

function addFirstFiveQuestion() {
  //FIrst Question
  createQuestion(
    "What ____ you doing tomorrow evening?",
    "do",
    "did",
    "are",
    "were",
    3
  );
  //Second Question
  createQuestion(
    "She ____ to the gym three times a week.",
    "go",
    "goes",
    "is going",
    "went",
    2
  );

  //Third Question
  createQuestion(
    "They ____ TV last night.",
    "don't watch",
    "aren't watching",
    "didn't watch",
    "doesn't watch",
    1
  );
}

function setsoftSkillsQuestions() {
  addFirstFiveQuestion();

  return softSkillsQuestionsArray;
}

export { setsoftSkillsQuestions };
