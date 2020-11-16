import React from "react";
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

export default function Main({ children, ...props }) {
  const classes = useStyles(props);

  return <main className={classes.main}>{children}</main>;
}

Main.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
};
