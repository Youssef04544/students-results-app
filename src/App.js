import { useState } from "react";
import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import StudentsTable from "./components/StudentsTable";

function App() {
  const [addingStudent, setAddingStudent] = useState(false);
  return (
    <>
      {!addingStudent && <StudentsTable />}
      {/* <AddStudentForm /> */}
    </>
  );
}
export default App;

//A table component => a row component for each student that has a delete button
//a seperate search bar component
//no need for react dom we can do conditional rendering between adding student form & the students table
// use react query to fetch data from my small local server (?)
