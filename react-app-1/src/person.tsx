import * as React from "react";
import image from "./1.png";

interface Props {
  name: string;
  age: number;
  email: string;
}
export function Person(props: Props) {
  return (
    <div className="card">
      <img src={image} alt="Avatar" style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>Age: {props.age}</p>
        <p>email: {JSON.stringify(props.email)}</p>
      </div>
    </div>
  );
}
