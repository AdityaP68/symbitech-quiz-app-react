import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

let teamNum;

const Quiz = ({ questions, namesRef, score, setScore}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [names, setName] = useState(namesRef.current.names);
  useEffect(() => {
    teamNum = Math.floor(Math.random() * 1000);
  }, []);
  console.log(questions);
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, Team#{teamNum}</span>
      <div style ={{position: "absolute", top: "28px", right: "105px"}}>
        <p>{names.name1}</p>
        <p>{names.name2}</p>
        <p>{names.name3}</p>
        <p>{names.name4}</p>
      </div>

      <>
        <div className="quizInfo">
        <Question
        currQues={currQues}
        questions={questions}
        score = {score}
        setScore = {setScore}
        setCurrQues= {setCurrQues}
        />
        </div>
      </>
      {questions ? (
        <></>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
