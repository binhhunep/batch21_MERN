import React, { useState } from "react";
import styles from "./styles.module.scss";
import "bootstrap";
import Navbar from "../navbar";

export default function Header() {
  const [state, setState] = useState({ para: "", check: true });

  const readclick = () => {
    state.check === true
      ? setState({
          para: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.This article is about the brewed beverage. For the seeds from which it is made, see Coffee bean. For the plant, see Coffea. For other uses, see Coffee (disambiguation).",
          check: !state.check,
        })
      : setState({
          para: "",
          check: !state.check,
        });
  };

  return (
    <>
      <div className={styles.header}>
        <h1
          style={{ color: "white", fontSize: "3vmax", padding: "1vmax 3vmax" }}
        >
          SPECIAL COFFEE BEANS
        </h1>
        <p
          className="text-white "
          style={{
            textIndent: "3vw",
            textAlign: "justify",
            fontSize: "1.5vmax",
            padding: "0 4vmax",
          }}
        >
          {state.para}
        </p>
        <br />
        <button
          style={{
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
        <br />
      </div>
    </>
  );
}
