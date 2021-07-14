import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Navbar,Form,FormControl } from "react-bootstrap";

const NavbarApp = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav">
        <div className="contain">
          <Form className="form">
            <FormControl
              className="input"
              type="text"
              placeholder="Insert Text"
              aria-label="Search"
            />
            <Button style={{ width: "100px" }} variant="outline-success">
              Send
            </Button>
          </Form>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarApp;
