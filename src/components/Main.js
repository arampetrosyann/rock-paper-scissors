import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: (props) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    padding: props.padding,
  }),
});

export default function Main({ children, className, ...props }) {
  const classes = useStyles(props);

  return <main className={`${classes.main} ${className}`}>{children}</main>;
}

Main.defaultProps = {
  alignItems: "center",
  className: "",
};

Main.propTypes = {
  className: PropTypes.string,
};
