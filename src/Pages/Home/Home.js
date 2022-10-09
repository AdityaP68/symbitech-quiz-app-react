import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import InputField from "../../utils/InputField";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [error, setError] = useState(false);
  const [name1Val, setName1Val] = useState('');

  const history = useHistory();

  const handleSubmit = () => {
    setError(false);
    fetchQuestions("books", "easy");
    history.push("/quiz");
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Setup</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          {/* <TextField
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          /> */}
          <InputField
            placholder="Enter your Name"
            inputHandler={(e) => {
              console.log(name1Val);
              setName1Val((e) => {
                setName((prevState) => [...prevState, e]);
              });
            }}
          />
          {/* <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField> */}
          {/* <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField> */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
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
