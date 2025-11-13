import React, {useState} from 'react';

import DEFAULT_USERS from '../data/users.json';

export function HeaderBar(props) {
  const { currentUser, changeUserFunction } = props;

  //event handler
  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    console.log(selectedUserObj);
    //do something with userObj!
    changeUserFunction(selectedUserObj);
  }

  //for convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    let classListString = "btn user-icon"

    if(userObj.userId == currentUser.userId) {
      classListString += " bg-success";
    }

    return (
      <button className={classListString} key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
      </button>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>
      <div>
        {userButtons}
      </div>
    </header>
  )
}