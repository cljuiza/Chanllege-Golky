import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
const Cards = () => {

  const style = {
    borderRadius: "20px",
    minWidth: "60rem",
    paddingTop: "25px",
    height: "35rem",
    background: "#282c34",
    border: " 3px solid #C1C6CA",
  };

  return (
    <div className="App-header">
      <Card style={style}>
        <Card.Body>Results:</Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
