export function HeaderComponent(props) {
  
  const title = "Hello React".toUpperCase() + "??";

  //returns the dom to show -- what does 
  //this component look like
  return (
    <header className="p-3">
      <h1> <em>{title}</em></h1>
    </header>
  )
}
