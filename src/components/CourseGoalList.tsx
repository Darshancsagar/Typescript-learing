import React from "react";
import CourseGoals from "./CourseGoals";
import { courseGoal } from "../App";

type courseGoalList = {
  goals: courseGoal[];
};

const CourseGoalList = ({ goals }: courseGoalList) => {
  return (
    <div>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoals title={goal.title}>{goal.description}</CourseGoals>
          </li>
        );
      })}
    </div>
  );
};

export default CourseGoalList;
