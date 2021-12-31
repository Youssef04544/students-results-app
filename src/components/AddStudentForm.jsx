import React, { useState } from "react";
const AddStudentForm = ({ onSetAddingStudent, onSetOriginalStudentList }) => {
  let Student = {
    id: Math.floor(Math.random() * 100),
    name: "",
    lastName: "",
    gender: "",
    birthDate: "",
    section: "",
    email: "",
    score: [
      {
        firstTermScore: 0,
        secondTermScore: 0,
        thirdTermScore: 0,
      },
    ],
  };
  return (
    <div>
      <h1>Add a student</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSetOriginalStudentList((prevList) => [...prevList, Student]);
          onSetAddingStudent(false);
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
        <div onChange={(e) => (Student.gender = e.target.value)}>
          Gender
          <div className='form-check form-check-inline'>
            <input
              required
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio1'
              value='Homme'
            />
            <label className='form-check-label' htmlFor='inlineRadio1'>
              Homme
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio2'
              value='Femme'
            />
            <label className='form-check-label' htmlFor='inlineRadio2'>
              Femme
            </label>
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='birthdate'>Birth date</label>
          <input
            required
            id='birthdate'
            type='date'
            className='form-control'
            onChange={(e) => (Student.birthDate = e.target.value)}
          />
        </div>

        <div onChange={(e) => (Student.section = e.target.value)}>
          Section
          <br />
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='section'
              id='flexRadioDefault1'
              value={"Mathemathique"}
              required
            />
            <label className='form-check-label' htmlFor='flexRadioDefault1'>
              Mathemathique
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='section'
              id='flexRadioDefault2'
              value={"Informatique"}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault2'>
              Informatique
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='section'
              id='flexRadioDefault3'
              value={"Science Naturelle"}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault3'>
              Science Naturelle
            </label>
          </div>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='section'
              id='flexRadioDefault4'
              value={"Lettre"}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault4'>
              Lettre
            </label>
          </div>
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

        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
