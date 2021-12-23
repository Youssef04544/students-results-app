import Students from "../helpers/Students";
import StudentRow from "./StudentRow";

const StudentsTable = () => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            {Object.keys(Students[0]).map((key) => {
              return (
                <th scope='col' key={key}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Students.map((student) => {
            return <StudentRow student={student} key={student.id} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentsTable;
