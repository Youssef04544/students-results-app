import { useState } from "react";
import Input from "./Input";

const StudentForm = ({
  Student,
  onSetOriginalStudentList,
  onSetStudentFormOpen,
  onSetCurrentStudentToUpdate,
}) => {
  const [name, setName] = useState(Student.name || "");
  const [lastName, setLastName] = useState(Student.lastName || "");
  const [gender, setGender] = useState(Student.gender || "");
  //because im using split here, I must use the function init for default value otherwise it would crash the app when we have no Student
  //object available to apply the .split() on
  const [birthDate, setBirthDate] = useState(() => {
    if (Student.name) return Student.birthDate.split("T")[0];
    return "";
  });
  const [section, setSection] = useState(Student.section || "");
  const [email, setEmail] = useState(Student.email || "");
  const [score, setScore] = useState(() => {
    if (Student.score) return Student.score[0];
    return {
      firstTermScore: 0,
      secondTermScore: 0,
      thirdTermScore: 0,
    };
  });

  const resetAll = (e) => {
    e.preventDefault();
    setName(Student.name || "");
    setLastName(Student.lastName || "");
    setGender(Student.gender);
    setBirthDate((prevValue) => {
      if (Student.name) return Student.birthDate.split("T")[0];
      return "";
    });
    setSection(Student.section || "");
    setEmail(Student.email || "");
    setScore((prevValue) => {
      if (Student.score) return Student.score[0];
      return {
        firstTermScore: 0,
        secondTermScore: 0,
        thirdTermScore: 0,
      };
    });
    console.log("everything is reset lol");
  };
  const sumbitStudentForm = () => {
    Student = {
      ...Student,
      name,
      lastName,
      gender,
      birthDate,
      section,
      email,
      score: [score],
    };
    //Checks if we're adding a new student or updating an existing one
    if (!Student.id) {
      onSetOriginalStudentList((prevList) => [
        ...prevList,
        { id: prevList.length + 1, ...Student },
      ]);
    }
    onSetOriginalStudentList((prevList) => {
      const index = prevList.findIndex((element) => element.id === Student.id);
      prevList[index] = { ...Student };
      return [...prevList];
    });
    onSetStudentFormOpen(false);
    onSetCurrentStudentToUpdate({});
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sumbitStudentForm();
        }}
        onReset={(e) => resetAll(e)}
        className='container border border-2 border-dark rounded my-3 p-3'
      >
        {/* Input interface : inputName, inputType, inputValue, onSetValue  */}
        <Input
          inputName='Name'
          inputType='text'
          inputValue={name}
          onSetValue={setName}
        />
        <Input
          inputName='Last Name'
          inputType='text'
          inputValue={lastName}
          onSetValue={setLastName}
        />
        <Input
          inputName='Gender'
          inputType='text'
          inputValue={gender}
          onSetValue={setGender}
        />
        <Input
          inputName='Birth Date'
          inputType='date'
          inputValue={birthDate}
          onSetValue={setBirthDate}
        />
        <Input
          inputName='Section'
          inputType='text'
          inputValue={section}
          onSetValue={setSection}
        />
        <Input
          inputName='Email'
          inputType='email'
          inputValue={email}
          onSetValue={setEmail}
        />
        <div className='form-group score-group'>
          <label htmlFor='score'>Score</label>
          <input
            required
            id='score'
            type='number'
            step={0.01}
            max={20}
            min={0}
            className='form-control'
            onChange={(e) => {
              setScore((prevScore) => {
                return {
                  ...prevScore,
                  firstTermScore: parseFloat(e.target.value),
                };
              });
            }}
            placeholder='first term score'
            value={score.firstTermScore}
          />
          <input
            required
            id='score'
            type='number'
            max={20}
            min={0}
            step={0.01}
            className='form-control'
            onChange={(e) => {
              setScore((prevScore) => {
                return {
                  ...prevScore,
                  secondTermScore: parseFloat(e.target.value),
                };
              });
            }}
            placeholder='second term score'
            value={score.secondTermScore}
          />
          <input
            required
            id='score'
            type='number'
            step={0.01}
            max={20}
            min={0}
            className='form-control'
            onChange={(e) => {
              setScore((prevScore) => {
                return {
                  ...prevScore,
                  thirdTermScore: parseFloat(e.target.value),
                };
              });
            }}
            placeholder='third term score'
            value={score.thirdTermScore}
          />
        </div>
        <div className='d-flex justify-content-between'>
          <button type='reset' className='btn btn-warning'>
            Reset
          </button>
          <button type='submit' className='btn btn-primary'>
            {Student.name ? "Update" : "Add"}
          </button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => onSetStudentFormOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default StudentForm;
