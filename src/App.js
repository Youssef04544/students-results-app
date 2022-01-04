import { useState } from "react";
import "./App.css";
import StudentsTable from "./components/StudentsTable";
import StudentForm from "./components/StudentForm";
import TheStudents from "./helpers/Students";
import { useQuery } from "react-query";

function App() {
  // const [addingStudent, setAddingStudent] = useState(false);
  // const [updatingStudent, setUpdatingStudent] = useState(false);
  const [studentFormOpen, setStudentFormOpen] = useState(false);
  const [originalStudentList, setOriginalStudentList] = useState(TheStudents);
  const [currentStudentToUpdate, setCurrentStudentToUpdate] = useState({});
  const handleUpdateStudent = (student) => {
    setStudentFormOpen(true);
    setCurrentStudentToUpdate({ ...student });
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, isLoading } = useQuery(["students"], () =>
    fetcher("http://localhost:3001/api/get-students")
  );

  if (!isLoading) console.log(data);

  if (studentFormOpen)
    return (
      <StudentForm
        Student={currentStudentToUpdate}
        onSetOriginalStudentList={setOriginalStudentList}
        onSetStudentFormOpen={setStudentFormOpen}
        onSetCurrentStudentToUpdate={setCurrentStudentToUpdate}
      />
    );
  return (
    <>
      <StudentsTable
        onSetStudentFormOpen={setStudentFormOpen}
        Students={originalStudentList}
        onSetOriginalStudentList={setOriginalStudentList}
        onUpdateStudent={handleUpdateStudent}
      />
    </>
  );
}
export default App;

// use react query to fetch data from my small local server (?)
// use context to lift up the responsibility of handling students list and get a single source of truth?
