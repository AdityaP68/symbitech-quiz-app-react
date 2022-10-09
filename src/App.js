import axios from "axios";
import { useState } from "react";
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

  const fetchQuestions = async () => {
    const { data } = await axios.get("some url");
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "#1a0035",
          color: "#ffffff",
          minHeight: "96vh",
        }}
      >
        <Header />
        <div style={{ marginTop: "2rem" }}>
          <Switch>
            <Route path="/" exact>
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            </Route>
            <Route path="/quiz">
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </Route>
            <Route path="/result">
              <Result name={name} score={score} />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
