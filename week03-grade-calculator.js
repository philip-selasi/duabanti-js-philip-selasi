/*
  Week 3 — Grade Calculator
  Submission by Philip Selasi
*/

// 1. Calculate the average of a list of scores
function average(scores) {
  if (scores.length === 0) {
    return 0; 
  }

  let total = 0;

  for (let score of scores) {
    total += score;
  }

  return total / scores.length;
}

// 2. Convert a score into a letter grade
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

// 3. Check whether a score is valid
function isValidScore(score) {
  return score >= 0 && score <= 100;
}

// 4. Get scores from the terminal or use a default list
const args = process.argv.slice(2);

const scores = args.length > 0
  ? args.map(Number)
  : [72, 45, 91, 105, -5, 88];

// 5. Process the scores
const validScores = [];
let passed = 0;
let failed = 0;

console.log("GRADE CALCULATOR");
console.log("----------------");

for (let score of scores) {
  if (isValidScore(score)) {
    const grade = getGrade(score);

    console.log(`Score: ${score} | Grade: ${grade}`);

    validScores.push(score);

    if (score >= 50) {
      passed++;
    } else {
      failed++;
    }
  } else {
    console.log(`Score: ${score} | Invalid score - skipped`);
  }
}

// 6. Print the overall average and results
console.log("----------------");
console.log(`Average: ${average(validScores).toFixed(2)}`);
console.log(`Students passed: ${passed}`);
console.log(`Students failed: ${failed}`);