import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [currentChannel, setCurrentChannel] = useState('general');

  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[3]);

  const channelNames = ["general", "social", "birds", "channel-4", "random"]
  
  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  const changeUser = (newUser) => {
    setCurrentUser(newUser);
  }


  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} changeUserFunction={changeUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannel} changeChannel={changeChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;