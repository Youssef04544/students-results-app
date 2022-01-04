const Input = ({ inputName, inputType, inputValue, onSetValue }) => {
  return (
    <div className='form-group'>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        required
        id={inputName}
        type={inputType}
        className='form-control'
        onChange={(e) => {
          onSetValue(e.target.value);
        }}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
