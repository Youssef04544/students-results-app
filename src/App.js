import "./App.css";
import StudentsTable from "./components/StudentsTable";

function App() {
  return (
    <>
      <StudentsTable />
    </>
  );
}
export default App;

//A table component => a row component for each student that has a delete button
//a seperate search bar component
//no need for react dom we can do conditional rendering between adding student form & the students table
// use react query to fetch data from my small local server (?)
