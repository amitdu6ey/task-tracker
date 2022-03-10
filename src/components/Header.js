import React from "react";
import Button from "./Button";

const Header = ({ name }) => {
  const onClick = (event) => {
    console.log("click");
  };

  return (
    <div className="header">
      <h1> Task Tracker </h1>
      <Button color="green" text="ADD" onClick={onClick} />
    </div>
  );
};

Header.defaultProps = {
  name: "Jimbo"
};

export default Header;
