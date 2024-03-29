function twiceAsOld(dadYearsOld, sonYearsOld) {
let answer = dadYearsOld - sonYearsOld * 2;
return answer < 0 ? answer * (-1) : answer;
}