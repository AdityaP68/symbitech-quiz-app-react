import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

let teamNum;

const Quiz = ({questions}) => {
  
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(()=>{
    teamNum = Math.floor(Math.random()*1000)
  },[])
console.log(questions)
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, Team#{teamNum}</span>
      <div></div>


        <>
          <div className="quizInfo">

          </div>

        </>
        {questions? (<></>) : (
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
