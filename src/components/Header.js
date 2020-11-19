import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: (props) => ({
    height: props.height,
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    boxShadow: props.boxShadow,
    font: {
      weight: props.fontWeight,
      size: props.size,
    },
    textAlign: props.textAlign,
    textShadow: props.textShadow,
  }),
});

export default function Header({ heading, children, className, ...props }) {
  const classes = useStyles(props);

  return (
    <header className={`${classes.header} ${className}`}>
      {heading ? <h1>{heading}</h1> : null}
      {children}
    </header>
  );
}

Header.defaultProps = {
  heading: "",
  textColor: "#ffffff",
  textAlign: "left",
  size: 30,
  className: "",
};

Header.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
