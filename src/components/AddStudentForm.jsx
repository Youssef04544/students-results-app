const AddStudentForm = () => {
  return (
    <div>
      <h1>Add a student</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input id='lastname' type='text' className='form-control' />
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='inlineRadioOptions'
            id='inlineRadio1'
            value='option1'
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
            value='option2'
          />
          <label className='form-check-label' htmlFor='inlineRadio2'>
            Femme
          </label>
        </div>
        <br />
        <div className='form-group'>
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' className='form-control' />
        </div>
        {/* section */}

        <div onChange={(e) => console.log(e.target.value)}>
          <div className='form-check form-check-inline'>
            <input
              className='form-check-input'
              type='radio'
              name='section'
              id='flexRadioDefault1'
              value={"Mathemathique"}
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
            />
            <label className='form-check-label' htmlFor='flexRadioDefault4'>
              Lettre
            </label>
          </div>
        </div>
        <button className='btn btn-primary'>Add</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
