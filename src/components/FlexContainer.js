import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: (props) => ({
    display: "flex",
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    align: {
      self: props.alignSelf,
      items: props.alignItems,
      content: props.alignContent,
    },
    flexWrap: props.flexWrap,
    flex: props.flex,
  }),
});

export default function Figure({ children, ...props }) {
  const classes = useStyles(props);

  return <div className={classes.container}>{children}</div>;
}
