import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App(props) {
  const [stateData, setStateData] = useState(EXAMPLE_DATA);
  //control form
  const [queryInput, setQueryInput] = useState('');

  //code to execute when we first render
  useEffect(() => {
    const url = "https://api.github.com/search/repositories?q=react";
    fetch(url)
      .then((response) => {
        return response.json(); //encodes
      })
      .then((data) => {
        const itemsArray = data.items;
        setStateData(itemsArray);
      })    
      .catch((err) => {
        console.log(err);
      })

  }, []);




  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitting form");

    //do something with form input!
    const url = "https://api.github.com/search/repositories?q="+queryInput;
    console.log(url);

    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);

    fetch(url)
      .then((response) => {
        return response.json(); //encodes
      })
      .then((data) => {
        console.log(data);
        const itemsArray = data.items;
        setStateData(itemsArray);

      })
      
      .catch((err) => {
        console.log(err);
      })


    console.log("request sent");


  }

  //outside of the event handler


  //render the data
  console.log(stateData);
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;