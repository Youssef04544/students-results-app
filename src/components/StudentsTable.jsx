import React, { useState } from "react";
import Students from "../helpers/Students";
import StudentRow from "./StudentRow";

const StudentsTable = () => {
  const [currentStudents, setCurrentStudents] = useState(Students);
  const [gotStudents, setGotStudents] = useState(true);
  const [currentSort, setCurrentSort] = useState(""); // use for performance so we dont resort the list if it's already sorted by the chosen sorting value

  const filterStudents = (filterName) => {
    // if no filter applied, shows all the students
    if (filterName === "") {
      setCurrentStudents(Students);
    } else {
      var filteredStudents = Students.filter((student) => {
        return student.name.toLowerCase().includes(filterName.toLowerCase());
      });
      setCurrentStudents(filteredStudents);
    }
    if (filteredStudents.length >= 1 && !gotStudents) setGotStudents(true);
    else if (filteredStudents.length === 0 && gotStudents)
      setGotStudents(false);
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

  return (
    <>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Search By Name'
        aria-label='Search'
        onChange={(e) => filterStudents(e.target.value)}
      />
      {gotStudents
        ? "No matches found." && (
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
                  return <StudentRow student={student} key={student.id} />;
                })}
              </tbody>
            </table>
          )
        : "No matches found"}
    </>
  );
};

export default StudentsTable;
