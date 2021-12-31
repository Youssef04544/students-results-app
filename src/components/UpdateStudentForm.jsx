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
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSetOriginalStudentList((prevList) => {
            const studentsList = prevList;
            const index = studentsList.findIndex(
              (element) => element.id === Student.id
            );
            studentsList[index] = { ...Student };
            return [...studentsList];
          });
          onSetUpdatingStudent(false);
        }}
      >
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            required
            id='name'
            type='text'
            className='form-control'
            onChange={(e) => {
              Student.name = e.target.value;
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
              Student.lastName = e.target.value;
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
              Student.gender = e.target.value;
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
              Student.birthDate = e.target.value;
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
              Student.section = e.target.value;
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
              Student.email = e.target.value;
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='score'>Score</label>
          <input
            required
            id='score'
            type='number'
            max={20}
            min={0}
            className='form-control'
            onChange={(e) => {
              Student.score[0].firstTermScore = parseInt(e.target.value);
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
              Student.score[0].secondTermScore = parseInt(e.target.value);
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
              Student.score[0].thirdTermScore = parseInt(e.target.value);
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
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateStudentForm;
