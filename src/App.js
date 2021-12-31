import { useState } from "react";
import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import StudentsTable from "./components/StudentsTable";
import UpdateStudentForm from "./components/UpdateStudentForm";
import TheStudents from "./helpers/Students";

function App() {
  const [addingStudent, setAddingStudent] = useState(false);
  const [originalStudentList, setOriginalStudentList] = useState(TheStudents);
  const [updatingStudent, setUpdatingStudent] = useState(false);
  const [currentStudentToUpdate, setCurrentStudentToUpdate] = useState({});
  const handleUpdateStudent = (student) => {
    setUpdatingStudent(true);
    setCurrentStudentToUpdate({ ...student });
  };
  //i stopped here now gotta make the studentform component and handle the intake then the return of the function
  if (updatingStudent)
    return <UpdateStudentForm Student={currentStudentToUpdate} />;
  return (
    <>
      {!addingStudent && (
        <StudentsTable
          onSetAddingStudent={setAddingStudent}
          Students={originalStudentList}
          onSetOriginalStudentList={setOriginalStudentList}
          onUpdateStudent={handleUpdateStudent}
        />
      )}
      {addingStudent && (
        <AddStudentForm
          onSetAddingStudent={setAddingStudent}
          Students={originalStudentList}
          onSetOriginalStudentList={setOriginalStudentList}
        />
      )}
    </>
  );
}
export default App;

// use react query to fetch data from my small local server (?)
// use context to lift up the responsibility of handling students list and get a single source of truth?
