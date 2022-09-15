//import proptypes
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import React from "react";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

//default if there is no attributes
Header.defaultProps = {
  title: "Friends",
};

//makes it to where when you assign an atribute it will give you an error if it's not a string
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//css in JS
// const headingStyle = {
//   color: "red",
//   background: "black",
// };

export default Header;
