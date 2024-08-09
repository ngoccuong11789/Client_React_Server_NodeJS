import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";



function App() {

  const [information, setInformation] = useState({
    language: '',
    ratings: '',
    tools: '',
  })

  const {language, ratings, tools} = information;
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch("http://localhost:5002/list");
    const result = await response.json();
    setInformation(result);

  }

  return (
    <div className="App"> {
      language === "Javascript" ? (
        <>
        <label>HTML/CSS {ratings}</label>
        <br></br>
        <label>Javascript build tools {tools}</label>
        </>
      ) : (
        <>
        <label>Core Java {ratings}</label>
        <br></br>
        <label>Java Build Tools {tools}</label>
        </>
      )
    }
      
    </div>
  );
}


export default App;
