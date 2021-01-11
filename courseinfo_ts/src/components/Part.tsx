import React from "react";
import { CoursePart } from "../types";

const Part: React.FC<{coursePart: CoursePart}> = ({coursePart}) => {
  switch (coursePart.name) {
    case "Fundamentals":
      return <p key = {coursePart.name}>{coursePart.name} {coursePart.exerciseCount} {coursePart.description}</p>;
    case "Using props to pass data":
        return <p key = {coursePart.name}>{coursePart.name} {coursePart.exerciseCount} {coursePart.groupProjectCount}</p>;
    case "Deeper type usage":
      return <p key = {coursePart.name}>{coursePart.name} {coursePart.exerciseCount} {coursePart.description} {coursePart.exerciseSubmissionLink}</p>;
    case "Fourth Course Part":
      return <p key = {coursePart.name}>{coursePart.name} {coursePart.exerciseCount} {coursePart.description}</p>;
    default:
      return assertNever(coursePart);
  }
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

export default Part;