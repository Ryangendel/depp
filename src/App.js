import { useState, useEffect } from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap";
import Example from "./components/example";
import Contact from "./components/contact";
import ProductInfo from "./components/productinfo";
import AboutUs from "./components/aboutus";
import { DogProvider } from "./utils/dogContext"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom" 
// import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [joke, setJoke] = useState("");
  const [macroUserData, setMacroUserData]= useState({})

  function handleChange(e) {
    //console.log(e.target.value)
    setEmail(e.target.value);
  }

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((data) => data.json())
      .then((data) => {
        setJoke(data.value);
      });
  }, []);

  useEffect(() => {
    
    console.log("you hit the useEffect for email and user name")
  }, [userName]);
  //DRY
  //DONT REPEAT YOURESELF

  async function sendDataToDatabase(userEmail) {
    console.log(userEmail);
  }

  function bulldog(e) {
    e.preventDefault();
    sendDataToDatabase(email);
    console.log("YOUR IN THE BULLDOG FUNCTION");
  }

  return (
    <section className="App">
        <DogProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Example />}/>
              <Route path="/home" element={<Example />}/>
              <Route path="/home/productinfo" element={<ProductInfo />}/>
              <Route path="/home/aboutus" element={<AboutUs />}/>
              <Route path="/contact/:pokemonname" element={<Contact />}/>
            </Routes>
          </Router>
        </DogProvider>
    </section>
  );
}

export default App;


