const StudentRow = ({ student, onDelete, studentID, onUpdateStudent }) => {
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
    else if (studentAverageScore < 10 && studentAverageScore >= 9)
      return "table-warnings";
    else return "table-dangers";
  };

  //converts the birthDate data into a readable format
  const calculateBirthDate = (birthDate) => {
    const date = new Date(birthDate);
    return date.toISOString().split("T")[0];
  };

  const getTheRemark = () => {
    if (studentAverageScore >= 10 && studentAverageScore < 12)
      return <td>Passable</td>;
    if (studentAverageScore >= 12 && studentAverageScore < 14)
      return <td>Bien</td>;
    if (studentAverageScore >= 14 && studentAverageScore < 16)
      return <td>Très bien</td>;
    if (studentAverageScore > 16) return <td>Excellent</td>;
    else {
      return <td></td>;
    }
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
        } else if (info === "name") {
          return (
            <td key={student[info]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onUpdateStudent(student);
                }}
              >
                {student[info]}
              </button>
            </td>
          );
        } else {
          return <td key={student[info]}>{student[info]}</td>;
        }
      })}
      {getTheRemark()}
      <td>
        <button className='btn btn-danger' onClick={() => onDelete(studentID)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
