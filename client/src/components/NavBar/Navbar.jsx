import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar,Form,FormControl } from "react-bootstrap";
import { useDispatch} from 'react-redux';
import {getText} from "../../redux/actions/actions"

const NavbarApp = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(getText(text))
        setText("");
    }

  return (
    <div>
      <Navbar expand="lg" className="nav">
        <div className="contain">
          <Form className="form" onSubmit={handleSubmit}>
            <FormControl
              className="input"
              type="text"
              placeholder="Insert Text"
              aria-label="Search"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <Button style={{ width: "100px" }} variant="outline-success" onClick={handleSubmit}>
              Send
            </Button>
          </Form>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarApp;
