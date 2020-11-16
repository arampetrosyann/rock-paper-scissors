import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: (props) => ({
    display: "flex",
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    alignSelf: props.alignSelf,
    flexWrap: props.flexWrap,
    flex: props.flex,
  }),
});

export default function Figure({ children, ...props }) {
  const classes = useStyles(props);

  return <div className={classes.container}>{children}</div>;
}
