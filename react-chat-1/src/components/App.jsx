import React from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { MessagePane } from './MessagePane.jsx';

function App(props) {

  const currentChannel = "general"

  return (
    <div className="container-fluid">
      <HeaderBar />
      <div className="row">
        <div className="col-3">
          <ChannelList currentChannel={currentChannel} />
        </div>
        <div className="col-9">
          <MessagePane currentChannel={currentChannel} />
        </div>          
      </div>
    </div>
  );
}

export default App;