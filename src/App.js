import { useState } from "react";
import "./App.css";
import StudentsTable from "./components/StudentsTable";
import StudentForm from "./components/StudentForm";
import { useQuery, useMutation } from "react-query";
import client from "./react-query-client";

function App() {
  const [studentFormOpen, setStudentFormOpen] = useState(false);
  const [currentStudentToUpdate, setCurrentStudentToUpdate] = useState({});
  const handleUpdateStudent = (student) => {
    setStudentFormOpen(true);
    setCurrentStudentToUpdate({ ...student });
  };
  //All the fetching logic and react query
  const fetcherPOST = (url, body) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  const fetcherPUT = (url, body) =>
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  const fetcherDELETE = (url, body) =>
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  const {
    data: studentsList,
    isLoading,
    isError,
  } = useQuery("students", () =>
    fetch("http://localhost:3001/api/get-students").then((res) => res.json())
  );

  const mutationAdd = useMutation(
    (body) => fetcherPOST("http://localhost:3001/api/update-student", body),
    {
      onSuccess(data) {
        console.log("Got response from backend after adding", data);
        client.invalidateQueries("students");
      },
      onError(error) {
        console.log("Got error from backend after adding", error);
      },
    }
  );
  const mutationUpdate = useMutation(
    (body) => fetcherPUT(`http://localhost:3001/api/update-student`, body),
    {
      onSuccess(data) {
        console.log("Got response from backend after updating", data);
        client.invalidateQueries("students");
      },
      onError(error) {
        console.log("Got error from backend after updating", error);
      },
    }
  );
  const mutationDelete = useMutation(
    (body) => fetcherDELETE(`http://localhost:3001/api/update-student`, body),
    {
      onSuccess(data) {
        console.log("Got response from backend after deleting", data);
        client.invalidateQueries("students");
      },
      onError(error) {
        console.log("Got error from backend after deleting", error);
      },
    }
  );

  function callMutationAdd(student) {
    mutationAdd.mutate({ student });
  }

  function callMutationUpdate(student) {
    mutationUpdate.mutate({ student });
  }
  function callMutationDelete(student) {
    mutationDelete.mutate({ student });
  }

  if (isLoading) return <h3>Data loading...</h3>;
  if (isError) return <h3>Error with request</h3>;

  if (studentFormOpen)
    return (
      <StudentForm
        Student={currentStudentToUpdate}
        onAddStudent={callMutationAdd}
        onSetStudentFormOpen={setStudentFormOpen}
        onSetCurrentStudentToUpdate={setCurrentStudentToUpdate}
        studentsList={studentsList}
        onUpdateStudent={callMutationUpdate}
      />
    );
  return (
    <>
      <StudentsTable
        onSetStudentFormOpen={setStudentFormOpen}
        Students={studentsList}
        onUpdateStudent={handleUpdateStudent}
        onStudentDelete={callMutationDelete}
      />
    </>
  );
}
export default App;
