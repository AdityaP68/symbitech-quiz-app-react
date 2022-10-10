import { Button, MenuItem, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import InputField from "../../utils/InputField";
import "./Home.css";

const Home = ({ namesRef, fetchQuestions }) => {
  const [error, setError] = useState(false);

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [idx, setIdx] = useState(2);

  const nameSetterArr = [setName1, setName2, setName3, setName4];
  const [currArr, setCurrArr] = useState([nameSetterArr[0], nameSetterArr[1]]);

  const history = useHistory();

  useEffect(() => {
    namesRef.current.names = {
      name1: name1,
      name2: name2,
      name3: name3,
      name4: name4,
    };
    // console.log('ref',namesRef.current.names)
  }, [name1, name2, name3, name4]);

  const handleSubmit = () => {
    setError(false);
    fetchQuestions();
    history.push("/quiz");
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Setup</span>
        <div className="settings__select">
          {error && <ErrorMessage>Max Member Limit Reached</ErrorMessage>}

          {currArr.map((item, idx) => (
            <InputField
              id={idx}
              inputHandler={(e) => {
                // console.log(name1, name2, name3, name4);
                item(e);
              }}
            />
          ))}
          <button
            style={{
              padding: "0.8rem",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={() => {
              if (idx < 4) {
                setIdx((v) => v + 1);
                setCurrArr((prev) => [...prev, nameSetterArr[idx]]);
                setError(false);
              } else {
                setError(true);
              }
            }}
          >
            add members +
          </button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              handleSubmit();
            }}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <img
          src="/quiz.svg"
          className="banner"
          alt="quiz app"
          style={{ width: "40vw" }}
        />
      </div>
    </div>
  );
};

export default Home;
