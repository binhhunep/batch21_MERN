import React from "react";
import { useParams } from "react-router-dom";

function Parameter(props) {
  let params = useParams();
  console.log(params);
  return <div style={{ height: "100vh" }}>Parameter</div>;
}

export default Parameter;
