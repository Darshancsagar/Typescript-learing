import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CourseGoals from "./components/CourseGoals";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CourseGoals title="Learn TS" description="Learn at your best" />
    </>
  );
}

export default App;
