import React from "react";
import styles from "./CourseGoals.module.css";
import { type ReactNode } from "react";

interface courseGoals {
  title: String;
  children: ReactNode;
}

const CourseGoals = ({ title, children }: courseGoals) => {
  return (
    <div>
      <article className={styles.articleCard}>
        <h2>{title}</h2>
        <button>Delete</button>
      </article>
    </div>
  );
};

export default CourseGoals;
