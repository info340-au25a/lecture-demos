import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

function App(props) {
  const [currentChannel, setCurrentChannel] = useState('general');

  const channelNames = ["general", "social", "birds", "channel-4", "random"]
  
  const changeChannel = (newChannel) => {
    setCurrentChannel(newChannel);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannel} changeChannel={changeChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} />
        </div>
      </div>
    </div>
  );
}

export default App;