import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  console.log("score", score);

  const handleCheck = (option) => {
    console.log(
      option,
      questions[currQues].correct_option,
      option == questions[currQues].correct_option
    );
    setSelected(option);
    if (option === questions[currQues].correct_option) {
      setScore((v) => v + 1);
      // console.log('working')
    }
    setError(false);
  };

  const handleNext = () => {
    if (currQues > questions.length - 2) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
    setScore(0);
  };
  // console.log("ques", questions);
  console.log(currQues, questions.length)

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {currQues < questions.length-1 && (
        <div className="singleQuestion">
          <h2>{questions[currQues].description}</h2>
          <div className="options">
            <button
              className={`singleOption ${selected === 1 && "select"}`}
              onClick={() => {
                handleCheck(1);
              }}
              disabled={selected}
            >
              {questions[currQues].option_a}
            </button>
            <button
              className={`singleOption ${selected === 2 && "select"}`}
              onClick={() => {
                handleCheck(2);
              }}
              disabled={selected}
            >
              {questions[currQues].option_b}
            </button>
            <button
              className={`singleOption ${selected === 3 && "select"}`}
              onClick={() => {
                handleCheck(3);
              }}
              disabled={selected}
            >
              {questions[currQues].option_c}
            </button>
            <button
              className={`singleOption ${selected === 4 && "select"}`}
              onClick={() => {
                handleCheck(4);
              }}
              disabled={selected}
            >
              {questions[currQues].option_d}
            </button>
          </div>
          <div className="controls">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 185 }}
              href="/"
              onClick={() => handleQuit()}
            >
              Quit
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={handleNext}
            >
              {currQues > questions.length - 2 ? "Submit" : "Next Question"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
