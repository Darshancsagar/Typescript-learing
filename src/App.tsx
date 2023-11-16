import React, { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CourseGoals from "./components/CourseGoals";
import CourseGoalList from "./components/CourseGoalList";

export type courseGoal = {
  title: String;
  description: String;
  id: number;
};

function App() {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState<courseGoal[]>([]);
  const GoalRef = useRef();

  const addGoalHandler = () => {
    setGoals((prevGoals) => {
      const newGoal = {
        title: "Learn- typescript",
        description: "Learn TS effiecnetly",
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    }); // Add the new goal to the goals array
    setValue(""); // Clear the input field
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((goals) => goals.filter((goals) => goals.id !== id));
  };

  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} />
      <button onClick={addGoalHandler}>Add Goal</button>
      <CourseGoalList goals={goals} />
    </>
  );
}

export default App;
