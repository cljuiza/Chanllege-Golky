import React,{ useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Alert } from "react-bootstrap";
import { useSelector } from 'react-redux'

const Cards = () => {
  const dataTexts=useSelector((state=>state));
  const [text, setText] = useState([]);
  const style = {
    borderRadius: "20px",
    width: "60%",
    paddingTop: "25px",
    background: "#282c34",
    border: " 3px solid #C1C6CA",
    marginBlock:"50px"
  };

  useEffect(() => {
    dataTexts.reverse();
    setText(dataTexts)
  }, [dataTexts]);

  return (
    <div className="App-header">
      <Card style={style} >
        <h2>Results:</h2>
        <Card.Body>
        {
          text.map((e,index)=><Alert  variant="success" key={index}>{e} </Alert>)
        }
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
