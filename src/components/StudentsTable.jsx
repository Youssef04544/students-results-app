import React, { useState, useEffect } from "react";
import StudentRow from "./StudentRow";

const StudentsTable = ({
  onSetStudentFormOpen,
  Students,
  onUpdateStudent,
  onStudentDelete,
}) => {
  const [currentStudents, setCurrentStudents] = useState(Students);
  const [gotStudents, setGotStudents] = useState(true);
  const [currentSort, setCurrentSort] = useState(""); // use for performance so we dont resort the list if it's already sorted by the chosen sorting value
  const [currentFilter, setCurrentFilter] = useState("");

  useEffect(() => {
    //checks to make sure we're not filtering or sorting so it can show the complete list of students
    if (!currentSort && !currentFilter) setCurrentStudents(Students);
  }, [Students, currentFilter, currentSort]);

  const filterStudents = (filterName) => {
    // if no filter applied, shows all the students
    setCurrentFilter(filterName);
    if (filterName === "") {
      setCurrentStudents(Students);
    } else {
      let filteredStudents = Students.filter((student) => {
        return student.name.toLowerCase().includes(filterName.toLowerCase());
      });
      setCurrentStudents(filteredStudents);
      if (filteredStudents.length >= 1 && !gotStudents) setGotStudents(true);
      else if (filteredStudents.length === 0 && gotStudents)
        setGotStudents(false);
    }
  };

  //sorts the table by score "asc"
  const sortTableScore = () => {
    const sortedTable = currentStudents.sort((student1, student2) => {
      const score1 = getAverageScore(student1.score[0]);
      const score2 = getAverageScore(student2.score[0]);
      if (score1 > score2) return 1;
      if (score1 < score2) return -1;
      if (score1 === score2) return 0;
    });
    setCurrentStudents((prevTable) => [...sortedTable]);
    setCurrentSort("score");
  };
  //handles all kinds of table sorting
  const sortTable = (e) => {
    e.preventDefault();
    const sortingValue = e.target.innerHTML;
    if (sortingValue === currentSort) return;
    if (sortingValue === "score") return sortTableScore();

    const sortedTable = currentStudents.sort((student1, student2) => {
      if (student1[sortingValue] > student2[sortingValue]) return 1;
      if (student1[sortingValue] < student2[sortingValue]) return -1;
      if (student1[sortingValue] === student2[sortingValue]) return 0;
    });
    setCurrentStudents((prevStudents) => [...sortedTable]);
    setCurrentSort(sortingValue);
  };

  const getAverageScore = (studentScores) => {
    return (
      (studentScores.firstTermScore +
        (studentScores.secondTermScore + studentScores.thirdTermScore) * 2) /
      5
    );
  };

  //handles delete and updating student list in case of sorting / filtering
  const handleDelete = (studentToDelete) => {
    onStudentDelete(studentToDelete);
    if (currentSort || currentFilter) {
      let newStudentsList = currentStudents.filter(
        (student) => student.id !== studentToDelete.id
      );
      setCurrentStudents(newStudentsList);
    }
  };

  return (
    <>
      <div className='d-flex mt-2'>
        <input
          className='form-control me-2'
          type='search'
          placeholder='Search By Name'
          aria-label='Search'
          style={{ width: "50%" }}
          onChange={(e) => filterStudents(e.target.value)}
        />
        <button
          className='btn btn-primary'
          onClick={() => onSetStudentFormOpen(true)}
        >
          Add a student
        </button>
      </div>
      {gotStudents ? (
        <table className='table'>
          <thead>
            <tr>
              {Object.keys(Students[0]).map((key) => {
                if (key === "id" || key === "email")
                  return (
                    <th scope='col' key={key}>
                      {key}
                    </th>
                  );
                return (
                  <th scope='col' key={key}>
                    <a href='/' value={key} onClick={(e) => sortTable(e)}>
                      {key}
                    </a>
                  </th>
                );
              })}
              <th scope='col'>remark</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => {
              return (
                <StudentRow
                  student={student}
                  key={student.id}
                  onDelete={handleDelete}
                  studentID={student.id}
                  onUpdateStudent={onUpdateStudent}
                />
              );
            })}
          </tbody>
        </table>
      ) : Students.length === 0 ? (
        "The list of Students is empty."
      ) : (
        "No matches found"
      )}
    </>
  );
};

export default StudentsTable;
