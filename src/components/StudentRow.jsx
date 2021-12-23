const StudentRow = ({ student }) => {
  //gets all the props of a student Object so we can map through them in a row
  const studentInfo = Object.keys(student);

  //calculates the average score for each student following a formula
  const studentScores = student.score[0];
  const studentAverageScore =
    (studentScores.firstTermScore +
      (studentScores.secondTermScore + studentScores.thirdTermScore) * 2) /
    5;

  //checks if the students passes or not to color the row accordingly
  const rowStyle = () => {
    if (studentAverageScore >= 10) return "table-infos";
    else return "table-dangers";
  };

  //converts the birthDate data into a readable format
  const calculateBirthDate = (birthDate) => {
    const date = new Date(birthDate);
    return date.toISOString().split("T")[0];
  };

  return (
    <tr className={rowStyle()}>
      {studentInfo.map((info) => {
        if (info === "score") {
          return <td key={studentAverageScore}>{studentAverageScore}</td>;
        } else if (info === "birthDate") {
          return (
            <td key={student[info]}>{calculateBirthDate(student[info])}</td>
          );
        } else {
          return <td key={student[info]}>{student[info]}</td>;
        }
      })}
    </tr>
  );
};

export default StudentRow;
