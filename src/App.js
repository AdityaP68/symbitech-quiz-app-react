import axios from "axios";
import { useState, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import TeamNum from "./Pages/TeamNum/TeamNum";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [allCorrect, setAllCorrect] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [teamId, setTeamId] = useState("");
  const namesRef = useRef({
    names: {},
  });

  const fetchQuestions = async (teamId= 1) => {
    const res = await axios.get(
      `https://codesandboards-server.herokuapp.com/select/quizzes/teamID/${teamId}`
    );
    // console.log(res.data[0].question);
    setQuestions(res.data[0].question);
    // console.log(questions)
    // console.log('name', namesRef.current.names)
  };

  const fetchApiKey = async (teamId = 1) => {
    const res = await axios.get(
      `https://codesandboards-server.herokuapp.com/select/api_keys/teamID/${teamId}`
    );
    // console.log(res.data[0]);
    setApiKey(res.data[0].key);
  };

  useState(() => {
    fetchQuestions();
  }, [questions]);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#1a0035",
          color: "#ffffff",
          minHeight: "96vh",
        }}
      >
        <Header namesRef={namesRef} setScore={setScore} />
        <div style={{ marginTop: "2rem" }}>
          <Switch>
            <Route path="/" exact>
              <Home
                name={name}
                setName={setName}
                namesRef={namesRef}
                fetchQuestions={fetchQuestions}
              />
            </Route>
            <Route path="/homepage">
              <TeamNum teamId={teamId} setTeamId={setTeamId} />
            </Route>
            <Route path="/quiz">
              <Quiz
                name={name}
                namesRef={namesRef}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
                setAllCorrect={setAllCorrect}
                fetchApiKey={fetchApiKey}
              />
            </Route>
            <Route path="/result">
              {console.log("is all correct", allCorrect)}
              <div
                style={{
                  padding: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                <div>
                  Well, your Score is <b>{score}</b> out of{" "}
                  <b>{questions && questions.length}</b>
                </div>
                <div style={{ marginTop: "0.5rem" }}>
                  {allCorrect ? (
                    <p>
                      Congradulations!! Your <b>API key</b> is:{" "}
                      <span>{apiKey && apiKey}</span>
                    </p>
                  ) : (
                    <p>Better luck next time!!</p>
                  )}
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
