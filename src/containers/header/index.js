import React, { useState } from "react";
import styles from "./styles.module.scss";
import "bootstrap";
import Navbar from "../navbar";

export default function Header() {
  const [state, setState] = useState({
    mongoDB: "",
    express: "",
    react: "",
    node: "",
    check: false,
  });

  const readclick = () => {
    state.check === true
      ? setState({
          mongoDB: "1. MongoDB – document database",
          express: "2. Express(.js) – Node.js web framework",
          react: "3. React(.js) – a client-side JavaScript framework",
          node: "4. Node(.js) – the premier JavaScript web server",
          check: !state.check,
        })
      : setState({
          mongoDB: "",
          express: "",
          react: "",
          node: "",
          check: !state.check,
        });
  };

  return (
    <>
      <div className={styles.header}>
        <h1
          style={{
            color: "white",
            fontSize: "2.5vmax",
            padding: "1vmax 3vmax",
          }}
        >
          MERN FULL STACK DEVELOPER
        </h1>
        <button
          style={{
            width: "14vmax",
            color: "white",
            fontSize: "1.5vmax",
            background: "none",
            border: "1px solid white",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={readclick}
        >
          Read More
        </button>
        <br />
        <p
          className="text-white "
          style={{
            textIndent: "3vw",
            textAlign: "justify",
            fontSize: "1.5vmax",
            padding: "0 4vmax",
            wordWrap: "normal",
          }}
        >
          {
            "MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack."
          }
        </p>
        <i>{state.mongoDB}</i>
        <i>{state.express}</i>
        <i>{state.react}</i>
        <i>{state.node}</i>
        <br />
        <br />
      </div>
    </>
  );
}
