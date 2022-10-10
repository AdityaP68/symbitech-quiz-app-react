import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const namesRef = useRef({
    names: {}
  })
  
  
  const fetchQuestions = async () => {
    const res = await axios.get("https://codesandboards-server.herokuapp.com/select/quizzes/teamID/1");
    console.log(res.data[0].question)
    setQuestions(res.data[0].question);
    // console.log(questions)
    // console.log('name', namesRef.current.names)
  };
  
  useState(()=>{fetchQuestions()}, [questions])
  
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#1a0035",
          color: "#ffffff",
          minHeight: "96vh",
        }}
      >
        <Header namesRef={namesRef} setScore = {setScore}/>
        <div style={{ marginTop: "2rem" }}>
          <Switch>
            <Route path="/" exact>
              <Home
                name={name}
                setName={setName}
                namesRef = {namesRef}
                fetchQuestions={fetchQuestions}
              />
            </Route>
            <Route path="/quiz">
              <Quiz
                name={name}
                namesRef = {namesRef}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </Route>
            <Route path="/result">
              <div>welcome, your Score is {score}</div>
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
