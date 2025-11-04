export function ChannelList(props){

  const {currentChannel} = props;
  const channelNameArray = ["general", "random", "social", "birds", "channel-4"];

  //delete random
  //rename random to be rAnDoM

  const elementArray = channelNameArray.map((name) => {
    let classList = "";
    if(name === currentChannel)
      classList = "bg-warning";

    return  <li className={classList} key={name}>{name}</li>;
  });

  return (
    <nav className="bg-secondary text-white">
      <ul>
        {elementArray}
      </ul>
    </nav>
  )
}