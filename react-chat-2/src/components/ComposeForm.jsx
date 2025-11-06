import React, { useState } from 'react';

export function ComposeForm(props) {
  const { currentChannel, addMessageFunction } = props;

  const [typedInput, setTypedInput] = useState("");
  // console.log(typedInput);

  const handleSubmit = (event) => {
    event.preventDefault();

    //add a message with the text the user typed
    console.log("post ", typedInput);

    //hard-code user object
    const userObj = {userId: 'Parrot', userName: 'Parrot', userImg: '/img/Parrot.png'}

    addMessageFunction(userObj, typedInput, "general");
    setTypedInput('');

  }

  const handleChange = (event) => {
    const whatTheyTyped = event.target.value;
    // console.log(whatTheyTyped);
    setTypedInput(whatTheyTyped);
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={typedInput}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}