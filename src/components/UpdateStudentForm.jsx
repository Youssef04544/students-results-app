import { useState } from "react";

const UpdateStudentForm = ({ Student }) => {
  console.log(Student);
  const [birthDate, setBirthDate] = useState(Student.birthDate.split("T")[0]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // onSetOriginalStudentList((prevList) => [...prevList, Student]);
          // onSetAddingStudent(false);
        }}
      >
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            required
            id='name'
            type='text'
            className='form-control'
            onChange={(e) => (Student.name = e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input
            required
            id='lastname'
            type='text'
            className='form-control'
            onChange={(e) => (Student.lastName = e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Gender</label>
          <input
            required
            id='gender'
            type='text'
            className='form-control'
            onChange={(e) => (Student.gender = e.target.value)}
            value={Student.gender}
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
              console.log(Student);
            }}
            value={birthDate}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='lastname'>Section</label>
          <input
            required
            id='section'
            type='text'
            className='form-control'
            onChange={(e) => (Student.section = e.target.value)}
            value={Student.section}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            required
            id='email'
            type='email'
            className='form-control'
            onChange={(e) => (Student.email = e.target.value)}
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
            onChange={(e) =>
              (Student.score.firstTermScore = parseInt(e.target.value))
            }
            placeholder='first term score'
          />
          <input
            required
            id='score'
            type='number'
            max={20}
            min={0}
            className='form-control'
            onChange={(e) =>
              (Student.score[0].secondTermScore = parseInt(e.target.value))
            }
            placeholder='second term score'
          />
          <input
            required
            id='score'
            type='number'
            max={20}
            min={0}
            className='form-control'
            onChange={(e) =>
              (Student.score[0].thirdTermScore = parseInt(e.target.value))
            }
            placeholder='third term score'
          />
        </div>
      </form>
    </>
  );
};

export default UpdateStudentForm;
