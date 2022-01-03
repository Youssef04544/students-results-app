import { useState } from "react";

const UpdateStudentForm = ({
  Student,
  onSetOriginalStudentList,
  onSetUpdatingStudent,
}) => {
  const [name, setName] = useState(Student.name);
  const [lastName, setLastName] = useState(Student.lastName);
  const [gender, setGender] = useState(Student.gender);
  const [birthDate, setBirthDate] = useState(Student.birthDate.split("T")[0]);
  const [section, setSection] = useState(Student.section);
  const [email, setEmail] = useState(Student.email);
  const [score, setScore] = useState(Student.score[0]);

  const resetAll = (e) => {
    e.preventDefault();
    setName(Student.name);
    setLastName(Student.lastName);
    setGender(Student.gender);
    setBirthDate(Student.birthDate.split("T")[0]);
    setSection(Student.section);
    setEmail(Student.email);
    setScore(Student.score[0]);
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
    console.log(Student);
    onSetOriginalStudentList((prevList) => {
      const studentsList = prevList;
      const index = studentsList.findIndex(
        (element) => element.id === Student.id
      );
      studentsList[index] = { ...Student };
      return [...studentsList];
    });
    onSetUpdatingStudent(false);
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
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            required
            id='name'
            type='text'
            className='form-control'
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            required
            id='lastname'
            type='text'
            className='form-control'
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='gender'>Gender</label>
          <input
            required
            id='gender'
            type='text'
            className='form-control'
            onChange={(e) => {
              setGender(e.target.value);
            }}
            value={gender}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='birthdate'>Birth date</label>
          <input
            required
            id='birthdate'
            type='date'
            className='form-control'
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
            value={birthDate}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='section'>Section</label>
          <input
            required
            id='section'
            type='text'
            className='form-control'
            onChange={(e) => {
              setSection(e.target.value);
            }}
            value={section}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            required
            id='email'
            type='email'
            className='form-control'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className='form-group score-group'>
          <label htmlFor='score'>Score</label>
          <input
            required
            id='score'
            type='number'
            max={20}
            min={0}
            className='form-control'
            onChange={(e) => {
              setScore((prevScore) => {
                return {
                  ...prevScore,
                  firstTermScore: parseInt(e.target.value),
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
            className='form-control'
            onChange={(e) => {
              setScore((prevScore) => {
                return {
                  ...prevScore,
                  secondTermScore: parseInt(e.target.value),
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
            max={20}
            min={0}
            className='form-control'
            onChange={(e) => {
              setScore((prevScore) => {
                return {
                  ...prevScore,
                  thirdTermScore: parseInt(e.target.value),
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
            Update
          </button>
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => onSetUpdatingStudent(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateStudentForm;
