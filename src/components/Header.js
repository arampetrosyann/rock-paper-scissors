import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: (props) => ({
    height: props.height,
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    boxShadow: props.boxShadow,
    fontSize: props.size,
    fontWeight: props.fontWeight,
    textAlign: props.textAlign,
    textShadow: props.textShadow,
  }),
});

export default function Header({ text, children, ...props }) {
  const classes = useStyles(props);

  return (
    <header className={classes.header}>
      {text ? <h1>{text}</h1> : null}
      {children}
    </header>
  );
}

Header.defaultProps = {
  text: "",
  textColor: "#ffffff",
  textAlign: "left",
  size: 30,
};

Header.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
