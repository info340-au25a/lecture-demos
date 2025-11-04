
import INITIAL_CHAT_LOG from '../data/chat_log.json';

export function MessagePane(props){
  const { currentChannel } = props;

  console.log(INITIAL_CHAT_LOG);
  //start: [{},{},{}]

  //data processing -- which data to use all
  const channelMsgArray = INITIAL_CHAT_LOG.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  });

  //convert data into view -- what does it look like
  const msgItemArray = channelMsgArray.map((msgObj) => {
    const transformed = (
      <MessageItem key={msgObj.timestamp} messageData={msgObj} />
    )
    return transformed;
  })


  //end: [<>,<>,<>]
  // const msgItemArray = [
  //     <MessageItem key={"a"} messageData={INITIAL_CHAT_LOG[0]} />,
  //     <MessageItem key={"b"} messageData={INITIAL_CHAT_LOG[1]} />,
  //     <MessageItem key={"c"} messageData={INITIAL_CHAT_LOG[2]} />,
  //     <MessageItem key={"d"} messageData={INITIAL_CHAT_LOG[3]} />,
  // ]

  //conditional rendering
  if(channelMsgArray.length === 0){
    return <p>No messages yet!</p>
  }

  return (
    <div>
      {msgItemArray}
    </div>
  )
}

function MessageItem(props){
  console.log(props);
  // const {messageData} = props
  const {userName, userImg, text} = props.messageData;

  return (
    <div className="message d-flex">
      <div className="me-2">
        <img src={userImg} alt={userName+"'s avatar"} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}