const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  const win = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };
  return `Player ${win[p1] === p2 ? "1" : "2"} won!`;
};
function manageStudentGrades(studentRecords) {
  var grades = studentRecords.map(getGrade);

  return addGrade;

  // ************************

  function getGrade(record) {
    return record.grade;
  }

  function sortAndTrimGradesList() {
    // sort by grades, descending
    grades.sort(function desc(g1, g2) {
      return g2 - g1;
    });

    // only keep the top 10 grades
    grades = grades.slice(0, 10);
  }

  function addGrade(newGrade) {
    grades.push(newGrade);
    sortAndTrimGradesList();
    return grades;
  }
}
