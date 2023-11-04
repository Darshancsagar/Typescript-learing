import React from "react";
import styles from "./CourseGoals.module.css";

const CourseGoals = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <article className={styles.articleCard}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Delete</button>
      </article>
    </div>
  );
};

export default CourseGoals;
