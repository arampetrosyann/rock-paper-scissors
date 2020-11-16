import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: (props) => ({
    color: props.textColor,
    backgroundColor: props.backgroundColor,
    fontSize: props.size,
    fontWeight: "bold",
    textAlign: props.textAlign,
    height: props.height,
  }),
});

export default function Header({ text, children, ...props }) {
  const classes = useStyles(props);

  return (
    <header className={classes.header}>
      {text}
      {children}
    </header>
  );
}

Header.defaultProps = {
  textColor: "#ffffff",
  textAlign: "left",
  size: 45,
};

Header.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
