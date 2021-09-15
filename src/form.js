import React from 'react';

const Form = (props) => {

  return (
    <div className="form">

      <input
        type="text"
        placeholder="author"
        className="input"
        value={props.newAuthor}
        onChange={props.onChangeAuthor}
      />
      <br />
      <input
        type="textarea"
        placeholder="text"
        className="input"
        value={props.newText}
        onChange={props.onChangeText}
      />
      <br />
      <div
        className="err"
      >
        {props.errorText}
      </div>

      <input
        type="button"
        value="Submit"
        className="button"
        onClick={props.onSubmit}
      />

    </div>
  )
}

export default Form;
