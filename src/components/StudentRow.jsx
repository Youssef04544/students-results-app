const StudentRow = ({ student }) => {
  //gets all the props of a student Object so we can map through them in a row
  const studentInfo = Object.keys(student);

  //calculates the average score for each student following a formula
  // const calculateScore = (score) => {
  //   const averageScore =
  //     (score.firstTermScore +
  //       (score.secondTermScore + score.thirdTermScore) * 2) /
  //     5;
  //   return averageScore;
  // };
  const studentScores = student.score[0];
  const studentAverageScore =
    (studentScores.firstTermScore +
      (studentScores.secondTermScore + studentScores.thirdTermScore) * 2) /
    5;
  return (
    <tr>
      {studentInfo.map((info) => {
        if (info !== "score") {
          return <td key={student[info]}>{student[info]}</td>;
        } else {
          return <td key={studentAverageScore}>{studentAverageScore}</td>;
        }
      })}
    </tr>
  );
};

export default StudentRow;
