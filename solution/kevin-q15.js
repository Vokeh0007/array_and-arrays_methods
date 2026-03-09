let students = [
  { name: "Kevin", scores: [80, 75, 90] },
  { name: "Alice", scores: [60, 65, 70] },
  { name: "Brian", scores: [50, 45, 55] },
  { name: "Diana", scores: [90, 95, 92] }
];
console.log("Student Scores:");

let reports = studentReport(students);
console.log("Student Reports:", reports);

function studentReport(arr) {

  let reports = [];

  for (let i = 0; i < arr.length; i++) {

    let total = 0;

    for (let j = 0; j < arr[i].scores.length; j++) {
      total += arr[i].scores[j];
    }

    let average = total / arr[i].scores.length;

    let grade;

    if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    reports[i] = {
      name: arr[i].name,
      average: average,
      grade: grade
    };
  }

  return reports;
}
console.log("Student Reports:", reports);
let result = studentReport(students);
console.log(result);


function turnOn(){

    document.getElementById("light").style.display = "block";

}

function turnOff(){

    document.getElementById("light").style.display = "none";

}