import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_CHAT_LOG);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

  const navigateTo = useNavigate(); //navigation hook

  //effect to run when the component first loads!
  useEffect(() => {
    //log in a default user
    changeUser(DEFAULT_USERS[1])

  }, []) //array is list of variables that will cause this to rerun if changed

  useEffect(() => {
    const db = getDatabase();
    const allMessagesRef = ref(db, "allMessages");

    onValue(allMessagesRef, (snapshot) => {
      //what to do when the data changes
      console.log("database changed!");
      const dataObj = snapshot.val();
      console.log(dataObj);
      const keyArray = Object.keys(dataObj);

      const dataArray = keyArray.map((keyString) => {
        const transformed = dataObj[keyString]
        return transformed;
      })

      console.log(dataArray);

      //have ["","",""]
      //want [{}, {}, {}]


      setMessageStateArray(dataArray);
    })

  }, [])


  const changeUser = (userObj) => {
    console.log("changing user to", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/'); //go to chat after login
    }
  }
  
  const addMessage = (userObj, text, channel) => {
    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }

    //put that message into the database
    const db = getDatabase();
    const allMessagesRef = ref(db, "allMessages");
    firebasePush(allMessagesRef, newMessageObj);

    // const dayOfWeek = "monday"
    // const profRef = ref(db, "professor/schedule/"+dayOfWeek);
    // firebaseSet(profRef, "Office Hours");


    //put that new message into the state
    // const newMessageArray = [...messageStateArray, newMessageObj];
    // setMessageStateArray(newMessageArray); //update state & rerender
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="/about" element={ <Static.AboutPage /> } />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:chanName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              addMessageFunction={addMessage}
              />
          } />
        </Route>
        <Route path="/signin" element={ 
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
        />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  const {currentUser} = props;

  //...determine if user is logged in
  if(currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;