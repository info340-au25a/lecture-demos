import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json';

export function ChatPane(props) {
  console.log("rendering chatpane")
  const { currentChannel } = props;

  //STATE DEMO
  const [currentCount, setCurrentCount] = useState(0)
    console.log(currentCount);

  // const currentCount = resultArray[0]; //value
  // const setCurrentCount = resultArray[1]; //function to change it

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG);



  //data: an array of message objects [{}, {}]
  const messageObjArray = msgStateArray;

  const handleClick = (event) => {
    console.log("You clicked me!");
    const userObj = {userId: 'Parrot', userName: 'Parrot', userImg: '/img/Parrot.png'}
    addMessage(userObj, "You clicked me!", "general");

    setCurrentCount(340); //1. change the value in state
                                      //2. RERENDERS the component
  }

  // DATA MANAGEMENT: how do we change
  const addMessage = (userObj, messageText, channel) => {
    console.log("callling add message");
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }

    const updatedMessageArray = [...messageObjArray, newMessage];
    setMsgStateArray(updatedMessageArray);
    // console.log(newMessage);
    // messageObjArray.push(newMessage)
    // console.log(messageObjArray);
  }

  /* RENDERING: what do we look like */

  //Step 1. data processing
  //data: an array of message objects [{}, {}]
  //sorted and filtered
  const channelMessages = messageObjArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp) //reverse chron order
    .filter((msgObj) => { //channel messages only
      return msgObj.channel === currentChannel; //whether to keep
    })

  //Step 2. convert data to views
  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane pt-2 my-2">
        {/* button demo */}
        <div className="mb-2">
          {/* button.addEventLister('click', someFunction) 
              button onClick={someFunction}
            */}
          <button onClick={handleClick} className="btn btn-success">Add a message! {currentCount}</button>
        </div>
        <hr/>

        {/* conditional rendering */}
        { messageItemArray.length === 0 && 
          <p>No messages yet</p>
        }

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm currentChannel={currentChannel} addMessageFunction={addMessage} />
    </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
