import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import InputField from "../../utils/InputField";
import styles from "./TeamNum.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function TeamNum({ teamId, setTeamId, namesRef }) {
  const [error, setError] = useState(false);
  const history = useHistory();

  // check valid team Id and populate the namesRef with the members name
  const fetchTeamById = async () => {};

  const handleStart = () => {
    console.log(teamId);
    if (!teamId) {
      return setError(true);
    }
    history.push("/quiz");
  };
  return (
    <div className={styles.container}>
      {error && <ErrorMessage>Enter your team Id</ErrorMessage>}
      <span>Enter Your Team Number:</span>
      <InputField
        inputHandler={(e) => {
          //   console.log(e);
          setTeamId(e);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleStart}
      >
        Start Quiz
      </Button>
    </div>
  );
}

export default TeamNum;
