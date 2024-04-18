const possiblyPerfect = (key, answers) => {
  const allCorrect = answers.every((answer, i) => key[i] === '_' || answer === key[i]);
  const allWrong = answers.every((answer, i) => key[i] === '_' || answer !== key[i]);
  return allCorrect || allWrong;
}