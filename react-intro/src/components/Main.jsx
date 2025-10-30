export function MainComponent(props) {
  return (
    <main>
      {/* block comment */}
      <p>It's a nice day for Thursday</p>
      <p>Yay React!</p>
      <p>{300+40 + "!!"}</p>
      {/* document.createEleemnt('p') */}
      <div className="d-flex">
        <DogImage name="Fido" isGrown={true} />
        <DogImage name="Rover" isGrown={false} />
        <DogImage name="Spot" isGrown={true} />
      </div>
    </main>
  )
}

function DogImage(props) {
  console.log("dog fnction called");
  console.log(props);
  const {name, isGrown} = props;
  //const name = props.name;
  //const isGrown = props.isGrown;

  let imgUrl = "img/puppy.jpg";
  if(isGrown) {
    imgUrl = "img/husky.jpg";
  }

  return (
    <div>
      <div>
        <img src={imgUrl} alt="a cute puppy" />
      </div>
      <h2>{name}</h2>
    </div>
  )
}
