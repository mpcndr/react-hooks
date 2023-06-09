import React from "react";
import { ProfileProps } from "./type";

export const Profile: React.FC<ProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{`You are ${age} years old.`}</p>
    </div>
  );
};
